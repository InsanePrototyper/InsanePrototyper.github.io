---
title: "Notes on building Graph RAG that actually answers"
description: "A few things I learned moving from plain vector RAG to LLM-generated queries over a graph."
date: 2026-06-10
tags: ["ai", "rag", "graph"]
draft: true
---

This is a draft. Replace it with the real version or delete it.

Plain vector search gets you most of the way and then stops. The questions it
struggles with are the relational ones. Asking which clauses in one document
contradict a policy in another is not really a similarity problem, so similarity
search does a poor job of it.

A few things that helped when I moved toward a graph approach:

1. Let the model write the query instead of only reading chunks. Generating a
   query against a typed graph gives you something you can read and test.
2. Keep the schema small and opinionated. The tighter the graph schema, the
   better the generated queries tend to be.
3. Build the evals first. A good eval set caught more regressions than any amount
   of prompt tuning did.

I will write this up properly later.
