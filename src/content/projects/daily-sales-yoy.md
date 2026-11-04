---
title: Daily Sales YoY Report
folder: data-dashboards
type: HTML · JS
order: 3
summary: Day-by-day billing against the same point last year and the monthly target, so gaps show up before month-end — not after.
stack: [JavaScript, Chart.js]
tags: [dashboard]
cover: projects/daily-sales-yoy/cover.webp
gallery:
  - { src: projects/daily-sales-yoy/daily.webp, caption: "Switch from cumulative to daily billing" }
demo: demos/daily-sales-yoy.html
---

## The problem

By the time the monthly report arrived, it was too late to act on a weak month.

## What I built

- **4 KPI cards** — total orders, billed amount, billing rate and value still to bill.
- **Cumulative trend** — this month against the same month last year, with a marker on the latest day. Toggle to daily view.
- **Target tracker** — progress toward the monthly target for both years, with the YoY gap.
- **Top 5 customers** and **Top 20 SKUs** by billed value.

## How it works

Generated in one click by the [Sales Dashboard Generator](../../ai-tools/sales-dashboard-generator/) from the daily SAP export.
