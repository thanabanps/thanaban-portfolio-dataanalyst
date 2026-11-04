---
title: MT Sales Dashboard
folder: data-dashboards
type: HTML · PYTHON
order: 1
featured: true
summary: A single offline HTML file that turns 57K+ rows of sales data into interactive views — no server, no install.
role: Solo — design to build
stack: [Python, JavaScript, Chart.js]
builtWith: Claude (AI pair)
tags: [dashboard, python]
repo: https://github.com/thanabanps/mt-sales-dashboard
stats:
  - { value: "57K+", label: "Rows of sales data" }
  - { value: "5", label: "Interactive views" }
  - { value: "1", label: "File, works offline" }
---

## The problem

The sales team waited on Excel reports to answer simple questions — how are we doing against last year, which customers are slipping, which SKUs are growing. The data lived in raw SAP exports full of numeric codes, so every question meant another manual pivot.

## What I built

- **Overview** — KPI cards and the headline trend.
- **YoY comparison** — any period against last year, with a period selector.
- **Category pivot** — drill from category down to SKU.
- **Cumulative trends** — running totals to spot gaps before month-end.
- **Radar comparison** — compare SKUs, customers or brands, including a distribution-network score.
- **Province map** — a Thailand choropleth of sales by province.

## How it works

A Python generator script (`gen.py`) cleans the SAP export, compresses it with gzip + base64 and embeds it in a single HTML file. The browser decompresses it on load, so the whole dashboard runs offline from one file anyone can open.
