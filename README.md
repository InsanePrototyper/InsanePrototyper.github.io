# Personal site

My personal website. Static, no backend, hosted free on GitHub Pages.

Live at https://insaneprototyper.github.io

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output goes to dist/
npm run preview  # preview the production build
```

## How to update things

Most edits happen in two places.

**Personal info, nav, social links:** `src/consts.ts`

**Content lives in plain data files:**
- Projects: `src/data/projects.ts`
- Reading list: `src/data/books.ts`
- Work history: `src/data/experience.ts`

**Write a blog post:** drop a Markdown file in `src/content/blog/`. Front matter:

```md
---
title: "Post title"
description: "One line shown in the list and search results."
date: 2026-06-16
tags: ["tag1", "tag2"]
draft: false
---

Body goes here.
```

Set `draft: true` to keep a post hidden from the live site.

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy.yml`
builds the site and publishes it to GitHub Pages. Nothing else to do.

One time setup on GitHub: repo Settings, Pages, set Source to "GitHub Actions".

## Stack

Astro, plain CSS, deployed to GitHub Pages.
