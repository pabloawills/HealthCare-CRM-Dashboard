# Healthcare CRM Analytics Report

- Records analyzed: **55,500**
- Date range: **2019-05-08** to **2024-05-07**
- Total billing: **$1,417,432,043.40**
- Average billing per admission: **$25,539.32**

## Most Important Variables

- Age: correlation with billing = **-0.0038**
- Length of Stay: correlation with billing = **-0.0056**
- Emergency Flag: correlation with billing = **-0.0021**
- Abnormal Flag: correlation with billing = **-0.0**

Categorical effect score on billing (higher = stronger impact):
- Medical Condition: **153.68**
- Medication: **100.66**
- Insurance Provider: **65.69**
- Test Results: **55.81**
- Admission Type: **42.29**

## Customer Segmentation

### High-Value Frequent Care
- Customers: **10,095**
- Avg age: **34.5**
- Avg visits: **1.39**
- Avg billing per customer: **$35,553.67**
- Avg length of stay: **8.5 days**
- Emergency rate: **32.2%**
- Abnormal test rate: **33.2%**
- Top conditions: **Cancer, Diabetes, Obesity**

### Complex Risk
- Customers: **10,243**
- Avg age: **68.4**
- Avg visits: **1.38**
- Avg billing per customer: **$35,215.05**
- Avg length of stay: **22.6 days**
- Emergency rate: **33.7%**
- Abnormal test rate: **34.1%**
- Top conditions: **Arthritis, Hypertension, Diabetes**

### Stable Regulars
- Customers: **10,075**
- Avg age: **68.5**
- Avg visits: **1.38**
- Avg billing per customer: **$35,205.60**
- Avg length of stay: **8.4 days**
- Emergency rate: **32.3%**
- Abnormal test rate: **33.8%**
- Top conditions: **Diabetes, Cancer, Arthritis**

### Low-Touch Preventive
- Customers: **9,822**
- Avg age: **34.7**
- Avg visits: **1.37**
- Avg billing per customer: **$34,933.16**
- Avg length of stay: **22.7 days**
- Emergency rate: **32.6%**
- Abnormal test rate: **33.1%**
- Top conditions: **Arthritis, Asthma, Hypertension**

## Forecasting

- Admissions model MAPE (last 6 months): **56.61%**
- Billing model MAPE (last 6 months): **56.51%**
- Next 6-month admissions forecast: **[916.7, 916.5, 916.3, 916.1, 915.9, 915.7]**
- Next 6-month billing forecast: **[23415274.22, 23410114.01, 23404953.8, 23399793.6, 23394633.39, 23389473.18]**

## Engagement Analytics

- No-show records analyzed: **110,516**
- No-show rate: **20.2%**
- Attendance rate: **79.8%**
- SMS reminder coverage: **32.1%**
- Wait-time no-show gap (15+ days minus 0-1 days): **26.1%**
- Satisfaction records analyzed: **25**
- Average satisfaction score: **65.52 / 100**
- High satisfaction ratio (>=75): **44.0%**
- Satisfaction model MAPE: **7.98%**
