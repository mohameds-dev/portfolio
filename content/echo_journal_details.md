---
title: "Echo Journal"
slug: "echo-journal"
thumbnail: "/images/echo-journal.png"
heroImage: "/images/echo-journal.png"
tagline: "A serverless voice journaling app built with Cloudflare's bleeding-edge Durable Objects in Python."
status: "Completed"
date: "2026-01-07"
techStack:
  - "Cloudflare Workers"
  - "Cloudflare Durable Objects (Python)"
  - "Workers AI (Llama 3 & Whisper)"
  - "SQL Database"
  - "React"
links:
  demo: "https://echo-journal.mohameds-account.workers.dev/"
  repo: "https://github.com/mohameds-dev/cf_ai_echo_journal"
---

## Overview
Echo Journal is a serverless voice journaling application built as a prototype to explore Cloudflare's cutting-edge Durable Objects technology in Python—an extremely new feature that Cloudflare released. The application demonstrates how to leverage Durable Objects for fast, stateful serverless computing. Each user gets their own isolated Durable Object instance that handles voice transcription (Whisper), LLM processing (Llama), and SQL database operations all within a single object that's created on-demand. The app uses a no-sign-up approach where users are identified by a randomly generated ID stored in their browser's local storage, with automatic data deletion after 2 weeks of inactivity to ensure privacy.

## Key Features
* **Durable Objects Architecture:** Each user is assigned a unique Durable Object instance identified by a randomly generated ID stored in browser local storage. The object is created on-demand when first accessed and handles all user-specific operations in a single, fast, stateful serverless environment.

* **Integrated AI Processing:** The Durable Object consolidates Whisper for voice-to-text transcription and Llama 3 for LLM processing, along with SQL database operations, all within the same object instance for optimal performance and data locality.

* **Prompt Engineering & Context Management:** Implemented custom prompt engineering using a simple Ollama model to reduce hallucination while maintaining straightforward and direct execution. The prompts are designed to keep the AI focused on journaling, avoiding irrelevant subjects and gracefully redirecting users back to journaling when they digress to unsafe or off-topic subjects. The system maintains a running conversation context that remembers the full history of interactions, which is included and updated with every prompt to ensure coherent, context-aware responses.

* **Privacy-First Design:** No sign-up required and no personal information is stored. Each user's data is isolated in their own Durable Object, accessible only via their local storage ID. Automatic deletion after 2 weeks of inactivity ensures data doesn't persist indefinitely.

* **Serverless & Fast:** Leverages Cloudflare's edge network and Durable Objects' low-latency architecture to provide a responsive experience despite the complex AI processing happening server-side.

## Technical Challenge & Solution
**The Challenge:**
Working with Cloudflare's Durable Objects in Python required navigating extremely new and limited documentation, as this was a bleeding-edge feature at the time of development. The architecture needed to handle multiple AI operations (Whisper transcription, Llama processing) and database queries within a single Durable Object while maintaining fast response times. Additionally, implementing a no-sign-up system with automatic data cleanup required careful state management to track user activity and schedule deletions.

**The Solution:**
I architected the application so that each user's Durable Object acts as a self-contained unit, storing the user's unique ID, journal entries in SQL, and handling all AI processing within the same object instance. This design takes advantage of Durable Objects' fast, stateful nature, where data and processing logic live together, reducing network hops and latency. The local storage ID lookup pattern ensures users can return to their journal without authentication, while the 2-week inactivity timer is implemented within the Durable Object's state management, automatically cleaning up unused instances after two weeks of inactivity.

For the AI interaction layer, I implemented a running context system that maintains the full conversation history within the Durable Object's state. This context is appended to and updated with every user interaction, allowing the LLM to maintain coherent, context-aware responses throughout the journaling session. I also invested significant effort in prompt engineering, carefully crafting prompts for a simple Ollama model to minimize hallucination while ensuring direct, focused execution. The prompts are structured to keep responses relevant to journaling, filter out irrelevant topics, and gently redirect users back to journaling when conversations drift toward unsafe or inappropriate subjects. This approach demonstrates the power of Durable Objects for building fast, stateful serverless applications that would traditionally require separate services or databases.

## Future Improvements
* **Enhanced Data Persistence:** Add optional export functionality so users can download their journal entries before the automatic deletion period.
* **Sign up & Login:** Implement a secure sign up and login system, allowing users to optionally create accounts for persistent access across devices and improved user experience.
* **Tagging and Search:** Allow users to tag their journal entries and provide a search feature for easier navigation and retrieval of past reflections.
* **More LLM Models & Languages:** Expand support for additional LLMs and enable multilingual transcription and summarization so users can journal in languages other than English.