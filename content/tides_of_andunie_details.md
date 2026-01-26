---
title: "The Tides Of Andunië"
slug: "the-tides-of-andunie"
thumbnail: "/images/TOA_Combat.png"
heroImage: "/images/TOA_Combat.png"
tagline: "A top-down action RPG. Drop into a Tolkien-inspired world to defeat the pirates and save the Island."
status: "Completed"
date: "2024-12-15"
techStack:
  - "Unity"
  - "C#"
  - "Git"
  - "Aseprite"
links:
  demo: "https://nospoonstudio.itch.io/the-tides-of-andunie"
  repo: ""
---

## Overview

The Tides of Andunië is a top-down action RPG that emerged from a semester-long game development challenge at the University of Houston. The project required our team to conceptualize, design, develop, and polish a complete game offering at least 30 minutes of engaging gameplay—all while maintaining bug-free quality from start to finish. Set in a Tolkien-inspired fantasy world, players take on the role of a hero fighting to save an island from invading pirates through strategic combat, exploration, and character progression. The game was developed as part of COSC 4358 with Dr. Yun, where it earned the **FIRST PLACE** out of all class projects after rigorous playtesting by industry judges who praised its user-friendly controls, entertaining gameplay, and polished execution. The game is now playable on web browsers via itch.io and also downloadable for windows. Complete with save/load functionality. Visit the **Live Demo** page above for more information.

<video width="100%" controls autoplay loop muted playsinline>
  <source src="/media/tides_of_andunie_compressed.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Mohamed's Contributions
### Raid System:
- Built a complete, scalable raid mechanic from scratch featuring wave-based enemy spawning, configurable timers, and dynamic enemy counters.
- The system uses a modular architecture with RaidController, RaidCutsceneController, and RaidMusicController, all designed with inverted dependencies for maximum flexibility.
- Raids can be configured via ScriptableObjects (RaidConfig, WaveConfig, EnemyData) to work with any level, enemy types, and unit counts, making it easily reusable across different scenarios throughout the game levels.

### Cavalry Enemy AI:
- Developed an intelligent state machine for cavalry units that dynamically switches between attack and retreat behaviors.
- The system includes a sophisticated patrol point distribution algorithm that automatically assigns cavalry units to the least populated patrol routes, with intelligent initial placement based on proximity and directional penalties
- Cavalry units can reverse their patrol sequences to avoid 180 degree turns, and the system includes stuck prevention logic to handle edge cases during patrol and charge states.

### Polished Combat System:
- Implemented responsive melee and ranged combat mechanics with smooth animations, hit detection, and enemy AI that provides engaging challenge without frustration.
- Designed the cavalry attack/retreat system to follow Single Responsibility Principle, using events and component auto-discovery for cleaner architecture.

### Audio Integration:
- Created an audio system including raid music with multiple tracks and cavalry sound effects.
- Processed and enhanced audio tracks using Audacity, applying effects and filters to improve quality.
- Implemented randomized pitch and playback timing to prevent repetitive sounds and the "robot-choir" effect.



## Overall Features
* **Diverse Enemy Types:** The game features a wide variety of enemy units that create dynamic combat encounters: melee fighters, ranged archers, musket-wielding pirates, bombers that throw explosives and retreat, giant brutes with devastating punches, cannon-equipped giants, the infamous cavalry units with their charge-and-retreat tactics, and a formidable monster pirate boss that serves as the climactic final battle.
* **Character Progression & Shop System:** Players can collect coins during matches to purchase stat-boosting rewards at the shop. The progression system features meaningful trade-offs—items that increase certain stats while decreasing others, forcing players to make strategic decisions about their build based on their playstyle and the challenges ahead.
* **Polished Combat System:** Implemented responsive melee and ranged combat mechanics with smooth animations, hit detection, and enemy AI that provides engaging challenge without frustration.
* **Level Design & Exploration:** Created multiple interconnected levels with strategic enemy placement, environmental storytelling, and progression that guides players naturally through the narrative.
* **Art & Visual Style:** Developed a cohesive pixel art aesthetic using Aseprite, with consistent character sprites, environmental assets, and UI elements that create an immersive fantasy atmosphere.
* **Level Design & Exploration:**
    - Drafted the initial level plan, storyboard, and unit design with the team. Created multiple interconnected levels with strategic enemy placement, environmental storytelling, and progression that guides players naturally through the narrative.
    - Art & Visual Style: Developed a cohesive pixel art aesthetic using Aseprite, with consistent character sprites, environmental assets, and UI elements that create an immersive fantasy atmosphere. Integrated cavalry animation sheets to create attack and gallop animations.
    - Project Management: Utilized GitHub's Kanban boards and issue tracking to coordinate team efforts, manage sprints, and ensure all features were delivered on time with proper testing and bug fixes.

## Technical Challenge & Solution

**The Challenge:**
The biggest challenge was balancing scope with quality within a single semester timeline. We needed to create a game that felt complete and polished—not just a prototype—while ensuring it was neither too easy nor too difficult for players. This required careful planning of gameplay mechanics, level design, and art assets, all while maintaining clean code architecture that could support rapid iteration and bug fixes. Additionally, coordinating a team project with multiple contributors working on different systems (combat, level design, art, UI) required robust version control practices to avoid merge conflicts and ensure everyone could work efficiently.

**The Solution:**
We adopted an agile development approach using GitHub's project management tools. I set up a Kanban board with clear milestones and used issue tracking to break down features into manageable tasks, allowing us to prioritize core gameplay mechanics first and iterate based on playtesting feedback. 

For the technical architecture, I focused on creating modular, reusable systems. The **Raid System** was designed with a mediator pattern—RaidRewardController acts as a bridge between the raid system and the rewards system, integrating cleanly with the Manager singleton. This architecture allowed the raid system to be completely decoupled and reusable across any level or scenario.

The **Cavalry AI** presented unique challenges with pathfinding and state management. I integrated cavalry units with the existing NavMesh system used by Giants, placed them on the enemy layer, and fine-tuned their attributes (speed, damage, movement) for balanced gameplay. To handle complex patrol behaviors, I implemented a dynamic patrol point assignment system that distributes units intelligently and tracks their lifecycle. The system includes angle-based penalties for patrol point selection to ensure units choose routes that make tactical sense, not just the nearest point. I also unified the attacking logic in the melee controller and refactored the code to follow Single Responsibility Principle, using events and auto-finding components to reduce coupling.

Throughout development, I balanced gameplay by adjusting impulse values, ensuring cavalry units smoothly avoid other units while ignoring collisions with each other. The stuck prevention logic detects when units get trapped during patrol or charge sequences and resolves the situation automatically. We implemented a rigorous playtesting schedule, catching balance issues and bugs early. The result was a game that felt polished and complete, earning recognition from industry judges who noted that "you guys know what you're doing" and that they "want to play it again."

## Future Improvements

* **Expanded Content:** Adding more levels, enemy types, allied units, and boss battles to extend gameplay beyond the initial 30-minute experience.
* **Diversified Battlefields:** Creating more varied level environments with different terrain types, environmental hazards, and strategic elements that change how players approach combat encounters.

