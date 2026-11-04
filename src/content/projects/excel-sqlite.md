---
title: Excel → SQLite Analytics
folder: data-dashboards
type: SQL
order: 8
summary: Excel data loaded into SQLite on Google Colab and explored through a browser-based SQL dashboard.
stack: [Python, Google Colab, SQLite, sql.js]
tags: [sql, python, etl]
---

## The problem

Excel was hitting its limits, and installing database software on a work laptop wasn't allowed.

## What I built

A workflow that loads Excel files into SQLite using Google Colab — no local install needed — plus a browser-based dashboard powered by `sql.js` that queries the database directly.
