---
title: "Ordered Map library in C++"
slug: "ordered-map"
thumbnail: "/images/OrderedMap thumbnail.png"
heroImage: "/images/OrderedMap thumbnail.png"
tagline: "A C++ ordered map implementation designed to power an LRU Cache simulation."
status: "Completed"
date: "2023-11-20"
techStack:
  - "C++"
  - "Git"
  - "CMake"
  - "Google Test"
links:
  demo: ""
  repo: "https://github.com/mohameds-dev/ordered_map_lib"
---

## Overview
I developed this library to efficiently simulate a **Least Recently Used (LRU) Cache**, addressing a fundamental limitation of standard C++ maps. While `std::map` and `std::unordered_map` offer fast lookups, they cannot natively track element usage history or maintain insertion order. This project implements a custom data structure that combines the speed of a hash map with the ordering capabilities of a linked list, delivering constant-time access and sequence management—critical requirements for cache eviction policies. I implemented the `DoublyLinkedList` from scratch instead of wrapping `std::list` to have full control over memory management and iterator semantics, demonstrating deep understanding of smart pointers and low-level pointer manipulation.

## Key Features
* **LRU-Ready Architecture:** Designed to support "move-to-front" operations essential for tracking recently used items.
* **O(1) Average Complexity:** Ensures that both lookups and position updates (reordering) occur in constant time.
* **STL-Compatible Interface:** Mimics standard library APIs (e.g., `find`, `insert`) while strictly enforcing the order of elements.

## Technical Challenge & Solution
**The Challenge:**
The core difficulty was implementing the "promote on access" behavior required for an LRU cache without degrading performance. In a naive implementation, moving an accessed element to the front of the queue would involve removing and re-inserting the data, which triggers expensive memory allocation and deallocation. I needed a way to reorder elements dynamically while ensuring all operations remained strictly **O(1)**.

**The Solution:**
I engineered a composite structure using a **Hash Map** pointing to nodes in a custom **Doubly Linked List**.
* **Pointer Manipulation:** Instead of moving data values, I implemented a `splice`-like operation that unlinks a node from its current position and relinks it to the list head by strictly updating pointers.
* **Iterator Stability:** The Hash Map stores persistent iterators to the list nodes, allowing me to "teleport" to any node and move it instantly without searching the list or invalidating the map's references.

## Future Improvements
* **Thread Safety:** Adding mutex locks to support concurrent cache access in multi-threaded environments.
* **Custom Allocators:** Implementing a memory pool to further reduce the overhead of creating new list nodes during high-volume insertions.