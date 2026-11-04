---
title: Delivery Planner
folder: ai-tools
type: HTML · PROTOTYPE
order: 2
summary: One screen for the logistics team to see every PO by delivery day, warehouse and store — and tick them off as they ship.
role: Solo — design to build
stack: [HTML, JavaScript]
builtWith: Claude (AI pair)
tags: [planning, logistics]
cover: projects/delivery-planner/cover.webp
coverCaption: "Board — one column per delivery day"
gallery:
  - { src: projects/delivery-planner/pivot.webp, caption: "Table — boxes per product per delivery day" }
  - { src: projects/delivery-planner/po.webp, caption: "By PO — every order with its items" }
  - { src: projects/delivery-planner/store.webp, caption: "By store — what each store gets on the day" }
demo: demos/delivery-planner.html
---

## The problem

Delivery plans lived in spreadsheets. The warehouse needed to know what ships when, from which warehouse, to which store — and what has already gone out.

## What I built

A planning prototype with four views of the same orders:

- **Board** — one column per delivery day, a card per PO with a shipped / pending toggle.
- **Table** — boxes per product per day, with totals.
- **By PO** — pick a day, see every order and its items.
- **By store** — pick a day, see what each store receives.

Filters for warehouse, store and status update the counts in the header as you click.

## How it works

A single HTML file with a Thai-language interface — no install, opens on any laptop. The demo runs on sample orders dated from today.
