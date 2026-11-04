# Thanaban Promsuan — Portfolio

A folder-style portfolio built with [Astro](https://astro.build). Live at
https://thanabanps.github.io/thanaban-portfolio-dataanalyst/

## Add a project

1. Create `src/content/projects/<project-name>.md` (copy an existing one).
2. Set `folder:` to one of the files in `src/content/folders/` (without `.md`).
3. Put screenshots in `public/projects/<project-name>/` and point `cover:` / `gallery:` at them.
4. Write the story under `## The problem`, `## What I built`, `## How it works`, `## Impact`.

Set `featured: true` to show it on the home page (first 3 are used), or `draft: true` to hide it.

## Add a folder (a new kind of work)

Create `src/content/folders/<folder-name>.md` with `title`, `order`, `color`, `icon`
(`chart`, `tool`, `gear`, `code`, `spark`, `pen`, `camera`, `box`) and `summary`.
It appears on the home page and gets its own page automatically.

## Personal details

Name, email, GitHub, LinkedIn and CV live in `src/site.ts`.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/thanaban-portfolio-dataanalyst/
npm run build    # output in dist/
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Data

All numbers and screenshots use simulated data. Nothing reflects any real company's figures.

See `CONTENT-TODO.md` for what still needs filling in.
