---
title: "TallyCart"
slug: "tallycart"
thumbnail: "/images/TallyCart_thumbnail.png"
heroImage: "/images/TallyCart_thumbnail.png"
tagline: "An AI-powered grocery optimizer that transforms raw receipt data into cost-saving shopping strategies."
status: "In Progress"
# date: "2025-6-15"
techStack:
  - "Python"
  - "Django"
  - "PostgreSQL"
  - "Docker"
links:
  # demo: "https://tallycart-demo.vercel.app"
  repo: "https://github.com/mohameds-dev/TallyCart"
---

## Overview

TallyCart eliminates the guesswork in grocery shopping by telling you where to get your shopping cart items for the best prices. The data is crowd-sourced through receipts. It also allows you to track your own purchases either by scanning your receipts or entering the data manually.

## Key Features

**AI-Powered Receipt Scanning:** Upload a photo of your grocery receipt and the system automatically extracts product names, prices, quantities, and store information using OCR (EasyOCR) and LLM-based parsing. The processing happens asynchronously via Celery workers for optimal performance.

**Crowd-Sourced Price Tracking:** Every scanned receipt contributes to a growing database of product prices across different stores. Users can search for products and see historical price trends, helping them make informed purchasing decisions.

**Shopping Cart Optimization:** Build your shopping list and the system recommends where to buy each item for the best price, potentially saving you money by splitting your shopping across multiple stores based on real-time price data.

## Technical Challenge & Solution


**The Challenge:** Parsing non-standardized receipt formats from different stores was unreliable with standard regex patterns. Each store has unique receipt layouts, varying text formats, inconsistent spacing, and different ways of displaying product information (e.g., "1.50 lb @ $6.66/lb" vs "1.50Ib $6.66/lb"). Additionally, OCR accuracy varies significantly based on image quality, lighting conditions, and receipt paper texture.

**The Solution:** I implemented a multi-stage pipeline that combines computer vision preprocessing with AI-powered parsing. First, I preprocess receipt images using OpenCV with CLAHE (Contrast Limited Adaptive Histogram Equalization) and greyscale conversion to improve OCR accuracy. The OCR text is then passed to an LLM (using structured prompts) that understands context and can extract structured JSON data regardless of receipt format variations. The system uses Celery for asynchronous processing, allowing users to upload receipts and receive results without blocking the API. I also implemented a normalization layer that standardizes units (lb, oz, ea) and price formats before database entry, ensuring consistent data quality for price comparisons.

## Future Improvements

* **User Authentication & Personalization:** Add user accounts to track personal purchase history and provide personalized price alerts and recommendations.
* **Front end:** Develop a website or a mobile application with camera integration for easier receipt scanning on-the-go.
* **Multi-Store Route Optimization:** Add geolocation features to optimize shopping routes when splitting purchases across multiple stores, considering both price savings and travel time.
* **Integration with Store APIs:** Connect directly with grocery store APIs where available to supplement crowd-sourced data with real-time pricing information.

