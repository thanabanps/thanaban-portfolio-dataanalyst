import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * FOLDERS — one Markdown file per folder in src/content/folders/.
 * Add a new file here and a new folder appears on the home page,
 * gets its own page at /work/<file-name>/, and is counted automatically.
 */
const folders = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/folders' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    /** Background colour of the folder card and page header. */
    color: z.string().default('#6FC2FF'),
    icon: z.enum(['chart', 'tool', 'gear', 'code', 'spark', 'pen', 'camera', 'box']).default('box'),
    summary: z.string(),
    /** Optional longer intro shown on the folder page. */
    intro: z.string().optional(),
  }),
});

/**
 * PROJECTS — one Markdown file per project in src/content/projects/.
 * `folder` must match a file name in src/content/folders/ (without .md).
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    folder: reference('folders'),
    summary: z.string(),
    /** Small label on the card, e.g. "LOOKER STUDIO" or "HTML · PYTHON". */
    type: z.string(),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    stack: z.array(z.string()).default([]),
    /** Used by the filter chips on the folder page. */
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    timeline: z.string().optional(),
    builtWith: z.string().optional(),
    /** Path under /public, e.g. "projects/mt-sales-dashboard/cover.webp". */
    cover: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

export const collections = { folders, projects };
