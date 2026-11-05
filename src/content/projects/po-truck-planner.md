---
title: PO → Truck Planner
folder: ai-tools
type: HTML · THREE.JS
order: 2
summary: Drop in a week of retailer PO files and get the trucks — cases, pallets, which warehouse loads what, a 3D load plan and the booking letter, in minutes.
role: Solo — design to build
stack: [JavaScript, three.js, SheetJS, JSZip]
builtWith: Claude (AI pair)
tags: [logistics, automation, xml]
cover: projects/po-truck-planner/cover.webp
coverCaption: "Trucks — POs grouped by warehouse → DC, with a 3D view of the load"
gallery:
  - { src: projects/po-truck-planner/import.webp, caption: "Import — read PO XML files, check totals, match unknown products" }
  - { src: projects/po-truck-planner/trucks.webp, caption: "Mixed POs — choose which warehouse loads them" }
  - { src: projects/po-truck-planner/polist.webp, caption: "All POs — ship dates, expiry, cases and assigned truck" }
  - { src: projects/po-truck-planner/master.webp, caption: "Product master — pieces per case, weight, retailer codes" }
  - { src: projects/po-truck-planner/settings.webp, caption: "Settings — pallets per truck, warehouses, DCs, booking letter" }
demo: demos/po-truck-planner.html
sample: demos/sample-po-xml.zip
stats:
  - { value: "XML", label: "Straight from the supplier portal" }
  - { value: "21–25", label: "Pallets per truck, auto-fitted" }
  - { value: "1 click", label: "Truck call sheet + booking letter" }
---

## The problem

Every order cycle, the retailer's supplier portal produces dozens of PO files. Someone had to add up the cases for each product, turn them into pallets, decide which of two warehouses loads what, fit it all into back-haul trucks per destination DC — and then type up the booking letter. By hand, in Excel, every time.

## What I built

- **Import** — drop in XML files, a folder or a .zip. Each PO is checked against its own totals, and products missing from the master are flagged with suggested matches.
- **Trucks** — POs are grouped by warehouse → DC and packed into trucks automatically, with a 3D view of each load (three.js). Move POs between trucks, change pickup dates, undo and redo.
- **All POs** — every order with ship date, expiry, cases, weight and the truck it's on.
- **Product master** — pieces per case and weight for every SKU, editable and importable from Excel.
- **Export** — one Excel file with the truck call sheet and the booking letter, ready to send.

## How it works

The tool parses the PO XML in the browser and matches each line to the product master by retailer code, barcode or — when neither matches — by a fuzzy score on the description. Cases become pallets using each product group's cases-per-pallet, and pallets are packed per lane up to 21 per truck, stretching to 25 only when that saves a whole truck. Everything runs in one offline HTML file.

In the demo, click **▶ ลองด้วย PO ตัวอย่าง** to load 14 simulated POs dated from today, or download the sample .zip and drop it in.
