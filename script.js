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
const conversionSummaryEl = document.getElementById("conversionSummary");
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
  const noShowRate = engagementData && engagementData.no_show && typeof engagementData.no_show.no_show_rate === "number"
    ? engagementData.no_show.no_show_rate
    : 0.2;
  const journey = selected.journey;

  if (!journey || journey.length < 2) {
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

  const largestDrop = transitions.reduce((max, item) =>
    item.drop > max.drop ? item : max,
  transitions[0]);

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

[timeframeEl, teamEl].forEach((el) => el.addEventListener("change", render));

const engagementKpisEl = document.getElementById("engagementKpis");
const leadRiskListEl = document.getElementById("leadRiskList");
const satisfactionSignalsEl = document.getElementById("satisfactionSignals");
const anaToggleEl = document.getElementById("anaToggle");
const anaPanelEl = document.getElementById("anaPanel");
const anaMessagesEl = document.getElementById("anaMessages");
const anaFormEl = document.getElementById("anaForm");
const anaInputEl = document.getElementById("anaInput");

function toPct(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function renderEngagement() {
  const noShow = engagementData.no_show;
  const satisfaction = engagementData.satisfaction;

  if (
    !engagementKpisEl ||
    !leadRiskListEl ||
    !satisfactionSignalsEl ||
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
}

function buildBusinessSnapshot() {
  const timeframe = timeframeEl.value;
  const team = teamEl.value;
  const selected = data[timeframe][team];
  const noShowRate = (engagementData.no_show.no_show_rate * 100).toFixed(1);
  const followUp = selected.kpis.find((k) =>
    k.label.toLowerCase().includes("follow-up"),
  );

  return {
    timeframe,
    team,
    selected,
    noShowRate,
    followUp: followUp && followUp.value ? followUp.value : "N/A",
    noShow: engagementData.no_show,
    satisfaction: engagementData.satisfaction
  };
}

function findLargestJourneyDrop(journey) {
  let biggest = {
    from: journey[0] ? journey[0].stage : "Start",
    to: journey[1] ? journey[1].stage : "Next",
    drop: 0,
    conversion: 0
  };

  for (let i = 0; i < journey.length - 1; i += 1) {
    const from = journey[i];
    const to = journey[i + 1];
    const drop = Math.max(from.value - to.value, 0);
    const conversion = from.value ? ((to.value / from.value) * 100).toFixed(1) : 0;

    if (drop > biggest.drop) {
      biggest = { from: from.stage, to: to.stage, drop, conversion };
    }
  }

  return biggest;
}

function getHighestRiskLeadBucket(noShow) {
  const buckets = Object.entries(noShow.risk_by_lead_bucket || {});

  if (!buckets.length) {
    return { label: "long-wait appointments", rate: noShow.no_show_rate || 0 };
  }

  const highest = buckets.reduce((max, current) =>
    current[1] > max[1] ? current : max,
  buckets[0]);

  return { label: highest[0], rate: highest[1] };
}

function getNoShowPersona(snapshot) {
  const highestRiskBucket = getHighestRiskLeadBucket(snapshot.noShow);
  const smsCoverage = snapshot.noShow.sms_coverage;
  const avgLeadDays = snapshot.noShow.avg_lead_days;

  return {
    bucket: highestRiskBucket.label,
    bucketRate: highestRiskBucket.rate,
    smsCoverage,
    avgLeadDays
  };
}

const anaState = {
  history: [],
  lastIntent: "general"
};

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function hasAny(text, phrases) {
  return phrases.some((phrase) => text.includes(phrase));
}

function pickOne(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function getTopKpiSummary(selected) {
  const strongest = selected.kpis
    .filter((kpi) => getDesiredTrendDirection(kpi.label) === "up" ? kpi.delta >= 0 : kpi.delta <= 0)
    .slice(0, 2)
    .map((kpi) => `${kpi.label}: ${kpi.value}`)
    .join(" | ");

  return strongest || `${selected.kpis[0].label}: ${selected.kpis[0].value}`;
}

function buildPatternInsights(snapshot, drop, persona) {
  const age = snapshot.satisfaction && snapshot.satisfaction.correlation_with_satisfaction
    ? snapshot.satisfaction.correlation_with_satisfaction.Age
    : 0;
  const severity = snapshot.satisfaction && snapshot.satisfaction.correlation_with_satisfaction
    ? snapshot.satisfaction.correlation_with_satisfaction.Severity
    : 0;
  const anxiety = snapshot.satisfaction && snapshot.satisfaction.correlation_with_satisfaction
    ? snapshot.satisfaction.correlation_with_satisfaction.Anxiety
    : 0;

  const behaviorPattern = `No-show risk concentrates in ${persona.bucket} bookings (${toPct(persona.bucketRate)}), which suggests timing and reminder execution are stronger drivers than diagnosis mix.`;
  const funnelPattern = `The largest friction point is ${drop.from} → ${drop.to}, so improving this single stage can lift both retention and experience together.`;
  const modelBridgePattern = `Model bridge: severity (${severity.toFixed(2)}) and anxiety (${anxiety.toFixed(2)}) are linked to lower satisfaction, so high-acuity patients who also wait longer are your highest-value intervention segment.`;
  const agePattern = `Age correlation is ${age.toFixed(2)}, so experience design should be simplified for older cohorts (clear reminders, low-friction confirmation, proactive reassurance).`;

  return [behaviorPattern, funnelPattern, modelBridgePattern, agePattern];
}

function detectIntent(text) {
  const intents = [
    {
      name: "noShowPatientType",
      match:
        hasAny(text, ["patient", "people", "segment", "profile"]) &&
        hasAny(text, ["no show", "not show", "miss appointment", "attendance"]) &&
        hasAny(text, ["likely", "risk", "highest", "most"])
    },
    {
      name: "compareModels",
      match: hasAny(text, ["compare", "between models", "model", "relationship", "connect"]) &&
        hasAny(text, ["no show", "satisfaction", "experience", "retention"])
    },
    {
      name: "actionPlan",
      match: hasAny(text, ["30 days", "next month", "action plan", "roadmap", "step by step"])
    },
    {
      name: "priority",
      match: hasAny(text, ["priority", "prioritize", "first", "where should", "biggest impact"])
    },
    {
      name: "rootCause",
      match: hasAny(text, ["why", "cause", "reason", "root cause"]) && hasAny(text, ["drop", "leak", "conversion", "no show"])
    },
    {
      name: "scenario",
      match: hasAny(text, ["scenario", "current", "status", "how are we doing", "snapshot"])
    },
    {
      name: "strategy",
      match: hasAny(text, ["strategy", "strategies", "plan", "improve", "help", "what should we do"])
    },
    {
      name: "satisfaction",
      match: hasAny(text, ["satisfaction", "experience", "csat", "trust"])
    },
    {
      name: "retention",
      match: hasAny(text, ["retention", "growth", "kpi", "active care", "conversion rate"])
    }
  ];

  const found = intents.find((intent) => intent.match);
  return found ? found.name : null;
}

function rememberAnaTurn(userText, reply, intent) {
  anaState.history.push({ userText, reply, intent, ts: Date.now() });
  if (anaState.history.length > 8) anaState.history.shift();
  anaState.lastIntent = intent;
}

function getAnaReply(userText) {
  const text = normalizeText(userText);
  const snapshot = buildBusinessSnapshot();
  const drop = findLargestJourneyDrop(snapshot.selected.journey);
  const focusTeam = formatTeamName(snapshot.team);
  const persona = getNoShowPersona(snapshot);
  const topKpis = getTopKpiSummary(snapshot.selected);
  const patterns = buildPatternInsights(snapshot, drop, persona);

  let intent = detectIntent(text);

  if (!intent && hasAny(text, ["why", "and why", "how come", "tell me more"])) {
    intent = anaState.lastIntent;
  }

  if (!intent) intent = "general";

  let reply;

  if (intent === "noShowPatientType") {
    reply = `${pickOne(["Great question.", "Love this question.", "This is exactly the right lens."])} The highest-risk profile in this dashboard is behavioral, not diagnostic: people booked ${persona.bucket} ahead carry the highest no-show risk (${toPct(persona.bucketRate)}). The likely reasons are longer wait windows, more calendar conflicts, and reminder coverage still at ${toPct(persona.smsCoverage)}. A strong strategy is to treat long-lead bookings as a priority segment with stronger reminder cadence and confirmation calls.`;
  } else if (intent === "compareModels") {
    reply = `Here’s the useful model connection: no-show risk tells us *who might not arrive*, while satisfaction correlations tell us *who may arrive but still have a poor experience*. ${patterns[2]} In plain terms: if we reduce no-shows for long-lead appointments and add reassurance workflows for high-severity/high-anxiety cohorts, both retention and sentiment should improve together.`;
  } else if (intent === "actionPlan") {
    reply = `Perfect—here’s a practical 30-day plan. Week 1: tag ${persona.bucket} bookings as high risk and add two-step reminders. Week 2: escalate non-confirmed visits to same-day outreach. Week 3: pilot one humanized message script for high-anxiety cohorts. Week 4: review ${snapshot.selected.kpis[1].label}, no-show trend, and the ${drop.from} → ${drop.to} conversion. Keep only changes that moved those three numbers.`;
  } else if (intent === "priority") {
    reply = `If we want the fastest impact, start with ${drop.from} → ${drop.to}. It’s the biggest drop (${drop.drop} patients). Most teams under-invest here because it feels operational, but this is exactly where small process fixes create compounding KPI gains.`;
  } else if (intent === "rootCause") {
    reply = `From the pattern view, this looks less like low demand and more like execution friction. ${patterns[0]} ${patterns[1]} So root cause is likely a mix of wait-time friction + uneven reminder coverage + follow-through gaps between journey stages.`;
  } else if (intent === "scenario") {
    reply = `Here’s your current pulse for ${focusTeam} (${snapshot.timeframe}): goal is ${snapshot.selected.goal}, no-show baseline is ${snapshot.noShowRate}%, and the biggest journey gap is ${drop.from} → ${drop.to} at ${drop.conversion}% conversion. Biggest upside: improve that stage and you’ll likely move both retention and experience, not just one metric.`;
  } else if (intent === "strategy") {
    reply = `Absolutely. I’d run a simple 3-part strategy: (1) protect ${drop.from} → ${drop.to} with stronger follow-through, (2) give long-lead appointments (avg ${snapshot.noShow.avg_lead_days.toFixed(1)} days) extra reminders, and (3) run a weekly review on one leading KPI (${snapshot.selected.kpis[1].label}) plus one lagging KPI. That balance prevents blind spots.`;
  } else if (intent === "satisfaction") {
    reply = `Good call—experience is tightly connected to outcomes here. ${patterns[3]} Also, severity/anxiety correlations indicate high-acuity patients need clearer expectation-setting before and after visits. This is often a communication design issue, not just a clinical one.`;
  } else if (intent === "retention") {
    reply = `For retention and growth, think “funnel discipline + risk segmentation.” Close the largest conversion gap first (${drop.from} → ${drop.to}), then segment long-lead bookings and high-anxiety cohorts. Right now your strongest KPI signals are ${topKpis}.`;
  } else {
    reply = `I can definitely help with that. I can analyze patterns, connect no-show and satisfaction models, and turn insights into practical strategy. If you share your exact question, I’ll give you a direct recommendation and the reasoning behind it.`;
  }

  rememberAnaTurn(userText, reply, intent);
  return reply;
}

function addAnaMessage(text, role = "bot") {
  if (!anaMessagesEl) return null;
  const bubble = document.createElement("div");
  bubble.className = `ana-bubble ${role}`;
  bubble.textContent = text;
  anaMessagesEl.appendChild(bubble);
  anaMessagesEl.scrollTop = anaMessagesEl.scrollHeight;
  return bubble;
}

function initAna() {
  if (!anaToggleEl || !anaPanelEl || !anaFormEl || !anaInputEl) return;

  addAnaMessage(
    "Hi, I’m Ana 👋 I’m here to help you make sense of the business quickly — ask me what’s happening, why it might be happening, and what we should do next.",
  );

  anaToggleEl.addEventListener("click", () => {
    const isOpen = !anaPanelEl.hidden;
    anaPanelEl.hidden = isOpen;
    anaToggleEl.setAttribute("aria-expanded", String(!isOpen));
    if (!isOpen) anaInputEl.focus();
  });

  anaFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userText = anaInputEl.value.trim();
    if (!userText) return;

    addAnaMessage(userText, "user");
    anaFormEl.reset();

    const thinkingBubble = addAnaMessage("Ana is thinking…", "thinking");
    const pause = 900 + Math.floor(Math.random() * 900);
    await new Promise((resolve) => setTimeout(resolve, pause));

    if (thinkingBubble && thinkingBubble.parentNode) {
      thinkingBubble.remove();
    }

    addAnaMessage(getAnaReply(userText), "bot");
  });
}

async function loadEngagementData() {
  try {
    const response = await fetch("outputs/engagement_metrics.json");
    if (!response.ok) return;

    const remote = await response.json();
    if (remote && remote.no_show && remote.satisfaction) {
      engagementData = remote;
      renderEngagement();
    }
  } catch (error) {
    // Keep fallback values for static previews or local file opens.
  }
}

render();
renderEngagement();
initAna();
loadEngagementData();
