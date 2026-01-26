---
title: "Portfolio Website"
slug: "portfolio"
thumbnail: "/images/portfolio_website_thumbnail.png"
heroImage: "/images/portfolio_website_thumbnail.png"
tagline: "A portfolio website for me to showcase my projects and skills."
status: "Completed"
date: "2026-1-25"
techStack:
  - "Next.js"
  - "React"
  - "Tailwind CSS"
  - "Git"
links:
  demo: "https://mohamed-a-portfolio.vercel.app/"
  repo: "https://github.com/mohameds-dev/portfolio"
---

## Overview
This portfolio website showcases my projects and technical skills. It's built with Next.js using static site generation for fast load times and SEO. The site features detailed project pages with markdown-driven content, a categorized skills section, and an updates feed. All project content is managed through markdown files, making it easy to add new projects or update existing ones without touching the codebase.

## Key Features
- **Markdown-Driven Project Pages:** Each project has its own markdown file with frontmatter metadata. The content supports HTML elements including embedded videos, making it easy to showcase project demos directly in the project descriptions.
- **Static Site Generation:** All project pages are pre-rendered at build time using `generateStaticParams()`. Routes are generated from a JSON file, and markdown content is parsed server-side with `gray-matter` for frontmatter extraction.
- **Skills Integration:** Projects display associated technologies as skill badges, automatically linked to a categorized skills section that groups technologies by type (languages, frameworks, tools, etc.).
- **Updates Feed:** A latest update section on the homepage with a modal to view all updates. Updates support markdown content, images, and tags.
- **HTML Support in Markdown:** Uses `rehype-raw` to render HTML elements in markdown, with custom React components for video tags that include proper styling and responsive behavior.
- **Responsive Design:** Built with Tailwind CSS, fully responsive across mobile, tablet, and desktop. Dark mode automatically adapts to system preferences.

## Technical Challenge & Solution
**The Challenge:**
Setting up dynamic routes for project pages while keeping static generation. Next.js needs to know all routes at build time, but I wanted to load content from markdown files. Also needed to support HTML in markdown (like video tags) without breaking the markdown parser.

**The Solution:**
Used `generateStaticParams()` to read the projects JSON and generate all routes at build time. Markdown files are parsed with `gray-matter` to separate frontmatter from content. For HTML support, added `rehype-raw` plugin to `react-markdown` and created custom component handlers for video tags with proper Tailwind styling. The frontmatter can override project data from the JSON, so markdown files control the display while the JSON manages the project list and routing.

## Future Improvements
* **Image Optimization:** Replace standard `<img>` tags with Next.js `Image` component for automatic optimization and lazy loading.
* **Manual Dark Mode Toggle:** Add a theme switcher button in addition to system preference detection.
* **Blog Section:** Add a blog using the same markdown-based approach for technical posts.
