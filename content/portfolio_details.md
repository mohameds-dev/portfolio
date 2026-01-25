---
title: "Portfolio Website"
slug: "portfolio"
thumbnail: "/images/mo-hero-1.JPG"
heroImage: "/images/mo-hero-1.JPG"
tagline: "A portfolio website for me to showcase my projects and skills."
status: "Completed"
date: "2025-05-29"
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
This personal portfolio website serves as a central hub to demonstrate my software engineering capabilities and showcase my projects. Built with performance and accessibility in mind, it provides visitors with an interactive resume, a detailed breakdown of my technical skills, and direct access to my code repositories. The site helps bridge the gap between code and presentation, offering potential employers and collaborators a clear view of my development style.

## Key Features
* **Component-Based Architecture:** Utilizes reusable React components for project cards, skill badges, and layout sections to ensure code maintainability.
* **Responsive Design:** Fully adaptive UI built with Tailwind CSS that provides an optimal viewing experience across mobile, tablet, and desktop devices.
* **Static Site Generation:** Leverages Next.js App Router with static generation (`generateStaticParams`) to pre-render all project pages at build time, ensuring fast load times and SEO friendliness.
* **Markdown-Driven Content:** Project details are managed through markdown files with frontmatter, allowing for easy content updates while maintaining structured metadata for SEO.
* **System-Aware Dark Mode:** Automatically adapts to user's system theme preference using CSS media queries and Tailwind's dark mode utilities.

## Technical Challenge & Solution
**The Challenge:**
Implementing a dynamic routing system for project detail pages while maintaining static generation benefits. Each project needed its own route (`/project/[slug]`) with content loaded from markdown files, but Next.js requires explicit knowledge of all possible routes at build time for static generation.

**The Solution:**
I implemented `generateStaticParams()` to pre-generate all project routes at build time by reading from the projects JSON file. The markdown content is parsed server-side using `gray-matter` to extract frontmatter metadata and content, which is then passed to the page component. This approach combines the flexibility of markdown-based content management with the performance benefits of static site generation, ensuring all project pages are pre-rendered and optimized.

## Future Improvements
* **CMS Integration:** Connecting the project section to a Headless CMS (like Sanity or Strapi) to allow for easier content updates without code pushes.
* **Blog Section:** Adding a technical blog using Markdown/MDX to share knowledge and improve organic search visibility.
* **Manual Dark Mode Toggle:** Adding a user-controlled theme switcher in addition to the current system preference detection.
* **Image Optimization:** Migrating from standard `<img>` tags to Next.js `Image` component for automatic optimization, lazy loading, and modern format support.