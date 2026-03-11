const data = {
  monthly: {
    all: {
      goal: "Retention +6.4%",
      kpis: [
        { label: "New patients", value: 184, delta: 12 },
        { label: "Follow-up completion", value: "88%", delta: 6.4 },
        { label: "No-show rate", value: "9%", delta: -2.1 },
        { label: "Satisfaction score", value: "4.7/5", delta: 0.3 }
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
      goal: "Readmission risk -1.4%",
      kpis: [
        { label: "Care plans updated", value: 132, delta: 14 },
        { label: "Medication adherence", value: "81%", delta: 4.2 },
        { label: "Readmission risk", value: "7%", delta: -1.4 },
        { label: "Patient trust score", value: "4.8/5", delta: 0.2 }
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
      goal: "Lead-to-visit +3.4%",
      kpis: [
        { label: "Outreach campaigns", value: 24, delta: 7 },
        { label: "Response rate", value: "46%", delta: 5.1 },
        { label: "Lead-to-visit conversion", value: "31%", delta: 3.4 },
        { label: "First-visit NPS", value: "59", delta: 5 }
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
      goal: "Resolution time -1.3h",
      kpis: [
        { label: "Open support tickets", value: 41, delta: -9 },
        { label: "Avg. resolution time", value: "6.1h", delta: -1.3 },
        { label: "Self-service usage", value: "38%", delta: 8.2 },
        { label: "Support CSAT", value: "93%", delta: 2.4 }
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
      goal: "Retention +8.8%",
      kpis: [
        { label: "New patients", value: 542, delta: 18 },
        { label: "Follow-up completion", value: "86%", delta: 8.8 },
        { label: "No-show rate", value: "11%", delta: -3.4 },
        { label: "Satisfaction score", value: "4.6/5", delta: 0.5 }
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
      goal: "Adherence +6.7%",
      kpis: [
        { label: "Care plans updated", value: 403, delta: 19 },
        { label: "Medication adherence", value: "79%", delta: 6.7 },
        { label: "Readmission risk", value: "8%", delta: -2.5 },
        { label: "Patient trust score", value: "4.7/5", delta: 0.4 }
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
      goal: "Response +7.2%",
      kpis: [
        { label: "Outreach campaigns", value: 73, delta: 13 },
        { label: "Response rate", value: "43%", delta: 7.2 },
        { label: "Lead-to-visit conversion", value: "29%", delta: 4.1 },
        { label: "First-visit NPS", value: "56", delta: 7 }
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
      goal: "CSAT +3.7%",
      kpis: [
        { label: "Open support tickets", value: 126, delta: -15 },
        { label: "Avg. resolution time", value: "6.5h", delta: -2.2 },
        { label: "Self-service usage", value: "34%", delta: 10.4 },
        { label: "Support CSAT", value: "91%", delta: 3.7 }
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
const timeframeEl = document.getElementById("timeframe");
const teamEl = document.getElementById("team");
const kpiGrid = document.getElementById("kpiGrid");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const conversionVizEl = document.getElementById("conversionViz");
const actionsEl = document.getElementById("actions");
const journeyEl = document.getElementById("journey");
const goalProgress = document.getElementById("goalProgress");
const trendInsightEl = document.getElementById("trendInsight");

function formatTeamName(team) {
  if (team === "all") return "Cross-team view";
  return team
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDesiredTrendDirection(kpiLabel) {
  const labelsWhereDecreaseIsGood = new Set([
    "no-show rate",
    "readmission risk",
    "open support tickets",
    "avg. resolution time"
  ]);

  return labelsWhereDecreaseIsGood.has(kpiLabel.toLowerCase())
    ? "down"
    : "up";
}

function buildTrendInsight(selected, timeframe) {
  const noShowRate = engagementData?.no_show?.no_show_rate ?? 0.2;
  const journey = selected.journey;
  if (!journey || journey.length < 2) return "Not enough journey data yet.";

  const transitions = [];
  for (let i = 0; i < journey.length - 1; i += 1) {
    const from = journey[i];
    const to = journey[i + 1];
    const drop = Math.max(from.value - to.value, 0);
    const conversion = from.value ? to.value / from.value : 0;
    transitions.push({ from, to, drop, conversion });
  }

  const largestDrop = transitions.reduce((max, item) => (item.drop > max.drop ? item : max), transitions[0]);
  const recoverable = Math.round(largestDrop.drop * noShowRate * 0.6);
  const cadence = timeframe === "monthly" ? "month" : "quarter";

  return `${formatTeamName(teamEl.value)}: biggest leakage is ${largestDrop.from.stage} → ${largestDrop.to.stage} (${(largestDrop.conversion * 100).toFixed(1)}% conversion, ${largestDrop.drop} patients lost). With targeted reminder + outreach fixes, an estimated ${recoverable} patients per ${cadence} could be recovered.`;
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
        ${kpi.delta >= 0 ? "▲" : "▼"} ${Math.abs(kpi.delta)}% vs prior period
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

  if (conversionVizEl) {
    conversionVizEl.innerHTML = "";
    for (let i = 0; i < selected.journey.length - 1; i += 1) {
      const from = selected.journey[i];
      const to = selected.journey[i + 1];
      const conversion = from.value ? (to.value / from.value) * 100 : 0;
      const drop = Math.max(from.value - to.value, 0);

      const step = document.createElement("article");
      step.className = "conversion-step";
      step.innerHTML = `
        <div class="conversion-head">
          <span><strong>${from.stage}</strong> → <strong>${to.stage}</strong></span>
          <span>${conversion.toFixed(1)}% convert</span>
        </div>
        <div class="conversion-meter"><span style="width:${Math.max(conversion, 4)}%"></span></div>
        <div class="conversion-meta">
          <span>${to.value.toLocaleString()} reached ${to.stage}</span>
          <span>${drop.toLocaleString()} dropped off</span>
        </div>
      `;
      conversionVizEl.appendChild(step);
    }
  }

  if (trendInsightEl) {
    trendInsightEl.textContent = buildTrendInsight(selected, timeframe);
  }
}
[timeframeEl, teamEl].forEach((el) => el.addEventListener("change", render));

const engagementKpisEl = document.getElementById("engagementKpis");
const leadRiskListEl = document.getElementById("leadRiskList");
const satisfactionSignalsEl = document.getElementById("satisfactionSignals");

function toPct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function renderEngagement() {
  const noShow = engagementData.no_show;
  const satisfaction = engagementData.satisfaction;
  if (!engagementKpisEl || !leadRiskListEl || !satisfactionSignalsEl || !noShow || !satisfaction) return;

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
}

async function loadEngagementData() {
  try {
    const response = await fetch("outputs/engagement_metrics.json");
    if (!response.ok) return;

    const remote = await response.json();
    if (remote?.no_show && remote?.satisfaction) {
      engagementData = remote;
      renderEngagement();
    }
  } catch (error) {
    // Keep fallback values for static previews or local file opens.
  }
}

render();
renderEngagement();
loadEngagementData();
