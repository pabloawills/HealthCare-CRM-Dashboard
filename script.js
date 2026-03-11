const baseData = {
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
  }
};

const timeframeConfig = {
  daily: { factor: 0.22, points: 7, labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  weekly: { factor: 0.72, points: 8, labels: null },
  monthly: { factor: 1, points: 6, labels: null },
  quarterly: { factor: 3.2, points: 4, labels: ["Q1", "Q2", "Q3", "Q4"] },
  annually: { factor: 12.2, points: 5, labels: ["2022", "2023", "2024", "2025", "2026"] }
};

function scaledValue(raw, factor) {
  if (typeof raw === "number") return Math.max(1, Math.round(raw * factor));
  const number = parseFloat(String(raw));
  if (Number.isNaN(number)) return raw;

  if (String(raw).includes("/5")) {
    const max = 5;
    const adjusted = Math.min(max, Math.max(1, number + (factor - 1) * 0.2));
    return `${adjusted.toFixed(1)}/5`;
  }

  if (String(raw).includes("h")) {
    const adjusted = Math.max(1, number - (factor - 1) * 0.3);
    return `${adjusted.toFixed(1)}h`;
  }

  if (String(raw).includes("%")) {
    const adjusted = Math.min(99, Math.max(2, number + (factor - 1) * 1.8));
    return `${Math.round(adjusted)}%`;
  }

  return String(Math.round(number * factor));
}

function buildTimeframeData() {
  const out = {};
  Object.entries(timeframeConfig).forEach(([name, config]) => {
    out[name] = {};
    Object.entries(baseData.monthly).forEach(([team, entry]) => {
      const labels = config.labels || Array.from({ length: config.points }, (_, i) => `${name[0].toUpperCase()}${i + 1}`);
      out[name][team] = {
        goal: entry.goal,
        kpis: entry.kpis.map((kpi) => ({
          ...kpi,
          value: scaledValue(kpi.value, config.factor),
          delta: Number((kpi.delta * (1 + (config.factor - 1) * 0.08)).toFixed(1))
        })),
        journey: entry.journey.map((step) => ({
          ...step,
          value: Math.max(1, Math.round(step.value * config.factor))
        })),
        trend: Array.from({ length: config.points }, (_, i) => {
          const seed = entry.trend[i % entry.trend.length];
          const variance = (i % 2 === 0 ? 1 : -1) * (config.factor > 1 ? 2 : 1.2);
          return Math.max(5, Math.min(99, Math.round(seed + (config.factor - 1) * 2 + variance)));
        }),
        labels,
        story: `${entry.story} (${name.toUpperCase()} view generated from normalized records.)`,
        actions: entry.actions
      };
    });
  });
  return out;
}

const data = buildTimeframeData();

const state = {
  timeframe: "daily",
  chartMode: "bar",
  team: "all",
  selectedPoint: null
};

const timeButtons = [...document.querySelectorAll(".time-btn")];
const teamEl = document.getElementById("team");
const chartModeEl = document.getElementById("chartMode");
const kpiGrid = document.getElementById("kpiGrid");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const chartEl = document.getElementById("chart");
const actionsEl = document.getElementById("actions");
const journeyEl = document.getElementById("journey");
const goalProgress = document.getElementById("goalProgress");
const chartDetail = document.getElementById("chartDetail");
const tabButtons = [...document.querySelectorAll(".tab-btn")];
const tabPanels = [...document.querySelectorAll(".tab-content")];
const rawDataEl = document.getElementById("rawData");
const cleanDataEl = document.getElementById("cleanData");
const aiSummaryEl = document.getElementById("aiSummary");
const aiHighlightsEl = document.getElementById("aiHighlights");

function formatTeamName(team) {
  if (team === "all") return "Cross-team view";
  return team
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanIncomingData(selected) {
  const rawRecords = [
    { patient_id: "  1042 ", sentiment: "high", follow_up_rate: "88%", no_show: "09%", timestamp: "2026-06-14T10:11:00Z" },
    { patient_id: "1043", sentiment: "  medium ", follow_up_rate: "86%", no_show: "11%", timestamp: "2026-06-15T14:22:00Z" },
    { patient_id: "1044", sentiment: "High", follow_up_rate: "90%", no_show: "8%", timestamp: "2026-06-16T16:10:00Z" }
  ];

  const cleaned = rawRecords.map((record) => ({
    patientId: record.patient_id.trim(),
    sentiment: record.sentiment.trim().toLowerCase(),
    followUpRate: Number(record.follow_up_rate.replace("%", "")),
    noShowRate: Number(record.no_show.replace("%", "")),
    day: new Date(record.timestamp).toISOString().slice(0, 10)
  }));

  const avgFollowUp = cleaned.reduce((sum, r) => sum + r.followUpRate, 0) / cleaned.length;
  const avgNoShow = cleaned.reduce((sum, r) => sum + r.noShowRate, 0) / cleaned.length;

  const highlights = [
    `AI agent found ${cleaned.length} valid records after auto-cleaning whitespace and case format issues.`,
    `Average follow-up from incoming stream is ${avgFollowUp.toFixed(1)}%, matching dashboard trend direction for ${formatTeamName(state.team)}.`,
    `Average no-show is ${avgNoShow.toFixed(1)}%; recommendation engine prioritizes reminder cadence where no-show exceeds 10%.`,
    `Predicted next ${state.timeframe} engagement: ${selected.trend[selected.trend.length - 1]}% ±2% confidence band.`
  ];

  return { rawRecords, cleaned, highlights };
}

function render() {
  const selected = data[state.timeframe][state.team];
  goalProgress.textContent = selected.goal;

  kpiGrid.innerHTML = "";
  selected.kpis.forEach((kpi) => {
    const card = document.createElement("article");
    card.className = "kpi-card";
    card.innerHTML = `
      <h3>${kpi.label}</h3>
      <div class="kpi-value">${kpi.value}</div>
      <div class="kpi-delta ${kpi.delta >= 0 ? "up" : "down"}">
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

  storyTitle.textContent = `Narrative: ${formatTeamName(state.team)}`;
  storyText.textContent = selected.story;

  actionsEl.innerHTML = "";
  selected.actions.forEach((action) => {
    const li = document.createElement("li");
    li.textContent = action;
    actionsEl.appendChild(li);
  });

  renderChart(selected);

  const aiData = cleanIncomingData(selected);
  rawDataEl.textContent = JSON.stringify(aiData.rawRecords, null, 2);
  cleanDataEl.textContent = JSON.stringify(aiData.cleaned, null, 2);
  aiSummaryEl.textContent = `The AI agent ingests additional patient interaction data, cleans malformed fields, and aligns findings with the ${state.timeframe} ${formatTeamName(state.team)} story.`;
  aiHighlightsEl.innerHTML = "";
  aiData.highlights.forEach((highlight) => {
    const li = document.createElement("li");
    li.textContent = highlight;
    aiHighlightsEl.appendChild(li);
  });
}

function renderChart(selected) {
  chartEl.innerHTML = "";
  const max = Math.max(...selected.trend);

  selected.trend.forEach((value, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "bar-wrap";
    const pct = Math.round((value / max) * 100);
    const label = selected.labels[idx] || `${state.timeframe[0].toUpperCase()}${idx + 1}`;

    const point = document.createElement("button");
    point.className = state.chartMode === "line" ? "point" : "bar";
    point.style.height = `${Math.max(12, pct)}%`;
    point.type = "button";
    point.title = `${label}: ${value}%`;
    point.setAttribute("aria-label", `${label} engagement ${value}%`);

    point.addEventListener("click", () => {
      state.selectedPoint = idx;
      renderChart(selected);
      chartDetail.textContent = `${label}: ${value}% engagement for ${formatTeamName(state.team)} (${state.timeframe}).`;
    });

    if (state.selectedPoint === idx) point.classList.add("active");

    const text = document.createElement("div");
    text.className = "bar-label";
    text.textContent = label;

    wrap.appendChild(point);
    wrap.appendChild(text);
    chartEl.appendChild(wrap);
  });
}

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.timeframe = button.dataset.timeframe;
    state.selectedPoint = null;
    timeButtons.forEach((b) => b.classList.toggle("active", b === button));
    render();
  });
});

teamEl.addEventListener("change", () => {
  state.team = teamEl.value;
  state.selectedPoint = null;
  render();
});

chartModeEl.addEventListener("change", () => {
  state.chartMode = chartModeEl.value;
  state.selectedPoint = null;
  render();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTab = button.dataset.tab;
    tabButtons.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === nextTab);
    });
  });
});

render();
