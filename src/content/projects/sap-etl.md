---
title: SAP Extraction & Transformation
folder: data-dashboards
type: ETL
order: 5
summary: Decoding raw SAP codes into clean product and customer data — the base every report is built on.
stack: [SAP ERP, Excel, Google Sheets]
tags: [etl]
---

## The problem

SAP exports came as numeric codes for products, customers and delivery centres — unreadable without lookups.

## What I built

A repeatable clean-up that pulls raw data from SAP, decodes codes into readable names and joins order data with customer master data and delivery centres. This dataset feeds every dashboard in this folder.
