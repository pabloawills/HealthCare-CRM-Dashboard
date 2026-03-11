#!/usr/bin/env python3
"""Healthcare CRM analytics pipeline using standard-library only.

Performs:
1) Data cleaning
2) Variable importance analysis
3) Customer segmentation (k-means implemented from scratch)
4) Forecasting (linear trend model)
5) Artifact generation for strategy assistant
"""

import csv
import json
import math
import zipfile
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from random import Random
from statistics import mean

DATA_PATH = Path("healthcare_dataset.csv")
ARCHIVE_PATH = Path("archive.zip")
OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(exist_ok=True)


@dataclass
class Record:
    name: str
    age: int
    gender: str
    blood_type: str
    medical_condition: str
    admission_date: date
    doctor: str
    hospital: str
    insurance_provider: str
    billing_amount: float
    room_number: int
    admission_type: str
    discharge_date: date
    medication: str
    test_results: str
    length_of_stay: int
    abnormal_flag: int
    emergency_flag: int


def title_case_name(name: str) -> str:
    return " ".join(piece.capitalize() for piece in name.strip().split())




def ensure_dataset():
    if DATA_PATH.exists():
        return
    if not ARCHIVE_PATH.exists():
        raise FileNotFoundError("Dataset not found: expected healthcare_dataset.csv or archive.zip")
    with zipfile.ZipFile(ARCHIVE_PATH) as zf:
        zf.extract("healthcare_dataset.csv", path=".")

def load_and_clean(path: Path):
    records = []
    with path.open() as f:
        reader = csv.DictReader(f)
        for row in reader:
            admission_date = date.fromisoformat(row["Date of Admission"].strip())
            discharge_date = date.fromisoformat(row["Discharge Date"].strip())
            length_of_stay = max((discharge_date - admission_date).days, 0)
            test_result = row["Test Results"].strip().title()
            admission_type = row["Admission Type"].strip().title()
            records.append(
                Record(
                    name=title_case_name(row["Name"]),
                    age=int(row["Age"]),
                    gender=row["Gender"].strip().title(),
                    blood_type=row["Blood Type"].strip().upper(),
                    medical_condition=row["Medical Condition"].strip().title(),
                    admission_date=admission_date,
                    doctor=title_case_name(row["Doctor"]),
                    hospital=row["Hospital"].strip().strip(","),
                    insurance_provider=row["Insurance Provider"].strip(),
                    billing_amount=float(row["Billing Amount"]),
                    room_number=int(row["Room Number"]),
                    admission_type=admission_type,
                    discharge_date=discharge_date,
                    medication=row["Medication"].strip().title(),
                    test_results=test_result,
                    length_of_stay=length_of_stay,
                    abnormal_flag=1 if test_result == "Abnormal" else 0,
                    emergency_flag=1 if admission_type == "Emergency" else 0,
                )
            )
    return records


def write_cleaned_dataset(records):
    out = OUTPUT_DIR / "cleaned_healthcare_dataset.csv"
    fieldnames = [
        "Name", "Age", "Gender", "Blood Type", "Medical Condition", "Date of Admission",
        "Doctor", "Hospital", "Insurance Provider", "Billing Amount", "Room Number",
        "Admission Type", "Discharge Date", "Medication", "Test Results", "Length of Stay",
        "Abnormal Flag", "Emergency Flag"
    ]
    with out.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in records:
            writer.writerow({
                "Name": r.name,
                "Age": r.age,
                "Gender": r.gender,
                "Blood Type": r.blood_type,
                "Medical Condition": r.medical_condition,
                "Date of Admission": r.admission_date.isoformat(),
                "Doctor": r.doctor,
                "Hospital": r.hospital,
                "Insurance Provider": r.insurance_provider,
                "Billing Amount": f"{r.billing_amount:.2f}",
                "Room Number": r.room_number,
                "Admission Type": r.admission_type,
                "Discharge Date": r.discharge_date.isoformat(),
                "Medication": r.medication,
                "Test Results": r.test_results,
                "Length of Stay": r.length_of_stay,
                "Abnormal Flag": r.abnormal_flag,
                "Emergency Flag": r.emergency_flag,
            })


def correlation(xs, ys):
    x_mean = mean(xs)
    y_mean = mean(ys)
    num = sum((x - x_mean) * (y - y_mean) for x, y in zip(xs, ys))
    den_x = math.sqrt(sum((x - x_mean) ** 2 for x in xs))
    den_y = math.sqrt(sum((y - y_mean) ** 2 for y in ys))
    if den_x == 0 or den_y == 0:
        return 0.0
    return num / (den_x * den_y)


def category_effect(records, category_key):
    groups = defaultdict(list)
    for r in records:
        groups[getattr(r, category_key)].append(r.billing_amount)
    overall = mean(r.billing_amount for r in records)
    weighted = sum((len(vals) / len(records)) * abs(mean(vals) - overall) for vals in groups.values())
    return weighted


def feature_importance(records):
    age = [r.age for r in records]
    los = [r.length_of_stay for r in records]
    emergency = [r.emergency_flag for r in records]
    abnormal = [r.abnormal_flag for r in records]
    billing = [r.billing_amount for r in records]

    return {
        "numeric_correlations_with_billing": {
            "Age": round(correlation(age, billing), 4),
            "Length of Stay": round(correlation(los, billing), 4),
            "Emergency Flag": round(correlation(emergency, billing), 4),
            "Abnormal Flag": round(correlation(abnormal, billing), 4),
        },
        "categorical_effect_on_billing": {
            "Medical Condition": round(category_effect(records, "medical_condition"), 2),
            "Insurance Provider": round(category_effect(records, "insurance_provider"), 2),
            "Admission Type": round(category_effect(records, "admission_type"), 2),
            "Medication": round(category_effect(records, "medication"), 2),
            "Test Results": round(category_effect(records, "test_results"), 2),
        },
    }


def normalize_rows(rows):
    cols = list(zip(*rows))
    mins = [min(col) for col in cols]
    maxs = [max(col) for col in cols]
    out = []
    for row in rows:
        norm = []
        for i, val in enumerate(row):
            rng = maxs[i] - mins[i]
            norm.append(0.0 if rng == 0 else (val - mins[i]) / rng)
        out.append(norm)
    return out


def kmeans(rows, k=4, iterations=20, seed=7):
    rnd = Random(seed)
    centroids = [rows[i][:] for i in rnd.sample(range(len(rows)), k)]
    assignments = [0] * len(rows)

    for _ in range(iterations):
        changed = False
        for i, row in enumerate(rows):
            dists = [sum((a - b) ** 2 for a, b in zip(row, c)) for c in centroids]
            cluster = dists.index(min(dists))
            if assignments[i] != cluster:
                assignments[i] = cluster
                changed = True

        if not changed:
            break

        bucket = defaultdict(list)
        for idx, cl in enumerate(assignments):
            bucket[cl].append(rows[idx])

        for c in range(k):
            if bucket[c]:
                centroids[c] = [mean(col) for col in zip(*bucket[c])]

    return assignments


def build_segments(records):
    # Customer-level aggregation (customer = normalized patient name)
    by_customer = {}
    for r in records:
        key = r.name.lower()
        if key not in by_customer:
            by_customer[key] = {
                "name": r.name,
                "age": r.age,
                "visits": 0,
                "total_billing": 0.0,
                "avg_length": [],
                "emergency": [],
                "abnormal": [],
                "conditions": Counter(),
                "insurers": Counter(),
            }
        c = by_customer[key]
        c["visits"] += 1
        c["total_billing"] += r.billing_amount
        c["avg_length"].append(r.length_of_stay)
        c["emergency"].append(r.emergency_flag)
        c["abnormal"].append(r.abnormal_flag)
        c["conditions"][r.medical_condition] += 1
        c["insurers"][r.insurance_provider] += 1

    customers = []
    feature_rows = []
    for cust in by_customer.values():
        avg_los = mean(cust["avg_length"])
        em_rate = mean(cust["emergency"])
        ab_rate = mean(cust["abnormal"])
        customers.append({
            "name": cust["name"],
            "age": cust["age"],
            "visits": cust["visits"],
            "total_billing": cust["total_billing"],
            "avg_length_of_stay": avg_los,
            "emergency_rate": em_rate,
            "abnormal_rate": ab_rate,
            "top_condition": cust["conditions"].most_common(1)[0][0],
            "top_insurer": cust["insurers"].most_common(1)[0][0],
        })
        feature_rows.append([cust["age"], cust["visits"], cust["total_billing"], avg_los])

    normalized = normalize_rows(feature_rows)
    clusters = kmeans(normalized, k=4)

    stats = defaultdict(lambda: {
        "count": 0,
        "avg_age": [],
        "avg_visits": [],
        "avg_billing": [],
        "avg_length_of_stay": [],
        "emergency_rate": [],
        "abnormal_rate": [],
        "top_conditions": Counter(),
    })

    for cust, cl in zip(customers, clusters):
        bucket = stats[cl]
        bucket["count"] += 1
        bucket["avg_age"].append(cust["age"])
        bucket["avg_visits"].append(cust["visits"])
        bucket["avg_billing"].append(cust["total_billing"])
        bucket["avg_length_of_stay"].append(cust["avg_length_of_stay"])
        bucket["emergency_rate"].append(cust["emergency_rate"])
        bucket["abnormal_rate"].append(cust["abnormal_rate"])
        bucket["top_conditions"][cust["top_condition"]] += 1

    ordered = sorted(stats.items(), key=lambda x: mean(x[1]["avg_billing"]), reverse=True)
    labels = ["High-Value Frequent Care", "Complex Risk", "Stable Regulars", "Low-Touch Preventive"]

    mapping = {}
    segment_profiles = {}
    for i, (old_id, data) in enumerate(ordered):
        label = labels[i] if i < len(labels) else f"Segment {i+1}"
        mapping[old_id] = label
        segment_profiles[label] = {
            "count": data["count"],
            "avg_age": round(mean(data["avg_age"]), 1),
            "avg_visits": round(mean(data["avg_visits"]), 2),
            "avg_billing": round(mean(data["avg_billing"]), 2),
            "avg_length_of_stay": round(mean(data["avg_length_of_stay"]), 1),
            "emergency_rate": round(mean(data["emergency_rate"]), 3),
            "abnormal_test_rate": round(mean(data["abnormal_rate"]), 3),
            "top_conditions": [c for c, _ in data["top_conditions"].most_common(3)],
        }

    segmented_customers = []
    for cust, old in zip(customers, clusters):
        cust["segment"] = mapping[old]
        segmented_customers.append(cust)

    return segmented_customers, segment_profiles


def ym(d):
    return f"{d.year:04d}-{d.month:02d}"


def linear_regression_forecast(series, horizon=6):
    xs = list(range(len(series)))
    ys = series[:]
    x_mean = mean(xs)
    y_mean = mean(ys)
    den = sum((x - x_mean) ** 2 for x in xs)
    slope = 0.0 if den == 0 else sum((x - x_mean) * (y - y_mean) for x, y in zip(xs, ys)) / den
    intercept = y_mean - slope * x_mean
    preds = [intercept + slope * x for x in xs]
    future = [max(0.0, intercept + slope * (len(series) + i)) for i in range(1, horizon + 1)]
    return slope, intercept, preds, future


def mape(actual, pred):
    vals = []
    for a, p in zip(actual, pred):
        if a != 0:
            vals.append(abs((a - p) / a))
    return 100 * mean(vals) if vals else 0.0


def forecasting(records):
    by_month_count = defaultdict(int)
    by_month_billing = defaultdict(float)
    for r in records:
        key = ym(r.admission_date)
        by_month_count[key] += 1
        by_month_billing[key] += r.billing_amount

    months = sorted(by_month_count.keys())
    counts = [by_month_count[m] for m in months]
    bills = [by_month_billing[m] for m in months]

    split = max(12, len(months) - 6)
    cnt_slope, cnt_inter, cnt_pred, cnt_future = linear_regression_forecast(counts[:split], horizon=6)
    bill_slope, bill_inter, bill_pred, bill_future = linear_regression_forecast(bills[:split], horizon=6)

    cnt_test_pred = [cnt_inter + cnt_slope * x for x in range(split, split + 6)]
    bill_test_pred = [bill_inter + bill_slope * x for x in range(split, split + 6)]

    return {
        "months": months,
        "admissions_actual": counts,
        "billing_actual": bills,
        "admissions_mape_last_6": round(mape(counts[split:split + 6], cnt_test_pred), 2),
        "billing_mape_last_6": round(mape(bills[split:split + 6], bill_test_pred), 2),
        "next_6_month_admissions_forecast": [round(x, 1) for x in cnt_future],
        "next_6_month_billing_forecast": [round(x, 2) for x in bill_future],
    }


def save_segmented(segmented_customers):
    out = OUTPUT_DIR / "segmented_customers.csv"
    fields = ["Name", "Age", "Visits", "Total Billing", "Avg Length of Stay", "Emergency Rate", "Abnormal Rate", "Top Condition", "Top Insurer", "Segment"]
    with out.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for c in segmented_customers:
            writer.writerow({
                "Name": c["name"],
                "Age": c["age"],
                "Visits": c["visits"],
                "Total Billing": f"{c['total_billing']:.2f}",
                "Avg Length of Stay": f"{c['avg_length_of_stay']:.1f}",
                "Emergency Rate": f"{c['emergency_rate']:.3f}",
                "Abnormal Rate": f"{c['abnormal_rate']:.3f}",
                "Top Condition": c["top_condition"],
                "Top Insurer": c["top_insurer"],
                "Segment": c["segment"],
            })


def create_strategy_rules(segment_profiles, forecast):
    rules = {
        "segment_strategies": {},
        "global_signals": {
            "admissions_trend_next_6m": "up" if forecast["next_6_month_admissions_forecast"][-1] > forecast["next_6_month_admissions_forecast"][0] else "down",
            "billing_trend_next_6m": "up" if forecast["next_6_month_billing_forecast"][-1] > forecast["next_6_month_billing_forecast"][0] else "down",
        }
    }

    for name, profile in segment_profiles.items():
        actions = []
        if profile["avg_billing"] > 26000:
            actions.append("Assign dedicated care coordinator and proactive follow-ups every 7 days.")
            actions.append("Offer premium chronic-care plan bundles with telehealth check-ins.")
        if profile["emergency_rate"] > 0.33:
            actions.append("Trigger emergency-risk outreach workflow and medication adherence reminders.")
        if profile["abnormal_test_rate"] > 0.34:
            actions.append("Prioritize lab review queue and fast-track specialist appointments.")
        if profile["avg_length_of_stay"] > 15:
            actions.append("Coordinate discharge planning earlier to reduce avoidable inpatient days.")
        if not actions:
            actions.append("Use digital self-service campaigns and prevention-focused education.")
        rules["segment_strategies"][name] = actions

    with (OUTPUT_DIR / "strategy_rules.json").open("w") as f:
        json.dump(rules, f, indent=2)


def create_report(records, importance, segment_profiles, forecast):
    total_billing = sum(r.billing_amount for r in records)
    avg_billing = total_billing / len(records)
    report = OUTPUT_DIR / "analysis_report.md"
    with report.open("w") as f:
        f.write("# Healthcare CRM Analytics Report\n\n")
        f.write(f"- Records analyzed: **{len(records):,}**\n")
        f.write(f"- Date range: **{min(r.admission_date for r in records)}** to **{max(r.admission_date for r in records)}**\n")
        f.write(f"- Total billing: **${total_billing:,.2f}**\n")
        f.write(f"- Average billing per admission: **${avg_billing:,.2f}**\n\n")

        f.write("## Most Important Variables\n\n")
        for k, v in importance["numeric_correlations_with_billing"].items():
            f.write(f"- {k}: correlation with billing = **{v}**\n")
        f.write("\nCategorical effect score on billing (higher = stronger impact):\n")
        for k, v in sorted(importance["categorical_effect_on_billing"].items(), key=lambda x: x[1], reverse=True):
            f.write(f"- {k}: **{v}**\n")

        f.write("\n## Customer Segmentation\n\n")
        for segment, profile in segment_profiles.items():
            f.write(f"### {segment}\n")
            f.write(f"- Customers: **{profile['count']:,}**\n")
            f.write(f"- Avg age: **{profile['avg_age']}**\n")
            f.write(f"- Avg visits: **{profile['avg_visits']}**\n")
            f.write(f"- Avg billing per customer: **${profile['avg_billing']:,.2f}**\n")
            f.write(f"- Avg length of stay: **{profile['avg_length_of_stay']} days**\n")
            f.write(f"- Emergency rate: **{profile['emergency_rate']:.1%}**\n")
            f.write(f"- Abnormal test rate: **{profile['abnormal_test_rate']:.1%}**\n")
            f.write(f"- Top conditions: **{', '.join(profile['top_conditions'])}**\n\n")

        f.write("## Forecasting\n\n")
        f.write(f"- Admissions model MAPE (last 6 months): **{forecast['admissions_mape_last_6']}%**\n")
        f.write(f"- Billing model MAPE (last 6 months): **{forecast['billing_mape_last_6']}%**\n")
        f.write(f"- Next 6-month admissions forecast: **{forecast['next_6_month_admissions_forecast']}**\n")
        f.write(f"- Next 6-month billing forecast: **{forecast['next_6_month_billing_forecast']}**\n")


def main():
    ensure_dataset()
    records = load_and_clean(DATA_PATH)
    write_cleaned_dataset(records)
    importance = feature_importance(records)
    segmented_customers, segment_profiles = build_segments(records)
    save_segmented(segmented_customers)
    forecast = forecasting(records)
    create_strategy_rules(segment_profiles, forecast)
    create_report(records, importance, segment_profiles, forecast)

    with (OUTPUT_DIR / "metrics_snapshot.json").open("w") as f:
        json.dump({
            "feature_importance": importance,
            "segment_profiles": segment_profiles,
            "forecast": forecast,
        }, f, indent=2)

    print("Pipeline completed. Artifacts saved in outputs/.")


if __name__ == "__main__":
    main()
