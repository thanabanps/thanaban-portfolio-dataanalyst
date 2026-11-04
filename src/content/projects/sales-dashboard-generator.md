---
title: Sales Dashboard Generator
folder: ai-tools
type: HTML · SHEETJS
order: 1
featured: true
summary: Drop in the SAP Excel export, get a ready-to-share sales dashboard. Everything runs in the browser — raw data never leaves the machine.
role: Solo — design to build
stack: [JavaScript, SheetJS, Chart.js]
builtWith: Claude (AI pair)
tags: [generator, dashboard, privacy]
cover: projects/sales-dashboard-generator/cover.webp
gallery:
  - { src: projects/sales-dashboard-generator/empty.webp, caption: "Before: upload the export and the tool checks every sheet it needs" }
  - { src: projects/daily-sales-yoy/cover.webp, caption: "The dashboard it generates" }
demo: demos/sales-dashboard-generator.html
sample: demos/sample-sales-data.xlsx
---

## The problem

Refreshing the daily sales dashboard meant someone had to run a script on the raw export. Teammates needed to do it themselves — without the confidential sales data ever being uploaded anywhere.

## What I built

A single-page tool with three steps:

- **Upload** the Excel export (drag and drop).
- **Check** — it confirms the four sheets it needs (`Order`, `PO`, `Bill 2026`, `Bill 2025`) are there and logs what it found.
- **Generate** — it builds the [Daily Sales YoY dashboard](../../data-dashboards/daily-sales-yoy/), shows a live preview and lets you download it as one HTML file.

## How it works

SheetJS reads the workbook client-side. The tool detects the month from the billing dates, totals orders and bills, builds day-by-day cumulative series for this year and last, ranks customers and SKUs, then writes a self-contained HTML dashboard with Chart.js. No server, no upload.
