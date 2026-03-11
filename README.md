# HealthCare CRM Dashboard - Analytics Extension

This repository now includes an end-to-end analytics workflow for:

- Data cleaning
- Important variable analysis
- Customer segmentation
- Forecasting admissions and billing
- A small AI strategy assistant for CRM recommendations

## Run

```bash
python analysis_pipeline.py
```

Generated artifacts in `outputs/`:

- `cleaned_healthcare_dataset.csv`
- `segmented_customers.csv`
- `metrics_snapshot.json`
- `strategy_rules.json`
- `analysis_report.md`

## AI assistant

```bash
python crm_ai_assistant.py \
  --name "John Doe" \
  --age 67 \
  --billing 32000 \
  --length-of-stay 18 \
  --admission-type Emergency \
  --test-results Abnormal
```

The assistant returns a JSON recommendation with an assigned segment and strategy actions.
