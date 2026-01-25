---
title: "Nota"
slug: "nota"
thumbnail: "/images/nota-ss1.png"
heroImage: "/images/nota-ss1.png"
tagline: "A mobile app for taking notes offline and filtering them by labels using Flutter and SQLite."
status: "Completed"
date: "2023-08-16"
techStack:
  - "Flutter"
  - "Dart"
  - "SQLite"
  - "Git"
links:
  demo: ""
  repo: "https://github.com/mohameds-dev/nota"
---

## Overview
Nota is a mobile application designed for efficient, offline note-taking. It solves the problem of organizing scattered thoughts by providing a robust labeling system that allows users to filter and find content instantly. Built with Flutter and backed by a local SQLite database, it ensures that users own their data and can access it without an internet connection.

## Key Features
* **Rich Text Editing:** utilizes `flutter_quill` to allow users to format text (bold, italic, lists) rather than just writing plain text.
* **Labeling & Filtering System:** Users can create custom color-coded labels and use them to filter the note list, making organization intuitive.
* **Offline Persistence:** Implements `sqflite` to store all notes and metadata locally on the device, ensuring total privacy and zero latency.

## Technical Challenge & Solution
**The Challenge:**
The main challenge was handling **Rich Text Serialization** within a relational database context. The editor uses a complex JSON-based "Delta" format to represent formatting, whereas SQLite expects standard data types. Additionally, efficiently updating the UI state when filters were applied across a large list of notes required careful state management to avoid performance regressions.

**The Solution:**
* **Data Serialization:** I implemented a repository layer that serializes the Quill Delta objects into JSON strings before inserting them into the SQLite database and deserializes them back into rich text objects upon retrieval.
* **State Management:** I utilized the **BLoC (Business Logic Component)** pattern to decouple the database logic from the UI. This allowed for asynchronous database queries that update the UI state streams smoothly without blocking the main thread.

## Future Improvements
* **Cloud Synchronization:** Adding an optional sync feature (e.g., via Firebase) to allow users to access notes across multiple devices.
* **Note Sorting & Pinning:** Implementing functionality to pin important notes to the top and sort lists by date or alphabetical order.