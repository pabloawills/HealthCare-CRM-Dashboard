# PulseCare Healthcare CRM Dashboard

A lightweight, user-friendly healthcare CRM dashboard built from scratch to tell a clear KPI story.

## Features

- Narrative-first KPI cards for acquisition, engagement, and outcomes
- Team and timeframe filters to switch business context quickly
- Patient journey pipeline view to show conversion through care stages
- Action recommendations that turn KPI insights into next steps
- Accessible layout with semantic regions and a skip link
- Lightweight trend visualization without external dependencies

## Run locally

Because this is a static app, you can open `index.html` directly, or run a tiny local server:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Temporary public preview URL (optional)

You can expose your local instance publicly using LocalTunnel:

```bash
npx localtunnel --port 4173
```

This provides a temporary `https://*.loca.lt` URL you can share.
