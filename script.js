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

const timeframeEl = document.getElementById("timeframe");
const teamEl = document.getElementById("team");
const kpiGrid = document.getElementById("kpiGrid");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const chartEl = document.getElementById("chart");
const actionsEl = document.getElementById("actions");
const journeyEl = document.getElementById("journey");
const goalProgress = document.getElementById("goalProgress");

function formatTeamName(team) {
  if (team === "all") return "Cross-team view";
  return team
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function isNegativeTrendPositive(kpiLabel) {
  return kpiLabel.toLowerCase().includes("no-show rate");
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

    const isPositive = isNegativeTrendPositive(kpi.label)
      ? kpi.delta <= 0
      : kpi.delta >= 0;

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

  chartEl.innerHTML = "";
  const max = Math.max(...selected.trend);
  selected.trend.forEach((value, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "bar-wrap";
    const pct = Math.round((value / max) * 100);

    wrap.innerHTML = `
      <div class="bar" style="height:${pct}%" title="${value}%"></div>
      <div class="bar-label">${timeframe === "monthly" ? `M${idx + 1}` : `Q${idx + 1}`}</div>
    `;
    chartEl.appendChild(wrap);
  });
}

[timeframeEl, teamEl].forEach((el) => el.addEventListener("change", render));
render();
