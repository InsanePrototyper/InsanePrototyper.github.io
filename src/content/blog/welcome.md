---
title: "Why I built this site"
description: "A small static site for my work, projects, writing, and reading. No backend, nothing to maintain."
date: 2026-06-16
tags: ["meta", "web"]
---

I wanted one place that is mine. Not a feed and not a platform. Somewhere to keep
my work, the projects I am building, the books I am reading, and the things I am
figuring out along the way.

So this is it. It is a static site. Plain HTML and CSS, served by GitHub Pages,
and rebuilt every time I push. There is no server and no database, so there is
nothing for me to keep alive.

Here is how it works:

- Astro builds the pages from Markdown and components.
- GitHub Actions rebuilds the site on every push.
- GitHub Pages serves it for free over HTTPS.

To write a post I drop a Markdown file into a folder and push. That is the whole
workflow. The point was to make it easy enough that I actually do it.

More soon.
