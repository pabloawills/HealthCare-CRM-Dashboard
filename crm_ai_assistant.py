#!/usr/bin/env python3
"""Small AI strategy assistant for the CRM platform.

Usage:
  python crm_ai_assistant.py --name "John Doe" --age 67 --billing 32000 --length-of-stay 18 --admission-type Emergency --test-results Abnormal
"""

import argparse
import json
from pathlib import Path

RULES_PATH = Path("outputs/strategy_rules.json")
METRICS_PATH = Path("outputs/metrics_snapshot.json")


def load_rules():
    if not RULES_PATH.exists() or not METRICS_PATH.exists():
        raise SystemExit("Run `python analysis_pipeline.py` first to generate model artifacts.")
    rules = json.loads(RULES_PATH.read_text())
    metrics = json.loads(METRICS_PATH.read_text())
    return rules, metrics


def assign_segment(age, billing, length_of_stay, admission_type, test_results):
    emergency = admission_type.strip().lower() == "emergency"
    abnormal = test_results.strip().lower() == "abnormal"

    if billing >= 36000 and length_of_stay <= 14:
        return "High-Value Frequent Care"
    if age >= 60 and length_of_stay >= 14:
        return "Complex Risk"
    if age >= 60:
        return "Stable Regulars"
    return "Low-Touch Preventive"


def recommend(payload):
    rules, metrics = load_rules()
    segment = assign_segment(
        payload["age"], payload["billing"], payload["length_of_stay"], payload["admission_type"], payload["test_results"]
    )
    segment_actions = rules["segment_strategies"].get(segment, ["Run standard patient engagement workflow."])
    forecast = metrics["forecast"]
    engagement = metrics.get("engagement", {})

    recommendations = {
        "customer": payload,
        "assigned_segment": segment,
        "recommended_actions": segment_actions,
        "capacity_tip": (
            "Prepare for rising admissions by increasing care-team capacity."
            if forecast["next_6_month_admissions_forecast"][-1] > forecast["next_6_month_admissions_forecast"][0]
            else "Admissions trend is stable/down; optimize staffing and reduce no-shows."
        ),
        "engagement_tip": (
            f"No-show baseline is {engagement.get('no_show', {}).get('no_show_rate', 0):.1%}; prioritize bookings under 7 days to reduce attendance risk."
            if engagement.get("no_show")
            else "No-show model unavailable; use standard reminder cadence."
        ),
        "experience_tip": (
            f"High-satisfaction ratio is {engagement.get('satisfaction', {}).get('high_satisfaction_ratio', 0):.1%}; prioritize anxiety-aware messaging for vulnerable cohorts."
            if engagement.get("satisfaction")
            else "Satisfaction model unavailable; use baseline post-visit outreach."
        ),
    }
    return recommendations


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--name", default="Unknown")
    parser.add_argument("--age", type=int, required=True)
    parser.add_argument("--billing", type=float, required=True)
    parser.add_argument("--length-of-stay", type=int, required=True)
    parser.add_argument("--admission-type", required=True)
    parser.add_argument("--test-results", required=True)
    args = parser.parse_args()

    payload = {
        "name": args.name,
        "age": args.age,
        "billing": args.billing,
        "length_of_stay": args.length_of_stay,
        "admission_type": args.admission_type,
        "test_results": args.test_results,
    }

    print(json.dumps(recommend(payload), indent=2))


if __name__ == "__main__":
    main()
