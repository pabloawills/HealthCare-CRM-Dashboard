const data = {
  monthly: {
    all: {
      kpis: [
        { label: "New patients", value: 184, delta: 12 },
        { label: "Follow-up completion", value: "88%", delta: 6.4 },
        { label: "No-show rate", value: "9%", delta: -2.1 },
        { label: "Satisfaction score", value: "4.7/5", delta: 0.3 }
      ],
      trend: [63, 68, 72, 76, 84, 88],
      story:
        "Acquisition and retention are improving together. Faster follow-up reminders reduced no-shows while patient satisfaction increased month-over-month."
    },
    "care-coordination": {
      kpis: [
        { label: "Care plans updated", value: 132, delta: 14 },
        { label: "Medication adherence", value: "81%", delta: 4.2 },
        { label: "Readmission risk", value: "7%", delta: -1.4 },
        { label: "Patient trust score", value: "4.8/5", delta: 0.2 }
      ],
      trend: [52, 58, 62, 67, 74, 81],
      story:
        "Care coordination is preventing downstream risk. Consistent care plan updates correlate with stronger adherence and lower readmission risk."
    },
    outreach: {
      kpis: [
        { label: "Outreach campaigns", value: 24, delta: 7 },
        { label: "Response rate", value: "46%", delta: 5.1 },
        { label: "Lead-to-visit conversion", value: "31%", delta: 3.4 },
        { label: "First-visit NPS", value: "59", delta: 5 }
      ],
      trend: [21, 24, 28, 32, 39, 46],
      story:
        "Outreach performance is translating into visits. Response improvements are feeding conversion and lifting early patient sentiment."
    },
    support: {
      kpis: [
        { label: "Open support tickets", value: 41, delta: -9 },
        { label: "Avg. resolution time", value: "6.1h", delta: -1.3 },
        { label: "Self-service usage", value: "38%", delta: 8.2 },
        { label: "Support CSAT", value: "93%", delta: 2.4 }
      ],
      trend: [17, 21, 27, 30, 34, 38],
      story:
        "Support workload is healthier. Self-service adoption reduced ticket volume and let the team resolve complex cases faster."
    }
  },
  quarterly: {
    all: {
      kpis: [
        { label: "New patients", value: 542, delta: 18 },
        { label: "Follow-up completion", value: "86%", delta: 8.8 },
        { label: "No-show rate", value: "11%", delta: -3.4 },
        { label: "Satisfaction score", value: "4.6/5", delta: 0.5 }
      ],
      trend: [55, 61, 69, 74],
      story:
        "Quarterly performance shows compounding gains. Better outreach quality and proactive reminders are improving both continuity and experience."
    },
    "care-coordination": {
      kpis: [
        { label: "Care plans updated", value: 403, delta: 19 },
        { label: "Medication adherence", value: "79%", delta: 6.7 },
        { label: "Readmission risk", value: "8%", delta: -2.5 },
        { label: "Patient trust score", value: "4.7/5", delta: 0.4 }
      ],
      trend: [48, 57, 66, 79],
      story:
        "Across the quarter, care coordination became a leading indicator for outcomes. Adherence rose as high-risk gaps were closed earlier."
    },
    outreach: {
      kpis: [
        { label: "Outreach campaigns", value: 73, delta: 13 },
        { label: "Response rate", value: "43%", delta: 7.2 },
        { label: "Lead-to-visit conversion", value: "29%", delta: 4.1 },
        { label: "First-visit NPS", value: "56", delta: 7 }
      ],
      trend: [18, 27, 35, 43],
      story:
        "The outreach story is consistent: stronger campaign relevance drives responses, which then lifts conversions and first-visit loyalty."
    },
    support: {
      kpis: [
        { label: "Open support tickets", value: 126, delta: -15 },
        { label: "Avg. resolution time", value: "6.5h", delta: -2.2 },
        { label: "Self-service usage", value: "34%", delta: 10.4 },
        { label: "Support CSAT", value: "91%", delta: 3.7 }
      ],
      trend: [14, 21, 27, 34],
      story:
        "Support systems are scaling. Digital self-service absorbed routine volume while agent quality kept satisfaction trending upward."
    }
  }
};

const timeframeEl = document.getElementById("timeframe");
const teamEl = document.getElementById("team");
const kpiGrid = document.getElementById("kpiGrid");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const chartEl = document.getElementById("chart");

function render() {
  const timeframe = timeframeEl.value;
  const team = teamEl.value;
  const selected = data[timeframe][team];

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

  storyTitle.textContent = `Narrative: ${team === "all" ? "Cross-team view" : team.replace("-", " ")}`;
  storyText.textContent = selected.story;

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
