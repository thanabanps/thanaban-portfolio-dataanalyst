---
title: Daily Order Dashboard
folder: data-dashboards
type: HTML · SHEETJS
order: 4
summary: Upload the order export and see today's orders by delivery date, customer and SKU — so the warehouse can plan ahead.
stack: [JavaScript, SheetJS, Chart.js]
builtWith: Claude (AI pair)
tags: [dashboard, generator, logistics]
cover: projects/daily-order-summary/cover.webp
coverCaption: "Daily summary — delivery calendar, SKU ranking, customer share"
demo: demos/daily-order-generator.html
sample: demos/sample-sales-data.xlsx
---

## The problem

The warehouse team couldn't see upcoming shipment volumes early enough to plan staff and space.

## What I built

A generator that reads the `Order` sheet and builds a daily summary for any date in the file:

- **Delivery calendar** — each delivery day shaded by number of POs, with a breakdown by customer.
- **SKU ranking** — top products by value, with which customers ordered them.
- **Customer share** and a **10-day order trend** against the month's daily average.

## How it works

SheetJS finds the header row automatically, groups order lines by created date, delivery date, customer and SKU, and renders the dashboard in the browser. Pick another date from the list to see that day instead.
