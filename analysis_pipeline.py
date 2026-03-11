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
NO_SHOW_ARCHIVE_PATH = Path("Medical Appointment No shows.zip")
SATISFACTION_ARCHIVE_PATH = Path("Patients Satisfaction Ratio.zip")
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


def solve_linear_system(matrix, vector):
    """Solve Ax = b using Gaussian elimination with partial pivoting."""
    n = len(vector)
    aug = [row[:] + [vector[i]] for i, row in enumerate(matrix)]

    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(aug[r][col]))
        if abs(aug[pivot][col]) < 1e-12:
            continue
        aug[col], aug[pivot] = aug[pivot], aug[col]

        pivot_val = aug[col][col]
        aug[col] = [val / pivot_val for val in aug[col]]

        for row in range(n):
            if row == col:
                continue
            factor = aug[row][col]
            aug[row] = [rv - factor * cv for rv, cv in zip(aug[row], aug[col])]

    return [aug[i][-1] for i in range(n)]


def fit_linear_regression(features, target):
    """Fit linear regression using normal equations."""
    design = [[1.0] + row for row in features]
    cols = len(design[0])
    xtx = [[0.0] * cols for _ in range(cols)]
    xty = [0.0] * cols

    for row, y in zip(design, target):
        for i in range(cols):
            xty[i] += row[i] * y
            for j in range(cols):
                xtx[i][j] += row[i] * row[j]

    return solve_linear_system(xtx, xty)

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
    future = [max(0.0, intercept + slope * x) for x in range(len(series), len(series) + horizon)]
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


def load_no_show_records():
    if not NO_SHOW_ARCHIVE_PATH.exists():
        return []

    records = []
    with zipfile.ZipFile(NO_SHOW_ARCHIVE_PATH) as zf:
        file_name = zf.namelist()[0]
        raw = zf.read(file_name).decode("utf-8", errors="replace").splitlines()
        for row in csv.DictReader(raw):
            try:
                age = int(row["Age"])
                if age < 0 or age > 110:
                    continue
                scheduled = date.fromisoformat(row["ScheduledDay"][:10])
                appointment = date.fromisoformat(row["AppointmentDay"][:10])
                lead_days = (appointment - scheduled).days
                if lead_days < 0:
                    continue
            except (ValueError, KeyError):
                continue

            records.append({
                "age": age,
                "no_show": 1 if row.get("No-show", "").strip().lower() == "yes" else 0,
                "sms_received": int(row.get("SMS_received", 0) or 0),
                "scholarship": int(row.get("Scholarship", 0) or 0),
                "hypertension": int(row.get("Hipertension", 0) or 0),
                "diabetes": int(row.get("Diabetes", 0) or 0),
                "alcoholism": int(row.get("Alcoholism", 0) or 0),
                "handicap": int(row.get("Handcap", 0) or 0),
                "lead_days": lead_days,
                "appointment_month": appointment.strftime("%Y-%m"),
            })
    return records


def load_satisfaction_records():
    if not SATISFACTION_ARCHIVE_PATH.exists():
        return []

    rows = []
    with zipfile.ZipFile(SATISFACTION_ARCHIVE_PATH) as zf:
        file_name = zf.namelist()[0]
        raw = zf.read(file_name).decode("utf-8", errors="replace").splitlines()
        for row in csv.DictReader(raw):
            try:
                rows.append({
                    "Age": float(row["Age"]),
                    "Severity": float(row["Severity"]),
                    "Surg-Med": float(row["Surg-Med"]),
                    "Anxiety": float(row["Anxiety"]),
                    "Satisfaction": float(row["Satisfaction"]),
                })
            except (ValueError, KeyError):
                continue
    return rows


def engagement_analysis():
    no_show_rows = load_no_show_records()
    sat_rows = load_satisfaction_records()
    if not no_show_rows and not sat_rows:
        return {}

    engagement = {}
    if no_show_rows:
        no_show_rate = mean(r["no_show"] for r in no_show_rows)
        monthly = defaultdict(list)
        for r in no_show_rows:
            monthly[r["appointment_month"]].append(r["no_show"])
        monthly_rates = {m: round(mean(vals), 4) for m, vals in sorted(monthly.items())}

        risk_buckets = {
            "0-1 days": [r["no_show"] for r in no_show_rows if 0 <= r["lead_days"] <= 1],
            "2-7 days": [r["no_show"] for r in no_show_rows if 2 <= r["lead_days"] <= 7],
            "8-14 days": [r["no_show"] for r in no_show_rows if 8 <= r["lead_days"] <= 14],
            "15+ days": [r["no_show"] for r in no_show_rows if r["lead_days"] >= 15],
        }

        correlations = {
            "Age": correlation([r["age"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
            "Lead Days": correlation([r["lead_days"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
            "SMS Received": correlation([r["sms_received"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
            "Scholarship": correlation([r["scholarship"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
            "Hypertension": correlation([r["hypertension"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
            "Diabetes": correlation([r["diabetes"] for r in no_show_rows], [r["no_show"] for r in no_show_rows]),
        }

        short_wait = mean(risk_buckets["0-1 days"]) if risk_buckets["0-1 days"] else no_show_rate
        long_wait = mean(risk_buckets["15+ days"]) if risk_buckets["15+ days"] else no_show_rate

        engagement["no_show"] = {
            "records": len(no_show_rows),
            "no_show_rate": round(no_show_rate, 4),
            "attendance_rate": round(1 - no_show_rate, 4),
            "sms_coverage": round(mean(r["sms_received"] for r in no_show_rows), 4),
            "avg_lead_days": round(mean(r["lead_days"] for r in no_show_rows), 2),
            "monthly_no_show_rate": monthly_rates,
            "risk_by_lead_bucket": {
                bucket: round(mean(vals), 4) for bucket, vals in risk_buckets.items() if vals
            },
            "correlation_with_no_show": {k: round(v, 4) for k, v in correlations.items()},
            "wait_time_gap": round(long_wait - short_wait, 4),
        }

    if sat_rows:
        features = [[r["Age"], r["Severity"], r["Surg-Med"], r["Anxiety"]] for r in sat_rows]
        target = [r["Satisfaction"] for r in sat_rows]
        coeffs = fit_linear_regression(features, target)
        predictions = [
            coeffs[0]
            + coeffs[1] * row[0]
            + coeffs[2] * row[1]
            + coeffs[3] * row[2]
            + coeffs[4] * row[3]
            for row in features
        ]

        engagement["satisfaction"] = {
            "records": len(sat_rows),
            "avg_satisfaction": round(mean(target), 2),
            "high_satisfaction_ratio": round(sum(1 for y in target if y >= 75) / len(target), 4),
            "correlation_with_satisfaction": {
                "Age": round(correlation([r["Age"] for r in sat_rows], target), 4),
                "Severity": round(correlation([r["Severity"] for r in sat_rows], target), 4),
                "Surg-Med": round(correlation([r["Surg-Med"] for r in sat_rows], target), 4),
                "Anxiety": round(correlation([r["Anxiety"] for r in sat_rows], target), 4),
            },
            "linear_model": {
                "intercept": round(coeffs[0], 4),
                "coefficients": {
                    "Age": round(coeffs[1], 4),
                    "Severity": round(coeffs[2], 4),
                    "Surg-Med": round(coeffs[3], 4),
                    "Anxiety": round(coeffs[4], 4),
                },
                "mape": round(mape(target, predictions), 2),
            },
        }

    return engagement


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


def create_report(records, importance, segment_profiles, forecast, engagement):
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

        if engagement:
            f.write("\n## Engagement Analytics\n\n")
            no_show = engagement.get("no_show", {})
            if no_show:
                f.write(f"- No-show records analyzed: **{no_show['records']:,}**\n")
                f.write(f"- No-show rate: **{no_show['no_show_rate']:.1%}**\n")
                f.write(f"- Attendance rate: **{no_show['attendance_rate']:.1%}**\n")
                f.write(f"- SMS reminder coverage: **{no_show['sms_coverage']:.1%}**\n")
                f.write(f"- Wait-time no-show gap (15+ days minus 0-1 days): **{no_show['wait_time_gap']:.1%}**\n")
            sat = engagement.get("satisfaction", {})
            if sat:
                f.write(f"- Satisfaction records analyzed: **{sat['records']:,}**\n")
                f.write(f"- Average satisfaction score: **{sat['avg_satisfaction']} / 100**\n")
                f.write(f"- High satisfaction ratio (>=75): **{sat['high_satisfaction_ratio']:.1%}**\n")
                f.write(f"- Satisfaction model MAPE: **{sat['linear_model']['mape']}%**\n")


def main():
    ensure_dataset()
    records = load_and_clean(DATA_PATH)
    write_cleaned_dataset(records)
    importance = feature_importance(records)
    segmented_customers, segment_profiles = build_segments(records)
    save_segmented(segmented_customers)
    forecast = forecasting(records)
    engagement = engagement_analysis()
    create_strategy_rules(segment_profiles, forecast)
    create_report(records, importance, segment_profiles, forecast, engagement)

    with (OUTPUT_DIR / "metrics_snapshot.json").open("w") as f:
        json.dump({
            "feature_importance": importance,
            "segment_profiles": segment_profiles,
            "forecast": forecast,
            "engagement": engagement,
        }, f, indent=2)

    with (OUTPUT_DIR / "engagement_metrics.json").open("w") as f:
        json.dump(engagement, f, indent=2)

    print("Pipeline completed. Artifacts saved in outputs/.")


if __name__ == "__main__":
    main()
