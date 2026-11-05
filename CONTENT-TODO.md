# Content to fill in

Things the site still needs from you. Delete a line once it's done.

- `claude-for-data-guide.md` — add contents, format and how many people used it.
- `looker-sales-kpi.md` — make a demo copy of the Looker report on simulated data (CSV provided in chat), then add its share link as `demo:` and a screenshot as `cover:`.
- `online-channel-dashboard.md` — add stack, screenshots and details.
- `price-intelligence.md` — add the problem, stack, screenshots and details.

## Everywhere

- Screenshots, taken with **simulated data**. Done: MT Sales Dashboard, Sales Dashboard Generator, Daily Sales YoY, Daily Order Dashboard, Personal Taskboard, Delivery Planner, DC Shipment Map, PO → Truck Planner. Save as `public/projects/<project-file-name>/cover.webp` and set `cover:` in the project file. Extra shots go in `gallery:`.
- An **Impact** section (`## Impact`) for each project: who uses it, how often, what it replaced, time saved.
- `timeline:` for each project.
- `src/site.ts` — add your LinkedIn URL and CV file (put the PDF in `public/`).

## Demos

Live demos live in `public/demos/` and use simulated data only (fictional customers, brands and products).
Never copy a file with real data into `public/` — everything there is public.
