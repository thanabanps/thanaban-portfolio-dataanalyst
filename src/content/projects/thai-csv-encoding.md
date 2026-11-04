---
title: Thai CSV Encoding Fix
folder: ai-automation
type: DATA CLEAN-UP
order: 3
summary: Fixing garbled Thai text in exported CSV and Excel files.
stack: [Python]
builtWith: Claude
tags: [clean-up]
---

## The problem

Thai text in system exports came out as unreadable characters when opened in Excel.

## What I built

A fix that converts files from CP874 to UTF-8 with BOM, so Thai text displays correctly every time.
