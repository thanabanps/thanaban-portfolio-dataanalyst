---
title: Daily Sales YoY Report
folder: data-dashboards
type: HTML · JS
order: 3
summary: Day-by-day billing against the same point last year, so gaps show up before month-end — not after.
stack: [JavaScript, Chart.js]
tags: [dashboard]
---

## The problem

By the time the monthly report arrived, it was too late to act on a weak month.

## What I built

- **4 KPI cards** — total orders, billed amount, billing rate and pending.
- **Cumulative trend** — day-by-day running total for this year and last.
- **Top 5 accounts** and **Top 20 SKUs** by billing value.

## How it works

Updated daily from the order and billing export, so management can track progress inside the month.
