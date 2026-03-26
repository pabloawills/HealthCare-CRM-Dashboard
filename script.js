const data = {
  monthly: {
    all: {
      goal: "No-show rate 18.5% (Jun 2016)",
      kpis: [
        {
          label: "Appointments analyzed",
          value: "110,516",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "No-show rate (Jun 2016)",
          value: "18.5%",
          delta: -2.3,
          deltaSuffix: " pts"
        },
        {
          label: "SMS reminder coverage",
          value: "32.1%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Avg satisfaction",
          value: "65.5/100",
          delta: 0,
          deltaSuffix: " pts"
        }
      ],
      journey: [
        { stage: "Aware", value: 820 },
        { stage: "Booked", value: 374 },
        { stage: "Visited", value: 248 },
        { stage: "Active care", value: 184 }
      ],
      trend: [63, 68, 72, 76, 84, 88],
      story:
        "Acquisition and retention are improving together. Faster follow-up reminders reduced no-shows while patient satisfaction increased month-over-month.",
      actions: [
        "Scale reminder workflows to all specialties.",
        "Replicate top-performing outreach script in underperforming clinics.",
        "Track no-show risk by appointment type for finer intervention."
      ]
    },
    "care-coordination": {
      goal: "Complex Risk segment profile",
      kpis: [
        {
          label: "Patients in segment",
          value: "10,243",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Avg length of stay",
          value: "22.6 days",
          delta: 0,
          deltaSuffix: "d"
        },
        {
          label: "Emergency rate",
          value: "33.7%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Avg billing per patient",
          value: "$35,215",
          delta: 0,
          deltaSuffix: "%"
        }
      ],
      journey: [
        { stage: "Enrolled", value: 236 },
        { stage: "Plan set", value: 192 },
        { stage: "Weekly check-in", value: 158 },
        { stage: "Stable", value: 132 }
      ],
      trend: [52, 58, 62, 67, 74, 81],
      story:
        "Care coordination is preventing downstream risk. Consistent care plan updates correlate with stronger adherence and lower readmission risk.",
      actions: [
        "Trigger nurse escalation for missed medication logs within 24h.",
        "Add high-risk care plan template for CHF and COPD cohorts.",
        "Automate family caregiver reminders for complex cases."
      ]
    },
    outreach: {
      goal: "Low-Touch Preventive segment profile",
      kpis: [
        {
          label: "Patients in segment",
          value: "9,822",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Abnormal test rate",
          value: "33.1%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Avg visits",
          value: "1.37",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Avg billing per patient",
          value: "$34,933",
          delta: 0,
          deltaSuffix: "%"
        }
      ],
      journey: [
        { stage: "Contacted", value: 1130 },
        { stage: "Responded", value: 520 },
        { stage: "Scheduled", value: 350 },
        { stage: "Visited", value: 243 }
      ],
      trend: [21, 24, 28, 32, 39, 46],
      story:
        "Outreach performance is translating into visits. Response improvements are feeding conversion and lifting early patient sentiment.",
      actions: [
        "Double down on SMS campaigns with clinician video snippets.",
        "A/B test messaging by age cohort and insurance type.",
        "Route warm leads to same-day scheduling queue."
      ]
    },
    support: {
      goal: "Stable Regulars segment profile",
      kpis: [
        {
          label: "Patients in segment",
          value: "10,075",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Avg visits",
          value: "1.38",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Abnormal test rate",
          value: "33.8%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Avg billing per patient",
          value: "$35,206",
          delta: 0,
          deltaSuffix: "%"
        }
      ],
      journey: [
        { stage: "Incoming", value: 190 },
        { stage: "Self-solved", value: 72 },
        { stage: "Agent handled", value: 118 },
        { stage: "Resolved", value: 149 }
      ],
      trend: [17, 21, 27, 30, 34, 38],
      story:
        "Support workload is healthier. Self-service adoption reduced ticket volume and let the team resolve complex cases faster.",
      actions: [
        "Promote top 5 help-center articles in post-visit emails.",
        "Add macro suggestions for common medication refill questions.",
        "Review weekend staffing to preserve SLA gains."
      ]
    }
  },
  quarterly: {
    all: {
      goal: "Billing trend next 6 months: down",
      kpis: [
        {
          label: "Records analyzed",
          value: "55,500",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Total billing",
          value: "$1.42B",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Avg billing / admission",
          value: "$25,539",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "Billing MAPE (last 6)",
          value: "56.51%",
          delta: 0,
          deltaSuffix: " pts"
        }
      ],
      journey: [
        { stage: "Aware", value: 2410 },
        { stage: "Booked", value: 1170 },
        { stage: "Visited", value: 812 },
        { stage: "Active care", value: 542 }
      ],
      trend: [55, 61, 69, 74],
      story:
        "Quarterly performance shows compounding gains. Better outreach quality and proactive reminders are improving both continuity and experience.",
      actions: [
        "Set quarterly benchmark by clinic to sustain retention gains.",
        "Expand digital check-in to reduce front-desk wait times.",
        "Tie provider scorecards to follow-up completion metric."
      ]
    },
    "care-coordination": {
      goal: "Forecast operational outlook",
      kpis: [
        {
          label: "Next 6-month admissions",
          value: "916.7",
          delta: -0.8,
          deltaSuffix: " pts"
        },
        {
          label: "Next 6-month billing",
          value: "$23.42M",
          delta: -0.11,
          deltaSuffix: " pts"
        },
        {
          label: "Admissions MAPE (last 6)",
          value: "56.61%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Billing MAPE (last 6)",
          value: "56.51%",
          delta: 0,
          deltaSuffix: " pts"
        }
      ],
      journey: [
        { stage: "Enrolled", value: 710 },
        { stage: "Plan set", value: 590 },
        { stage: "Weekly check-in", value: 476 },
        { stage: "Stable", value: 403 }
      ],
      trend: [48, 57, 66, 79],
      story:
        "Across the quarter, care coordination became a leading indicator for outcomes. Adherence rose as high-risk gaps were closed earlier.",
      actions: [
        "Prioritize post-discharge calls in first 72 hours.",
        "Launch multilingual adherence education packets.",
        "Surface rising-risk patients in daily huddles."
      ]
    },
    outreach: {
      goal: "Top billing drivers (categorical effects)",
      kpis: [
        {
          label: "Medical condition effect",
          value: "153.68",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Medication effect",
          value: "100.66",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Insurance provider effect",
          value: "65.69",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Admission type effect",
          value: "42.29",
          delta: 0,
          deltaSuffix: " pts"
        }
      ],
      journey: [
        { stage: "Contacted", value: 3490 },
        { stage: "Responded", value: 1500 },
        { stage: "Scheduled", value: 980 },
        { stage: "Visited", value: 730 }
      ],
      trend: [18, 27, 35, 43],
      story:
        "The outreach story is consistent: stronger campaign relevance drives responses, which then lifts conversions and first-visit loyalty.",
      actions: [
        "Shift budget toward highest-converting referral channels.",
        "Create specialty-specific first-visit nurture journeys.",
        "Pilot chatbot triage for inbound web leads."
      ]
    },
    support: {
      goal: "Satisfaction model quality",
      kpis: [
        {
          label: "Satisfaction records",
          value: "25",
          delta: 0,
          deltaSuffix: "%"
        },
        {
          label: "High satisfaction ratio",
          value: "44.0%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Satisfaction model MAPE",
          value: "7.98%",
          delta: 0,
          deltaSuffix: " pts"
        },
        {
          label: "Anxiety coefficient",
          value: "1.306",
          delta: 0,
          deltaSuffix: " pts"
        }
      ],
      journey: [
        { stage: "Incoming", value: 620 },
        { stage: "Self-solved", value: 211 },
        { stage: "Agent handled", value: 409 },
        { stage: "Resolved", value: 534 }
      ],
      trend: [14, 21, 27, 34],
      story:
        "Support systems are scaling. Digital self-service absorbed routine volume while agent quality kept satisfaction trending upward.",
      actions: [
        "Introduce intent detection for faster ticket routing.",
        "Use QA scorecards to coach first-contact resolution.",
        "Expand knowledge base articles for billing questions."
      ]
    }
  }
};

const engagementFallback = {
  no_show: {
    records: 110516,
    no_show_rate: 0.2019,
    attendance_rate: 0.7981,
    sms_coverage: 0.321,
    avg_lead_days: 10.18,
    risk_by_lead_bucket: {
      "0-1 days": 0.0664,
      "2-7 days": 0.2468,
      "8-14 days": 0.3047,
      "15+ days": 0.3274
    },
    wait_time_gap: 0.2611
  },
  satisfaction: {
    records: 25,
    avg_satisfaction: 65.52,
    high_satisfaction_ratio: 0.44,
    correlation_with_satisfaction: {
      Age: -0.9014,
      Severity: -0.723,
      Anxiety: -0.5363
    }
  }
};

let engagementData = engagementFallback;
const analyticsFallback = {
  feature_importance: {
    numeric_correlations_with_billing: {},
    categorical_effect_on_billing: {}
  },
  segment_profiles: {},
  forecast: {
    admissions_mape_last_6: 0,
    billing_mape_last_6: 0,
    next_6_month_admissions_forecast: [],
    next_6_month_billing_forecast: []
  }
};
const strategyFallback = {
  segment_strategies: {},
  global_signals: {}
};

let analyticsData = analyticsFallback;
let strategyData = strategyFallback;

const timeframeEl = document.getElementById("timeframe");
const teamEl = document.getElementById("team");
const kpiGrid = document.getElementById("kpiGrid");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const conversionSummaryEl = document.getElementById("conversionSummary");
const actionsEl = document.getElementById("actions");
const journeyEl = document.getElementById("journey");
const goalProgress = document.getElementById("goalProgress");
const trendInsightEl = document.getElementById("trendInsight");
const engagementKpisEl = document.getElementById("engagementKpis");
const leadRiskListEl = document.getElementById("leadRiskList");
const satisfactionSignalsEl = document.getElementById("satisfactionSignals");
const noShowDriversEl = document.getElementById("noShowDrivers");
const satisfactionModelEl = document.getElementById("satisfactionModel");
const analyticsKpisEl = document.getElementById("analyticsKpis");
const featureImportanceListEl = document.getElementById("featureImportanceList");
const forecastListEl = document.getElementById("forecastList");
const segmentProfilesEl = document.getElementById("segmentProfiles");

function formatTeamName(team) {
  if (team === "all") return "Cross-team view";
  return team
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDesiredTrendDirection(kpiLabel) {
  const label = kpiLabel.toLowerCase();
  const decreaseIsGoodPatterns = [
    "no-show",
    "readmission",
    "resolution time",
    "support tickets",
    "open tickets"
  ];

  return decreaseIsGoodPatterns.some((pattern) => label.includes(pattern))
    ? "down"
    : "up";
}

function toPct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function toMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatDelta(kpi) {
  const suffix = kpi.deltaSuffix || "";
  const direction = kpi.delta >= 0 ? "▲" : "▼";
  return `${direction} ${Math.abs(kpi.delta)}${suffix} vs prior period`;
}

function buildTrendInsight(selected, timeframe) {
  const noShowRate = engagementData?.no_show?.no_show_rate ?? 0.2;
  const journey = selected.journey;

  if (!Array.isArray(journey) || journey.length < 2) {
    return "Not enough journey data yet.";
  }

  const transitions = [];

  for (let i = 0; i < journey.length - 1; i += 1) {
    const from = journey[i];
    const to = journey[i + 1];
    const drop = Math.max(from.value - to.value, 0);
    const conversion = from.value ? to.value / from.value : 0;

    transitions.push({ from, to, drop, conversion });
  }

  const largestDrop = transitions.reduce(
    (max, item) => (item.drop > max.drop ? item : max),
    transitions[0]
  );

  const recoverable = Math.round(largestDrop.drop * noShowRate * 0.6);
  const cadence = timeframe === "monthly" ? "month" : "quarter";

  return `${formatTeamName(teamEl.value)}: biggest leakage is ${largestDrop.from.stage} → ${largestDrop.to.stage} (${(largestDrop.conversion * 100).toFixed(1)}% conversion, ${largestDrop.drop} patients lost). With targeted reminder and outreach fixes, an estimated ${recoverable} patients per ${cadence} could be recovered.`;
}

function render() {
  const timeframe = timeframeEl.value;
  const team = teamEl.value;
  const selected = data[timeframe][team];

  goalProgress.textContent = selected.goal;

  kpiGrid.innerHTML = "";
  selected.kpis.forEach((kpi) => {
    const card = document.createElement("article");
    card.className = "kpi-card";

    const desiredTrendDirection = getDesiredTrendDirection(kpi.label);
    const isPositive =
      desiredTrendDirection === "down" ? kpi.delta <= 0 : kpi.delta >= 0;

    card.innerHTML = `
      <h3>${kpi.label}</h3>
      <div class="kpi-value">${kpi.value}</div>
      <div class="kpi-delta ${isPositive ? "up" : "down"}">
        ${formatDelta(kpi)}
      </div>
    `;

    kpiGrid.appendChild(card);
  });

  journeyEl.innerHTML = "";
  const topJourneyValue = Math.max(...selected.journey.map((j) => j.value));

  selected.journey.forEach((step) => {
    const item = document.createElement("div");
    item.className = "journey-item";
    const pct = Math.round((step.value / topJourneyValue) * 100);

    item.innerHTML = `
      <p>${step.stage}</p>
      <strong>${step.value}</strong>
      <div class="journey-meter"><span style="width: ${pct}%"></span></div>
    `;

    journeyEl.appendChild(item);
  });

  storyTitle.textContent = `Narrative: ${formatTeamName(team)}`;
  storyText.textContent = selected.story;

  actionsEl.innerHTML = "";
  selected.actions.forEach((action) => {
    const li = document.createElement("li");
    li.textContent = action;
    actionsEl.appendChild(li);
  });

  if (conversionSummaryEl) {
    conversionSummaryEl.innerHTML = "";

    for (let i = 0; i < selected.journey.length - 1; i += 1) {
      const from = selected.journey[i];
      const to = selected.journey[i + 1];
      const conversion = from.value ? (to.value / from.value) * 100 : 0;
      const drop = Math.max(from.value - to.value, 0);

      const step = document.createElement("article");
      step.className = "conversion-item";
      step.innerHTML = `
        <h3>${from.stage} → ${to.stage}</h3>
        <p><strong>${conversion.toFixed(1)}%</strong> conversion</p>
        <p>${to.value.toLocaleString()} reached ${to.stage}</p>
        <p>${drop.toLocaleString()} dropped off</p>
      `;

      conversionSummaryEl.appendChild(step);
    }
  }

  if (trendInsightEl) {
    trendInsightEl.textContent = buildTrendInsight(selected, timeframe);
  }
}

function renderEngagement() {
  const noShow = engagementData.no_show;
  const satisfaction = engagementData.satisfaction;

  if (
    !engagementKpisEl ||
    !leadRiskListEl ||
    !satisfactionSignalsEl ||
    !noShowDriversEl ||
    !satisfactionModelEl ||
    !noShow ||
    !satisfaction
  ) {
    return;
  }

  engagementKpisEl.innerHTML = "";

  [
    {
      label: "No-show rate",
      value: toPct(noShow.no_show_rate),
      note: `${noShow.records.toLocaleString()} appointments analyzed`
    },
    {
      label: "Attendance rate",
      value: toPct(noShow.attendance_rate),
      note: "Core retention proxy"
    },
    {
      label: "SMS reminder coverage",
      value: toPct(noShow.sms_coverage),
      note: "Reminder workflow penetration"
    },
    {
      label: "Avg satisfaction",
      value: `${satisfaction.avg_satisfaction}/100`,
      note: `${toPct(satisfaction.high_satisfaction_ratio)} high-satisfaction ratio`
    }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "kpi-card";
    card.innerHTML = `
      <h3>${item.label}</h3>
      <div class="kpi-value">${item.value}</div>
      <div class="kpi-delta">${item.note}</div>
    `;
    engagementKpisEl.appendChild(card);
  });

  leadRiskListEl.innerHTML = "";
  Object.entries(noShow.risk_by_lead_bucket).forEach(([bucket, rate]) => {
    const li = document.createElement("li");
    li.textContent = `${bucket}: ${toPct(rate)} no-show risk`;
    leadRiskListEl.appendChild(li);
  });

  const gap = document.createElement("li");
  gap.textContent = `Long-wait risk gap: ${toPct(noShow.wait_time_gap)} higher than near-term bookings.`;
  leadRiskListEl.appendChild(gap);

  satisfactionSignalsEl.innerHTML = "";
  const age = satisfaction.correlation_with_satisfaction.Age;
  const severity = satisfaction.correlation_with_satisfaction.Severity;
  const anxiety = satisfaction.correlation_with_satisfaction.Anxiety;

  [
    `Age vs satisfaction correlation: ${age.toFixed(2)} (older cohorts report lower satisfaction in sample).`,
    `Severity vs satisfaction correlation: ${severity.toFixed(2)} (clinical acuity impacts patient experience).`,
    `Anxiety vs satisfaction correlation: ${anxiety.toFixed(2)} (behavioral support can improve sentiment).`
  ].forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    satisfactionSignalsEl.appendChild(li);
  });

  noShowDriversEl.innerHTML = "";
  Object.entries(noShow.correlation_with_no_show || {}).forEach(([label, corr]) => {
    const li = document.createElement("li");
    li.textContent = `${label}: correlation ${Number(corr).toFixed(3)} with no-show behavior.`;
    noShowDriversEl.appendChild(li);
  });

  const monthlyRates = Object.entries(noShow.monthly_no_show_rate || {})
    .map(([month, rate]) => `${month} ${toPct(rate)}`)
    .join(" · ");

  if (monthlyRates) {
    const li = document.createElement("li");
    li.textContent = `Monthly no-show trend sample: ${monthlyRates}.`;
    noShowDriversEl.appendChild(li);
  }

  satisfactionModelEl.innerHTML = "";
  const model = satisfaction.linear_model || {};

  [
    `Model intercept: ${(model.intercept ?? 0).toFixed(2)}.`,
    `Model MAPE: ${(model.mape ?? 0).toFixed(2)}%.`,
    `Satisfaction records used: ${(satisfaction.records ?? 0).toLocaleString()}.`
  ].forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    satisfactionModelEl.appendChild(li);
  });

  Object.entries(model.coefficients || {}).forEach(([label, value]) => {
    const li = document.createElement("li");
    li.textContent = `${label} coefficient: ${Number(value).toFixed(3)}.`;
    satisfactionModelEl.appendChild(li);
  });
}

function renderAnalytics() {
  if (
    !analyticsKpisEl ||
    !featureImportanceListEl ||
    !forecastListEl ||
    !segmentProfilesEl
  ) {
    return;
  }

  const featureImportance = analyticsData.feature_importance || {};
  const numeric = featureImportance.numeric_correlations_with_billing || {};
  const categorical = featureImportance.categorical_effect_on_billing || {};
  const forecast = analyticsData.forecast || {};
  const globalSignals = strategyData.global_signals || {};

  analyticsKpisEl.innerHTML = "";
  [
    {
      label: "Admissions MAPE (last 6)",
      value: `${Number(forecast.admissions_mape_last_6 || 0).toFixed(2)}%`,
      note: "Lower is better forecast accuracy"
    },
    {
      label: "Billing MAPE (last 6)",
      value: `${Number(forecast.billing_mape_last_6 || 0).toFixed(2)}%`,
      note: "Lower is better forecast accuracy"
    },
    {
      label: "Admissions trend signal",
      value: (globalSignals.admissions_trend_next_6m || "n/a").toUpperCase(),
      note: "From strategy rules"
    },
    {
      label: "Billing trend signal",
      value: (globalSignals.billing_trend_next_6m || "n/a").toUpperCase(),
      note: "From strategy rules"
    }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "kpi-card";
    card.innerHTML = `
      <h3>${item.label}</h3>
      <div class="kpi-value">${item.value}</div>
      <div class="kpi-delta">${item.note}</div>
    `;
    analyticsKpisEl.appendChild(card);
  });

  featureImportanceListEl.innerHTML = "";
  Object.entries(numeric).forEach(([feature, corr]) => {
    const li = document.createElement("li");
    li.textContent = `${feature}: correlation ${Number(corr).toFixed(4)} with billing.`;
    featureImportanceListEl.appendChild(li);
  });
  Object.entries(categorical).forEach(([feature, score]) => {
    const li = document.createElement("li");
    li.textContent = `${feature}: categorical effect score ${Number(score).toFixed(2)}.`;
    featureImportanceListEl.appendChild(li);
  });

  forecastListEl.innerHTML = "";
  const nextAdmissions = (forecast.next_6_month_admissions_forecast || [])
    .map((v) => Number(v).toFixed(1))
    .join(", ");
  const nextBilling = (forecast.next_6_month_billing_forecast || [])
    .map((v) => toMoney(Number(v)))
    .join(", ");

  [
    `Next 6-month admissions forecast: [${nextAdmissions}]`,
    `Next 6-month billing forecast: [${nextBilling}]`
  ].forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    forecastListEl.appendChild(li);
  });

  segmentProfilesEl.innerHTML = "";
  const profiles = analyticsData.segment_profiles || {};
  const strategies = strategyData.segment_strategies || {};

  Object.entries(profiles).forEach(([segmentName, profile]) => {
    const card = document.createElement("article");
    card.className = "conversion-item";

    const strategyItems = (strategies[segmentName] || [])
      .map((item) => `<li>${item}</li>`)
      .join("");

    card.innerHTML = `
      <h3>${segmentName}</h3>
      <p><strong>${(profile.count || 0).toLocaleString()}</strong> patients</p>
      <p>Avg age ${Number(profile.avg_age || 0).toFixed(1)} · Avg visits ${Number(profile.avg_visits || 0).toFixed(2)}</p>
      <p>Avg billing ${toMoney(Number(profile.avg_billing || 0))} · Avg LOS ${Number(profile.avg_length_of_stay || 0).toFixed(1)} days</p>
      <p>Emergency ${(Number(profile.emergency_rate || 0) * 100).toFixed(1)}% · Abnormal tests ${(Number(profile.abnormal_test_rate || 0) * 100).toFixed(1)}%</p>
      <p>Top conditions: ${(profile.top_conditions || []).join(", ") || "N/A"}</p>
      <ul class="action-list">${strategyItems || "<li>No strategy rule available.</li>"}</ul>
    `;

    segmentProfilesEl.appendChild(card);
  });
}

async function loadEngagementData() {
  try {
    const response = await fetch("outputs/engagement_metrics.json");
    if (!response.ok) return;

    const remote = await response.json();
    if (remote?.no_show && remote?.satisfaction) {
      engagementData = remote;
      render();
      renderEngagement();
    }
  } catch (error) {
    console.warn("Using fallback engagement data.", error);
  }
}

async function loadAnalyticsData() {
  try {
    const [snapshotResponse, strategyResponse] = await Promise.all([
      fetch("outputs/metrics_snapshot.json"),
      fetch("outputs/strategy_rules.json")
    ]);

    if (snapshotResponse.ok) {
      const snapshot = await snapshotResponse.json();
      if (snapshot?.feature_importance && snapshot?.segment_profiles && snapshot?.forecast) {
        analyticsData = snapshot;
      }
    }

    if (strategyResponse.ok) {
      const strategy = await strategyResponse.json();
      if (strategy?.segment_strategies || strategy?.global_signals) {
        strategyData = strategy;
      }
    }

    renderAnalytics();
  } catch (error) {
    console.warn("Using fallback analytics data.", error);
  }
}

[timeframeEl, teamEl].forEach((el) => {
  el.addEventListener("change", render);
});

render();
renderEngagement();
renderAnalytics();
loadEngagementData();
loadAnalyticsData();
