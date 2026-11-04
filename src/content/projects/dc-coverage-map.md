---
title: DC Shipment Map
folder: ai-tools
type: MAP · SHEETJS
order: 3
featured: false
summary: Which distribution centre did every product go to? Billing data joined to the ship-to master and plotted on a map of Thailand.
role: Solo — design to build
stack: [JavaScript, SheetJS, SVG]
builtWith: Claude (AI pair)
tags: [map, logistics]
cover: projects/dc-coverage-map/cover.webp
gallery:
  - { src: projects/dc-coverage-map/table.webp, caption: "Table view — every line, sortable" }
  - { src: projects/dc-coverage-map/upload.webp, caption: "Upload version — drop in the Excel export" }
  - { src: projects/dc-coverage-map/analyzer.webp, caption: "Upload version — the same analysis, built in the browser" }
demo: demos/dc-shipment-map.html
stats:
  - { value: "77", label: "Provinces on the map" }
  - { value: "928", label: "Districts geocoded" }
  - { value: "0", label: "Servers needed" }
---

## The problem

Bills only say a ship-to code. To answer "how much went to which DC, and where is it?", someone had to look up each code in the master list and work out the location by hand.

## What I built

- **Map** — every DC and branch as a pin on a Thailand map, coloured by retail chain. Click a region to zoom.
- **DC → PO → product** — click a DC to see its POs, then each PO's products, boxes and value.
- **Table view** — every billed line, sortable and searchable, filtered by chain.
- **Upload version** — [open the analyzer](../../../demos/shipment-analyzer.html) and drop in the [sample Excel](../../../demos/sample-sales-data.xlsx) to build the same view from scratch.

## How it works

The ship-to master gives each code a chain and an address. The tool reads the province, district and sub-district out of the Thai address text and places the pin at that district's centroid — no geocoding service needed. SheetJS reads the Excel in the browser, so the data never leaves the machine.
