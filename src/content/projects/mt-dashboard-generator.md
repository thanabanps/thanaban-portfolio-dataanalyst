---
title: MT Dashboard Generator
folder: ai-tools
type: HTML · SHEETJS
order: 1
featured: true
summary: Drop in an Excel file, get a full dashboard. Everything is processed in the browser — raw data never leaves the machine.
role: Solo — design to build
stack: [JavaScript, SheetJS, Chart.js]
builtWith: Claude (AI pair)
tags: [dashboard, privacy]
---

## The problem

Building a dashboard meant sending data through a script someone had to run. Teammates needed a way to refresh it themselves — without the raw sales data ever leaving their machine.

## What I built

A standalone tool: choose an Excel export, and it reads, cleans and turns it into a dashboard right in the browser.

## How it works

SheetJS parses the Excel file client-side. Nothing is uploaded anywhere, so it is safe to use with confidential data.
