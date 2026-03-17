const data = {
  monthly: {
    all: {
      goal: "Retention +6.4%",
      kpis: [
        { label: "New patients", value: 184, delta: 12, deltaSuffix: "%" },
        {
          label: "Follow-up completion",
          value: "88%",
          delta: 6.4,
          deltaSuffix: " pts"
        },
        { label: "No-show rate", value: "9%", delta: -2.1, deltaSuffix: " pts" },
        {
          label: "Satisfaction score",
          value: "4.7/5",
          delta: 0.3,
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
      goal: "Readmission risk -1.4%",
      kpis: [
        { label: "Care plans updated", value: 132, delta: 14, deltaSuffix: "%" },
        {
          label: "Medication adherence",
          value: "81%",
          delta: 4.2,
          deltaSuffix: " pts"
        },
        {
          label: "Readmission risk",
          value: "7%",
          delta: -1.4,
          deltaSuffix: " pts"
        },
        {
          label: "Patient trust score",
          value: "4.8/5",
          delta: 0.2,
          deltaSuffix: " pts"
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
      goal: "Lead-to-visit +3.4%",
      kpis: [
        { label: "Outreach campaigns", value: 24, delta: 7, deltaSuffix: "%" },
        { label: "Response rate", value: "46%", delta: 5.1, deltaSuffix: " pts" },
        {
          label: "Lead-to-visit conversion",
          value: "31%",
          delta: 3.4,
          deltaSuffix: " pts"
        },
        { label: "First-visit NPS", value: "59", delta: 5, deltaSuffix: " pts" }
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
        {
          label: "Open support tickets",
          value: 41,
          delta: -9,
          deltaSuffix: "%"
        },
        {
          label: "Avg. resolution time",
          value: "6.1h",
          delta: -1.3,
          deltaSuffix: "h"
        },
        {
          label: "Self-service usage",
          value: "38%",
          delta: 8.2,
          deltaSuffix: " pts"
        },
        { label: "Support CSAT", value: "93%", delta: 2.4, deltaSuffix: " pts" }
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
        { label: "New patients", value: 542, delta: 18, deltaSuffix: "%" },
        {
          label: "Follow-up completion",
          value: "86%",
          delta: 8.8,
          deltaSuffix: " pts"
        },
        { label: "No-show rate", value: "11%", delta: -3.4, deltaSuffix: " pts" },
        {
          label: "Satisfaction score",
          value: "4.6/5",
          delta: 0.5,
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
      goal: "Adherence +6.7%",
      kpis: [
        { label: "Care plans updated", value: 403, delta: 19, deltaSuffix: "%" },
        {
          label: "Medication adherence",
          value: "79%",
          delta: 6.7,
          deltaSuffix: " pts"
        },
        {
          label: "Readmission risk",
          value: "8%",
          delta: -2.5,
          deltaSuffix: " pts"
        },
        {
          label: "Patient trust score",
          value: "4.7/5",
          delta: 0.4,
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
      goal: "Response +7.2%",
      kpis: [
        { label: "Outreach campaigns", value: 73, delta: 13, deltaSuffix: "%" },
        { label: "Response rate", value: "43%", delta: 7.2, deltaSuffix: " pts" },
        {
          label: "Lead-to-visit conversion",
          value: "29%",
          delta: 4.1,
          deltaSuffix: " pts"
        },
        { label: "First-visit NPS", value: "56", delta: 7, deltaSuffix: " pts" }
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
        {
          label: "Open support tickets",
          value: 126,
          delta: -15,
          deltaSuffix: "%"
        },
        {
          label: "Avg. resolution time",
          value: "6.5h",
          delta: -2.2,
          deltaSuffix: "h"
        },
        {
          label: "Self-service usage",
          value: "34%",
          delta: 10.4,
          deltaSuffix: " pts"
        },
        { label: "Support CSAT", value: "91%", delta: 3.7, deltaSuffix: " pts" }
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
const engagementKpisEl = document.getElementById("engagementKpis");
const leadRiskListEl = document.getElementById("leadRiskList");
const satisfactionSignalsEl = document.getElementById("satisfactionSignals");
const anaToggleEl = document.getElementById("anaToggle");
const anaPanelEl = document.getElementById("anaPanel");
const anaMessagesEl = document.getElementById("anaMessages");
const anaFormEl = document.getElementById("anaForm");
const anaInputEl = document.getElementById("anaInput");

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
  const followUp = selected.kpis.find((kpi) =>
    kpi.label.toLowerCase().includes("follow-up")
  );
  const northStarKpi = selected.kpis?.[1]?.label || "follow-up completion";

  return {
    timeframe,
    team,
    selected,
    noShowRate,
    followUp: followUp?.value ?? "N/A",
    noShow: engagementData.no_show,
    satisfaction: engagementData.satisfaction,
    northStarKpi
  };
}

function findLargestJourneyDrop(journey) {
  if (!Array.isArray(journey) || journey.length < 2) {
    return {
      from: "Unknown",
      to: "Unknown",
      drop: 0,
      conversion: 0
    };
  }

  let biggest = {
    from: journey[0].stage,
    to: journey[1].stage,
    drop: Math.max(journey[0].value - journey[1].value, 0),
    conversion: journey[0].value
      ? ((journey[1].value / journey[0].value) * 100).toFixed(1)
      : 0
  };

  for (let i = 0; i < journey.length - 1; i += 1) {
    const from = journey[i];
    const to = journey[i + 1];
    const drop = Math.max(from.value - to.value, 0);
    const conversion = from.value
      ? ((to.value / from.value) * 100).toFixed(1)
      : 0;

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

  const highest = buckets.reduce(
    (max, current) => (current[1] > max[1] ? current : max),
    buckets[0]
  );

  return { label: highest[0], rate: highest[1] };
}

function getNoShowPersona(snapshot) {
  const highestRiskBucket = getHighestRiskLeadBucket(snapshot.noShow);

  return {
    bucket: highestRiskBucket.label,
    bucketRate: highestRiskBucket.rate,
    smsCoverage: snapshot.noShow.sms_coverage,
    avgLeadDays: snapshot.noShow.avg_lead_days
  };
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTopKpiSummary(selected) {
  const strongest = selected.kpis
    .filter((kpi) =>
      getDesiredTrendDirection(kpi.label) === "up" ? kpi.delta >= 0 : kpi.delta <= 0
    )
    .slice(0, 2)
    .map((kpi) => `${kpi.label}: ${kpi.value}`)
    .join(" | ");

  return strongest || `${selected.kpis[0].label}: ${selected.kpis[0].value}`;
}

function getAnaReply(userText) {
  const text = normalizeText(userText);
  const snapshot = buildBusinessSnapshot();
  const drop = findLargestJourneyDrop(snapshot.selected.journey);
  const focusTeam = formatTeamName(snapshot.team);
  const persona = getNoShowPersona(snapshot);
  const topKpis = getTopKpiSummary(snapshot.selected);

  const asksNoShowPatientType =
    (text.includes("patient") || text.includes("people")) &&
    (text.includes("likely") || text.includes("risk") || text.includes("high risk")) &&
    (text.includes("no show") || text.includes("not show") || text.includes("miss appointment"));

  if (asksNoShowPatientType) {
    return `That’s a very good question. From this data, the highest-risk patient pattern is behavioral: people booked ${persona.bucket} in advance show the highest no-show risk at ${toPct(persona.bucketRate)}. Longer wait windows create more schedule conflicts, motivation drops over time, and reminder coverage is still only ${toPct(persona.smsCoverage)}. So the riskiest profile here is long-lead appointments plus weaker reminder reach, not one specific diagnosis group.`;
  }

  if (text.includes("why") && (text.includes("drop") || text.includes("leak") || text.includes("conversion"))) {
    return `If we look at the funnel, the main leak is ${drop.from} → ${drop.to}. Usually this is where intent is still high but follow-through gets harder because of timing friction, unanswered reminders, or scheduling delays. I’d treat this as an operations gap more than a demand problem.`;
  }

  if (text.includes("priority") || text.includes("first") || text.includes("where should")) {
    return `If you want the highest-impact first move, focus on ${drop.from} → ${drop.to}. It’s your largest drop with ${drop.drop} patients lost. A focused reminder and same-day outreach sequence here will usually outperform broad campaigns.`;
  }

  if (text.includes("30 days") || text.includes("next month") || text.includes("action plan")) {
    return `Here’s a practical 30-day plan: Week 1, flag all ${persona.bucket} bookings as high-risk and add 2-step reminders. Week 2, escalate non-confirmed appointments to a call queue. Week 3, test one script variation by team. Week 4, review ${snapshot.northStarKpi} plus no-show trend and keep only what improved outcomes.`;
  }

  if (text.includes("scenario") || text.includes("current") || text.includes("status") || text.includes("how are we doing")) {
    return `In the ${snapshot.timeframe} ${focusTeam} view, the target is ${snapshot.selected.goal}. Biggest funnel gap is ${drop.from} → ${drop.to} with ${drop.conversion}% conversion, and no-show baseline is ${snapshot.noShowRate}%. Quick pulse: solid momentum, but fixing that stage should unlock the clearest gains.`;
  }

  if (text.includes("strategy") || text.includes("strategies") || text.includes("plan") || text.includes("improve") || text.includes("help")) {
    return `I’d keep this simple and practical: first, defend the ${drop.from} → ${drop.to} stage with tighter reminder cadences; second, give long-lead bookings averaging ${snapshot.noShow.avg_lead_days.toFixed(1)} days extra confirmation touches; third, run a weekly checkpoint on ${snapshot.northStarKpi}. That gives fast learning without overwhelming the team.`;
  }

  if (text.includes("no show") || text.includes("attendance")) {
    return `Current no-show baseline is ${snapshot.noShowRate}%. The strongest signal is lead time: ${persona.bucket} has the highest risk at ${toPct(persona.bucketRate)}. Reminder coverage is ${toPct(persona.smsCoverage)}, so the most practical lever is increasing reminder intensity for long-wait bookings first.`;
  }

  if (text.includes("satisfaction") || text.includes("experience") || text.includes("csat")) {
    return `On patient experience, satisfaction is being pulled by severity and anxiety signals in your model. The practical move is pairing clinical follow-up with expectation-setting and reassurance scripts for higher-acuity patients so experience improves alongside outcomes.`;
  }

  if (text.includes("retention") || text.includes("growth") || text.includes("kpi")) {
    return `To improve retention and growth without overcomplicating things, fix the biggest conversion gap first at ${drop.from} → ${drop.to}, then track one leading KPI weekly. Right now your strongest KPI pulse is ${topKpis}.`;
  }

  return `I can help with practical planning, no-show risk, funnel leaks, 30-day actions, and KPI priorities. Ask me something like “What should we prioritize first?” or “Give me a 30-day plan for this team.”`;
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
    "Hi, I’m Ana 👋 I’m here to help you make sense of the business quickly — ask me what’s happening, why it might be happening, and what we should do next."
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

    if (thinkingBubble?.parentNode) {
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
    if (remote?.no_show && remote?.satisfaction) {
      engagementData = remote;
      render();
      renderEngagement();
    }
  } catch (error) {
    console.warn("Using fallback engagement data.", error);
  }
}

[timeframeEl, teamEl].forEach((el) => {
  el.addEventListener("change", render);
});

render();
renderEngagement();
initAna();
loadEngagementData(); is this ok now?  +#+#+#+#+#+assistant to=container.exec մեկնաբանություն  体育彩票天天  天天中彩票官方  六和彩 凤凰大参考 《凤凰大参考  彩经彩票 json
{"cmd":["bash","-lc","cat > /tmp/test_script.js <<'EOF'\nconst data = {\n  monthly: {\n    all: {\n      goal: \"Retention +6.4%\",\n      kpis: [\n        { label: \"New patients\", value: 184, delta: 12, deltaSuffix: \"%\" },\n        {\n          label: \"Follow-up completion\",\n          value: \"88%\",\n          delta: 6.4,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"No-show rate\", value: \"9%\", delta: -2.1, deltaSuffix: \" pts\" },\n        {\n          label: \"Satisfaction score\",\n          value: \"4.7/5\",\n          delta: 0.3,\n          deltaSuffix: \" pts\"\n        }\n      ],\n      journey: [\n        { stage: \"Aware\", value: 820 },\n        { stage: \"Booked\", value: 374 },\n        { stage: \"Visited\", value: 248 },\n        { stage: \"Active care\", value: 184 }\n      ],\n      trend: [63, 68, 72, 76, 84, 88],\n      story:\n        \"Acquisition and retention are improving together. Faster follow-up reminders reduced no-shows while patient satisfaction increased month-over-month.\",\n      actions: [\n        \"Scale reminder workflows to all specialties.\",\n        \"Replicate top-performing outreach script in underperforming clinics.\",\n        \"Track no-show risk by appointment type for finer intervention.\"\n      ]\n    },\n    \"care-coordination\": {\n      goal: \"Readmission risk -1.4%\",\n      kpis: [\n        { label: \"Care plans updated\", value: 132, delta: 14, deltaSuffix: \"%\" },\n        {\n          label: \"Medication adherence\",\n          value: \"81%\",\n          delta: 4.2,\n          deltaSuffix: \" pts\"\n        },\n        {\n          label: \"Readmission risk\",\n          value: \"7%\",\n          delta: -1.4,\n          deltaSuffix: \" pts\"\n        },\n        {\n          label: \"Patient trust score\",\n          value: \"4.8/5\",\n          delta: 0.2,\n          deltaSuffix: \" pts\"\n        }\n      ],\n      journey: [\n        { stage: \"Enrolled\", value: 236 },\n        { stage: \"Plan set\", value: 192 },\n        { stage: \"Weekly check-in\", value: 158 },\n        { stage: \"Stable\", value: 132 }\n      ],\n      trend: [52, 58, 62, 67, 74, 81],\n      story:\n        \"Care coordination is preventing downstream risk. Consistent care plan updates correlate with stronger adherence and lower readmission risk.\",\n      actions: [\n        \"Trigger nurse escalation for missed medication logs within 24h.\",\n        \"Add high-risk care plan template for CHF and COPD cohorts.\",\n        \"Automate family caregiver reminders for complex cases.\"\n      ]\n    },\n    outreach: {\n      goal: \"Lead-to-visit +3.4%\",\n      kpis: [\n        { label: \"Outreach campaigns\", value: 24, delta: 7, deltaSuffix: \"%\" },\n        { label: \"Response rate\", value: \"46%\", delta: 5.1, deltaSuffix: \" pts\" },\n        {\n          label: \"Lead-to-visit conversion\",\n          value: \"31%\",\n          delta: 3.4,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"First-visit NPS\", value: \"59\", delta: 5, deltaSuffix: \" pts\" }\n      ],\n      journey: [\n        { stage: \"Contacted\", value: 1130 },\n        { stage: \"Responded\", value: 520 },\n        { stage: \"Scheduled\", value: 350 },\n        { stage: \"Visited\", value: 243 }\n      ],\n      trend: [21, 24, 28, 32, 39, 46],\n      story:\n        \"Outreach performance is translating into visits. Response improvements are feeding conversion and lifting early patient sentiment.\",\n      actions: [\n        \"Double down on SMS campaigns with clinician video snippets.\",\n        \"A/B test messaging by age cohort and insurance type.\",\n        \"Route warm leads to same-day scheduling queue.\"\n      ]\n    },\n    support: {\n      goal: \"Resolution time -1.3h\",\n      kpis: [\n        {\n          label: \"Open support tickets\",\n          value: 41,\n          delta: -9,\n          deltaSuffix: \"%\"\n        },\n        {\n          label: \"Avg. resolution time\",\n          value: \"6.1h\",\n          delta: -1.3,\n          deltaSuffix: \"h\"\n        },\n        {\n          label: \"Self-service usage\",\n          value: \"38%\",\n          delta: 8.2,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"Support CSAT\", value: \"93%\", delta: 2.4, deltaSuffix: \" pts\" }\n      ],\n      journey: [\n        { stage: \"Incoming\", value: 190 },\n        { stage: \"Self-solved\", value: 72 },\n        { stage: \"Agent handled\", value: 118 },\n        { stage: \"Resolved\", value: 149 }\n      ],\n      trend: [17, 21, 27, 30, 34, 38],\n      story:\n        \"Support workload is healthier. Self-service adoption reduced ticket volume and let the team resolve complex cases faster.\",\n      actions: [\n        \"Promote top 5 help-center articles in post-visit emails.\",\n        \"Add macro suggestions for common medication refill questions.\",\n        \"Review weekend staffing to preserve SLA gains.\"\n      ]\n    }\n  },\n  quarterly: {\n    all: {\n      goal: \"Retention +8.8%\",\n      kpis: [\n        { label: \"New patients\", value: 542, delta: 18, deltaSuffix: \"%\" },\n        {\n          label: \"Follow-up completion\",\n          value: \"86%\",\n          delta: 8.8,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"No-show rate\", value: \"11%\", delta: -3.4, deltaSuffix: \" pts\" },\n        {\n          label: \"Satisfaction score\",\n          value: \"4.6/5\",\n          delta: 0.5,\n          deltaSuffix: \" pts\"\n        }\n      ],\n      journey: [\n        { stage: \"Aware\", value: 2410 },\n        { stage: \"Booked\", value: 1170 },\n        { stage: \"Visited\", value: 812 },\n        { stage: \"Active care\", value: 542 }\n      ],\n      trend: [55, 61, 69, 74],\n      story:\n        \"Quarterly performance shows compounding gains. Better outreach quality and proactive reminders are improving both continuity and experience.\",\n      actions: [\n        \"Set quarterly benchmark by clinic to sustain retention gains.\",\n        \"Expand digital check-in to reduce front-desk wait times.\",\n        \"Tie provider scorecards to follow-up completion metric.\"\n      ]\n    },\n    \"care-coordination\": {\n      goal: \"Adherence +6.7%\",\n      kpis: [\n        { label: \"Care plans updated\", value: 403, delta: 19, deltaSuffix: \"%\" },\n        {\n          label: \"Medication adherence\",\n          value: \"79%\",\n          delta: 6.7,\n          deltaSuffix: \" pts\"\n        },\n        {\n          label: \"Readmission risk\",\n          value: \"8%\",\n          delta: -2.5,\n          deltaSuffix: \" pts\"\n        },\n        {\n          label: \"Patient trust score\",\n          value: \"4.7/5\",\n          delta: 0.4,\n          deltaSuffix: \" pts\"\n        }\n      ],\n      journey: [\n        { stage: \"Enrolled\", value: 710 },\n        { stage: \"Plan set\", value: 590 },\n        { stage: \"Weekly check-in\", value: 476 },\n        { stage: \"Stable\", value: 403 }\n      ],\n      trend: [48, 57, 66, 79],\n      story:\n        \"Across the quarter, care coordination became a leading indicator for outcomes. Adherence rose as high-risk gaps were closed earlier.\",\n      actions: [\n        \"Prioritize post-discharge calls in first 72 hours.\",\n        \"Launch multilingual adherence education packets.\",\n        \"Surface rising-risk patients in daily huddles.\"\n      ]\n    },\n    outreach: {\n      goal: \"Response +7.2%\",\n      kpis: [\n        { label: \"Outreach campaigns\", value: 73, delta: 13, deltaSuffix: \"%\" },\n        { label: \"Response rate\", value: \"43%\", delta: 7.2, deltaSuffix: \" pts\" },\n        {\n          label: \"Lead-to-visit conversion\",\n          value: \"29%\",\n          delta: 4.1,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"First-visit NPS\", value: \"56\", delta: 7, deltaSuffix: \" pts\" }\n      ],\n      journey: [\n        { stage: \"Contacted\", value: 3490 },\n        { stage: \"Responded\", value: 1500 },\n        { stage: \"Scheduled\", value: 980 },\n        { stage: \"Visited\", value: 730 }\n      ],\n      trend: [18, 27, 35, 43],\n      story:\n        \"The outreach story is consistent: stronger campaign relevance drives responses, which then lifts conversions and first-visit loyalty.\",\n      actions: [\n        \"Shift budget toward highest-converting referral channels.\",\n        \"Create specialty-specific first-visit nurture journeys.\",\n        \"Pilot chatbot triage for inbound web leads.\"\n      ]\n    },\n    support: {\n      goal: \"CSAT +3.7%\",\n      kpis: [\n        {\n          label: \"Open support tickets\",\n          value: 126,\n          delta: -15,\n          deltaSuffix: \"%\"\n        },\n        {\n          label: \"Avg. resolution time\",\n          value: \"6.5h\",\n          delta: -2.2,\n          deltaSuffix: \"h\"\n        },\n        {\n          label: \"Self-service usage\",\n          value: \"34%\",\n          delta: 10.4,\n          deltaSuffix: \" pts\"\n        },\n        { label: \"Support CSAT\", value: \"91%\", delta: 3.7, deltaSuffix: \" pts\" }\n      ],\n      journey: [\n        { stage: \"Incoming\", value: 620 },\n        { stage: \"Self-solved\", value: 211 },\n        { stage: \"Agent handled\", value: 409 },\n        { stage: \"Resolved\", value: 534 }\n      ],\n      trend: [14, 21, 27, 34],\n      story:\n        \"Support systems are scaling. Digital self-service absorbed routine volume while agent quality kept satisfaction trending upward.\",\n      actions: [\n        \"Introduce intent detection for faster ticket routing.\",\n        \"Use QA scorecards to coach first-contact resolution.\",\n        \"Expand knowledge base articles for billing questions.\"\n      ]\n    }\n  }\n};\n\nconst engagementFallback = {\n  no_show: {\n    records: 110516,\n    no_show_rate: 0.2019,\n    attendance_rate: 0.7981,\n    sms_coverage: 0.321,\n    avg_lead_days: 10.18,\n    risk_by_lead_bucket: {\n      \"0-1 days\": 0.0664,\n      \"2-7 days\": 0.2468,\n      \"8-14 days\": 0.3047,\n      \"15+ days\": 0.3274\n    },\n    wait_time_gap: 0.2611\n  },\n  satisfaction: {\n    records: 25,\n    avg_satisfaction: 65.52,\n    high_satisfaction_ratio: 0.44,\n    correlation_with_satisfaction: {\n      Age: -0.9014,\n      Severity: -0.723,\n      Anxiety: -0.5363\n    }\n  }\n};\n\nlet engagementData = engagementFallback;\n\nconst timeframeEl = document.getElementById(\"timeframe\");\nconst teamEl = document.getElementById(\"team\");\nconst kpiGrid = document.getElementById(\"kpiGrid\");\nconst storyTitle = document.getElementById(\"storyTitle\");\nconst storyText = document.getElementById(\"storyText\");\nconst conversionSummaryEl = document.getElementById(\"conversionSummary\");\nconst actionsEl = document.getElementById(\"actions\");\nconst journeyEl = document.getElementById(\"journey\");\nconst goalProgress = document.getElementById(\"goalProgress\");\nconst trendInsightEl = document.getElementById(\"trendInsight\");\nconst engagementKpisEl = document.getElementById(\"engagementKpis\");\nconst leadRiskListEl = document.getElementById(\"leadRiskList\");\nconst satisfactionSignalsEl = document.getElementById(\"satisfactionSignals\");\nconst anaToggleEl = document.getElementById(\"anaToggle\");\nconst anaPanelEl = document.getElementById(\"anaPanel\");\nconst anaMessagesEl = document.getElementById(\"anaMessages\");\nconst anaFormEl = document.getElementById(\"anaForm\");\nconst anaInputEl = document.getElementById(\"anaInput\");\n\nfunction formatTeamName(team) {\n  if (team === \"all\") return \"Cross-team view\";\n  return team\n    .split(\"-\")\n    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))\n    .join(\" \");\n}\n\nfunction getDesiredTrendDirection(kpiLabel) {\n  const label = kpiLabel.toLowerCase();\n  const decreaseIsGoodPatterns = [\n    \"no-show\",\n    \"readmission\",\n    \"resolution time\",\n    \"support tickets\",\n    \"open tickets\"\n  ];\n\n  return decreaseIsGoodPatterns.some((pattern) => label.includes(pattern))\n    ? \"down\"\n    : \"up\";\n}\n\nfunction toPct(value) {\n  return `${(value * 100).toFixed(1)}%`;\n}\n\nfunction formatDelta(kpi) {\n  const suffix = kpi.deltaSuffix || \"\";\n  const direction = kpi.delta >= 0 ? \"▲\" : \"▼\";\n  return `${direction} ${Math.abs(kpi.delta)}${suffix} vs prior period`;\n}\n\nfunction buildTrendInsight(selected, timeframe) {\n  const noShowRate = engagementData?.no_show?.no_show_rate ?? 0.2;\n  const journey = selected.journey;\n\n  if (!Array.isArray(journey) || journey.length < 2) {\n    return \"Not enough journey data yet.\";\n  }\n\n  const transitions = [];\n\n  for (let i = 0; i < journey.length - 1; i += 1) {\n    const from = journey[i];\n    const to = journey[i + 1];\n    const drop = Math.max(from.value - to.value, 0);\n    const conversion = from.value ? to.value / from.value : 0;\n\n    transitions.push({ from, to, drop, conversion });\n  }\n\n  const largestDrop = transitions.reduce(\n    (max, item) => (item.drop > max.drop ? item : max),\n    transitions[0]\n  );\n\n  const recoverable = Math.round(largestDrop.drop * noShowRate * 0.6);\n  const cadence = timeframe === \"monthly\" ? \"month\" : \"quarter\";\n\n  return `${formatTeamName(teamEl.value)}: biggest leakage is ${largestDrop.from.stage} → ${largestDrop.to.stage} (${(largestDrop.conversion * 100).toFixed(1)}% conversion, ${largestDrop.drop} patients lost). With targeted reminder and outreach fixes, an estimated ${recoverable} patients per ${cadence} could be recovered.`;\n}\n\nfunction render() {\n  const timeframe = timeframeEl.value;\n  const team = teamEl.value;\n  const selected = data[timeframe][team];\n\n  goalProgress.textContent = selected.goal;\n\n  kpiGrid.innerHTML = \"\";\n  selected.kpis.forEach((kpi) => {\n    const card = document.createElement(\"article\");\n    card.className = \"kpi-card\";\n\n    const desiredTrendDirection = getDesiredTrendDirection(kpi.label);\n    const isPositive =\n      desiredTrendDirection === \"down\" ? kpi.delta <= 0 : kpi.delta >= 0;\n\n    card.innerHTML = `\n      <h3>${kpi.label}</h3>\n      <div class=\"kpi-value\">${kpi.value}</div>\n      <div class=\"kpi-delta ${isPositive ? \"up\" : \"down\"}\">\n        ${formatDelta(kpi)}\n      </div>\n    `;\n\n    kpiGrid.appendChild(card);\n  });\n\n  journeyEl.innerHTML = \"\";\n  const topJourneyValue = Math.max(...selected.journey.map((j) => j.value));\n\n  selected.journey.forEach((step) => {\n    const item = document.createElement(\"div\");\n    item.className = \"journey-item\";\n    const pct = Math.round((step.value / topJourneyValue) * 100);\n\n    item.innerHTML = `\n      <p>${step.stage}</p>\n      <strong>${step.value}</strong>\n      <div class=\"journey-meter\"><span style=\"width: ${pct}%\"></span></div>\n    `;\n\n    journeyEl.appendChild(item);\n  });\n\n  storyTitle.textContent = `Narrative: ${formatTeamName(team)}`;\n  storyText.textContent = selected.story;\n\n  actionsEl.innerHTML = \"\";\n  selected.actions.forEach((action) => {\n    const li = document.createElement(\"li\");\n    li.textContent = action;\n    actionsEl.appendChild(li);\n  });\n\n  if (conversionSummaryEl) {\n    conversionSummaryEl.innerHTML = \"\";\n\n    for (let i = 0; i < selected.journey.length - 1; i += 1) {\n      const from = selected.journey[i];\n      const to = selected.journey[i + 1];\n      const conversion = from.value ? (to.value / from.value) * 100 : 0;\n      const drop = Math.max(from.value - to.value, 0);\n\n      const step = document.createElement(\"article\");\n      step.className = \"conversion-item\";\n      step.innerHTML = `\n        <h3>${from.stage} → ${to.stage}</h3>\n        <p><strong>${conversion.toFixed(1)}%</strong> conversion</p>\n        <p>${to.value.toLocaleString()} reached ${to.stage}</p>\n        <p>${drop.toLocaleString()} dropped off</p>\n      `;\n\n      conversionSummaryEl.appendChild(step);\n    }\n  }\n\n  if (trendInsightEl) {\n    trendInsightEl.textContent = buildTrendInsight(selected, timeframe);\n  }\n}\n\nfunction renderEngagement() {\n  const noShow = engagementData.no_show;\n  const satisfaction = engagementData.satisfaction;\n\n  if (\n    !engagementKpisEl ||\n    !leadRiskListEl ||\n    !satisfactionSignalsEl ||\n    !noShow ||\n    !satisfaction\n  ) {\n    return;\n  }\n\n  engagementKpisEl.innerHTML = \"\";\n\n  [\n    {\n      label: \"No-show rate\",\n      value: toPct(noShow.no_show_rate),\n      note: `${noShow.records.toLocaleString()} appointments analyzed`\n    },\n    {\n      label: \"Attendance rate\",\n      value: toPct(noShow.attendance_rate),\n      note: \"Core retention proxy\"\n    },\n    {\n      label: \"SMS reminder coverage\",\n      value: toPct(noShow.sms_coverage),\n      note: \"Reminder workflow penetration\"\n    },\n    {\n      label: \"Avg satisfaction\",\n      value: `${satisfaction.avg_satisfaction}/100`,\n      note: `${toPct(satisfaction.high_satisfaction_ratio)} high-satisfaction ratio`\n    }\n  ].forEach((item) => {\n    const card = document.createElement(\"article\");\n    card.className = \"kpi-card\";\n    card.innerHTML = `\n      <h3>${item.label}</h3>\n      <div class=\"kpi-value\">${item.value}</div>\n      <div class=\"kpi-delta\">${item.note}</div>\n    `;\n    engagementKpisEl.appendChild(card);\n  });\n\n  leadRiskListEl.innerHTML = \"\";\n  Object.entries(noShow.risk_by_lead_bucket).forEach(([bucket, rate]) => {\n    const li = document.createElement(\"li\");\n    li.textContent = `${bucket}: ${toPct(rate)} no-show risk`;\n    leadRiskListEl.appendChild(li);\n  });\n\n  const gap = document.createElement(\"li\");\n  gap.textContent = `Long-wait risk gap: ${toPct(noShow.wait_time_gap)} higher than near-term bookings.`;\n  leadRiskListEl.appendChild(gap);\n\n  satisfactionSignalsEl.innerHTML = \"\";\n  const age = satisfaction.correlation_with_satisfaction.Age;\n  const severity = satisfaction.correlation_with_satisfaction.Severity;\n  const anxiety = satisfaction.correlation_with_satisfaction.Anxiety;\n\n  [\n    `Age vs satisfaction correlation: ${age.toFixed(2)} (older cohorts report lower satisfaction in sample).`,\n    `Severity vs satisfaction correlation: ${severity.toFixed(2)} (clinical acuity impacts patient experience).`,\n    `Anxiety vs satisfaction correlation: ${anxiety.toFixed(2)} (behavioral support can improve sentiment).`\n  ].forEach((text) => {\n    const li = document.createElement(\"li\");\n    li.textContent = text;\n    satisfactionSignalsEl.appendChild(li);\n  });\n}\n\nfunction buildBusinessSnapshot() {\n  const timeframe = timeframeEl.value;\n  const team = teamEl.value;\n  const selected = data[timeframe][team];\n  const noShowRate = (engagementData.no_show.no_show_rate * 100).toFixed(1);\n  const followUp = selected.kpis.find((kpi) =>\n    kpi.label.toLowerCase().includes(\"follow-up\")\n  );\n  const northStarKpi = selected.kpis?.[1]?.label || \"follow-up completion\";\n\n  return {\n    timeframe,\n    team,\n    selected,\n    noShowRate,\n    followUp: followUp?.value ?? \"N/A\",\n    noShow: engagementData.no_show,\n    satisfaction: engagementData.satisfaction,\n    northStarKpi\n  };\n}\n\nfunction findLargestJourneyDrop(journey) {\n  if (!Array.isArray(journey) || journey.length < 2) {\n    return {\n      from: \"Unknown\",\n      to: \"Unknown\",\n      drop: 0,\n      conversion: 0\n    };\n  }\n\n  let biggest = {\n    from: journey[0].stage,\n    to: journey[1].stage,\n    drop: Math.max(journey[0].value - journey[1].value, 0),\n    conversion: journey[0].value\n      ? ((journey[1].value / journey[0].value) * 100).toFixed(1)\n      : 0\n  };\n\n  for (let i = 0; i < journey.length - 1; i += 1) {\n    const from = journey[i];\n    const to = journey[i + 1];\n    const drop = Math.max(from.value - to.value, 0);\n    const conversion = from.value\n      ? ((to.value / from.value) * 100).toFixed(1)\n      : 0;\n\n    if (drop > biggest.drop) {\n      biggest = { from: from.stage, to: to.stage, drop, conversion };\n    }\n  }\n\n  return biggest;\n}\n\nfunction getHighestRiskLeadBucket(noShow) {\n  const buckets = Object.entries(noShow.risk_by_lead_bucket || {});\n\n  if (!buckets.length) {\n    return { label: \"long-wait appointments\", rate: noShow.no_show_rate || 0 };\n  }\n\n  const highest = buckets.reduce(\n    (max, current) => (current[1] > max[1] ? current : max),\n    buckets[0]\n  );\n\n  return { label: highest[0], rate: highest[1] };\n}\n\nfunction getNoShowPersona(snapshot) {\n  const highestRiskBucket = getHighestRiskLeadBucket(snapshot.noShow);\n\n  return {\n    bucket: highestRiskBucket.label,\n    bucketRate: highestRiskBucket.rate,\n    smsCoverage: snapshot.noShow.sms_coverage,\n    avgLeadDays: snapshot.noShow.avg_lead_days\n  };\n}\n\nfunction normalizeText(text) {\n  return text\n    .toLowerCase()\n    .replace(/[^a-z0-9\\s-]/g, \" \")\n    .replace(/\\s+/g, \" \")\n    .trim();\n}\n\nfunction getTopKpiSummary(selected) {\n  const strongest = selected.kpis\n    .filter((kpi) =>\n      getDesiredTrendDirection(kpi.label) === \"up\" ? kpi.delta >= 0 : kpi.delta <= 0\n    )\n    .slice(0, 2)\n    .map((kpi) => `${kpi.label}: ${kpi.value}`)\n    .join(\" | \");\n\n  return strongest || `${selected.kpis[0].label}: ${selected.kpis[0].value}`;\n}\n\nfunction getAnaReply(userText) {\n  const text = normalizeText(userText);\n  const snapshot = buildBusinessSnapshot();\n  const drop = findLargestJourneyDrop(snapshot.selected.journey);\n  const focusTeam = formatTeamName(snapshot.team);\n  const persona = getNoShowPersona(snapshot);\n  const topKpis = getTopKpiSummary(snapshot.selected);\n\n  const asksNoShowPatientType =\n    (text.includes(\"patient\") || text.includes(\"people\")) &&\n    (text.includes(\"likely\") || text.includes(\"risk\") || text.includes(\"high risk\")) &&\n    (text.includes(\"no show\") || text.includes(\"not show\") || text.includes(\"miss appointment\"));\n\n  if (asksNoShowPatientType) {\n    return `That’s a very good question. From this data, the highest-risk patient pattern is behavioral: people booked ${persona.bucket} in advance show the highest no-show risk at ${toPct(persona.bucketRate)}. Longer wait windows create more schedule conflicts, motivation drops over time, and reminder coverage is still only ${toPct(persona.smsCoverage)}. So the riskiest profile here is long-lead appointments plus weaker reminder reach, not one specific diagnosis group.`;\n  }\n\n  if (text.includes(\"why\") && (text.includes(\"drop\") || text.includes(\"leak\") || text.includes(\"conversion\"))) {\n    return `If we look at the funnel, the main leak is ${drop.from} → ${drop.to}. Usually this is where intent is still high but follow-through gets harder because of timing friction, unanswered reminders, or scheduling delays. I’d treat this as an operations gap more than a demand problem.`;\n  }\n\n  if (text.includes(\"priority\") || text.includes(\"first\") || text.includes(\"where should\")) {\n    return `If you want the highest-impact first move, focus on ${drop.from} → ${drop.to}. It’s your largest drop with ${drop.drop} patients lost. A focused reminder and same-day outreach sequence here will usually outperform broad campaigns.`;\n  }\n\n  if (text.includes(\"30 days\") || text.includes(\"next month\") || text.includes(\"action plan\")) {\n    return `Here’s a practical 30-day plan: Week 1, flag all ${persona.bucket} bookings as high-risk and add 2-step reminders. Week 2, escalate non-confirmed appointments to a call queue. Week 3, test one script variation by team. Week 4, review ${snapshot.northStarKpi} plus no-show trend and keep only what improved outcomes.`;\n  }\n\n  if (text.includes(\"scenario\") || text.includes(\"current\") || text.includes(\"status\") || text.includes(\"how are we doing\")) {\n    return `In the ${snapshot.timeframe} ${focusTeam} view, the target is ${snapshot.selected.goal}. Biggest funnel gap is ${drop.from} → ${drop.to} with ${drop.conversion}% conversion, and no-show baseline is ${snapshot.noShowRate}%. Quick pulse: solid momentum, but fixing that stage should unlock the clearest gains.`;\n  }\n\n  if (text.includes(\"strategy\") || text.includes(\"strategies\") || text.includes(\"plan\") || text.includes(\"improve\") || text.includes(\"help\")) {\n    return `I’d keep this simple and practical: first, defend the ${drop.from} → ${drop.to} stage with tighter reminder cadences; second, give long-lead bookings averaging ${snapshot.noShow.avg_lead_days.toFixed(1)} days extra confirmation touches; third, run a weekly checkpoint on ${snapshot.northStarKpi}. That gives fast learning without overwhelming the team.`;\n  }\n\n  if (text.includes(\"no show\") || text.includes(\"attendance\")) {\n    return `Current no-show baseline is ${snapshot.noShowRate}%. The strongest signal is lead time: ${persona.bucket} has the highest risk at ${toPct(persona.bucketRate)}. Reminder coverage is ${toPct(persona.smsCoverage)}, so the most practical lever is increasing reminder intensity for long-wait bookings first.`;\n  }\n\n  if (text.includes(\"satisfaction\") || text.includes(\"experience\") || text.includes(\"csat\")) {\n    return `On patient experience, satisfaction is being pulled by severity and anxiety signals in your model. The practical move is pairing clinical follow-up with expectation-setting and reassurance scripts for higher-acuity patients so experience improves alongside outcomes.`;\n  }\n\n  if (text.includes(\"retention\") || text.includes(\"growth\") || text.includes(\"kpi\")) {\n    return `To improve retention and growth without overcomplicating things, fix the biggest conversion gap first at ${drop.from} → ${drop.to}, then track one leading KPI weekly. Right now your strongest KPI pulse is ${topKpis}.`;\n  }\n\n  return `I can help with practical planning, no-show risk, funnel leaks, 30-day actions, and KPI priorities. Ask me something like “What should we prioritize first?” or “Give me a 30-day plan for this team.”`;\n}\n\nfunction addAnaMessage(text, role = \"bot\") {\n  if (!anaMessagesEl) return null;\n\n  const bubble = document.createElement(\"div\");\n  bubble.className = `ana-bubble ${role}`;\n  bubble.textContent = text;\n  anaMessagesEl.appendChild(bubble);\n  anaMessagesEl.scrollTop = anaMessagesEl.scrollHeight;\n  return bubble;\n}\n\nfunction initAna() {\n  if (!anaToggleEl || !anaPanelEl || !anaFormEl || !anaInputEl) return;\n\n  addAnaMessage(\n    \"Hi, I’m Ana 👋 I’m here to help you make sense of the business quickly — ask me what’s happening, why it might be happening, and what we should do next.\"\n  );\n\n  anaToggleEl.addEventListener(\"click\", () => {\n    const isOpen = !anaPanelEl.hidden;\n    anaPanelEl.hidden = isOpen;\n    anaToggleEl.setAttribute(\"aria-expanded\", String(!isOpen));\n    if (!isOpen) anaInputEl.focus();\n  });\n\n  anaFormEl.addEventListener(\"submit\", async (event) => {\n    event.preventDefault();\n    const userText = anaInputEl.value.trim();\n    if (!userText) return;\n\n    addAnaMessage(userText, \"user\");\n    anaFormEl.reset();\n\n    const thinkingBubble = addAnaMessage(\"Ana is thinking…\", \"thinking\");\n    const pause = 900 + Math.floor(Math.random() * 900);\n    await new Promise((resolve) => setTimeout(resolve, pause));\n\n    if (thinkingBubble?.parentNode) {\n      thinkingBubble.remove();\n    }\n\n    addAnaMessage(getAnaReply(userText), \"bot\");\n  });\n}\n\nasync function loadEngagementData() {\n  try {\n    const response = await fetch(\"outputs/engagement_metrics.json\");\n    if (!response.ok) return;\n\n    const remote = await response.json();\n    if (remote?.no_show && remote?.satisfaction) {\n      engagementData = remote;\n      render();\n      renderEngagement();\n    }\n  } catch (error) {\n    console.warn(\"Using fallback engagement data.\", error);\n  }\n}\n\n[timeframeEl, teamEl].forEach((el) => {\n  el.addEventListener(\"change\", render);\n});\n\nrender();\nrenderEngagement();\ninitAna();\nloadEngagementData();\nEOF\nnode --check /tmp/test_script.js"],"timeout":300000}
