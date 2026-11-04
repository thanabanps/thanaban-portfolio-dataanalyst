---
title: MT Sales Dashboard
folder: data-dashboards
type: HTML · PYTHON
order: 1
featured: true
summary: A single offline HTML file that turns years of SAP sales data into an interactive dashboard — no server, no install.
role: Solo — design to build
stack: [Python, JavaScript, Chart.js]
builtWith: Claude (AI pair)
tags: [dashboard, python]
cover: projects/mt-sales-dashboard/cover.webp
coverCaption: "Overview — KPIs, monthly trend, brand share and ranking"
gallery:
  - { src: projects/mt-sales-dashboard/yoy.webp, caption: "Year-over-year comparison — by year, quarter or month" }
  - { src: projects/mt-sales-dashboard/category.webp, caption: "Category → brand → SKU pivot" }
demo: demos/mt-sales-dashboard.html
stats:
  - { value: "57K+", label: "Rows of source data" }
  - { value: "34", label: "Months of history" }
  - { value: "1", label: "File, works offline" }
---

## The problem

The sales team waited on Excel reports to answer simple questions — how are we doing against last year, which customers are slipping, which SKUs are growing. The data lived in raw SAP exports full of numeric codes, so every question meant another manual pivot.

## What I built

- **Overview** — KPI cards, monthly trend, brand share and a ranking table by SKU, customer or brand.
- **YoY comparison** — any year, quarter or month against the same period last year.
- **Category pivot** — drill from category to brand to SKU.
- **Filters everywhere** — customers, brands, date range and product search, plus CSV export and a dark mode.

Later internal versions added a radar comparison and a Thailand province map.

## How it works

A Python generator script (`gen.py`) cleans the SAP export, aggregates it, compresses it with gzip + base64 and embeds it in a single HTML file — fonts and Chart.js included. The browser decompresses it on load with the native `DecompressionStream` API, so the whole dashboard runs offline from one file anyone can open.
