# Interactive Project: Vanilla JS Task Manager

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Concepts](https://img.shields.io/badge/Concepts-State%20DOM%20%7C%20localStorage%20%7C%20Events-yellow?style=flat-square)

## Overview
A lightweight, state-driven task management web application built with vanilla HTML5, CSS3, and ES6+ JavaScript. Designed to consolidate interactive DOM manipulation, multiple user events (`submit`, `click`, hover/focus interactions), dynamic styling via data attributes, and fault-tolerant browser storage.

* **Course:** User Interface Development (ADS — CEUB 2026)
* **Date:** November 10, 2026

---

## Architecture & Technical Features

### 1. State-Driven Rendering (`script.js`)
* **Single Source of Truth:** All application state resides in a `tasks` array (`{ id, text, done }`). Every user action mutates state and triggers `render()`, mirroring unidirectional UI data flow.
* **Event Delegation:** A single click listener on `#task-list` handles both task completion toggling (`.task__check`) and deletion (`.task__delete`) via `event.target.closest(".task")`.
* **Resilient Persistence:** `loadTasks()` and `saveTasks()` wrap `localStorage` calls in `try/catch` blocks and validate parsed schema shapes so corrupted storage or restricted browser modes never break the UI.

### 2. Dynamic CSS & Accessibility (`index.html`, `styles.css`)
* **CSS-Driven Filtering:** Filter tabs (`All`, `Active`, `Done`) update a `data-filter` attribute on the `<ul>` element, allowing CSS selectors to toggle visibility and display contextual `:empty::after` messages without re-creating DOM nodes.
* **Interactive Hover & Keyboard States:** Delete buttons remain hidden until task hover or keyboard `:focus-visible`, ensuring clean visual hierarchy and full keyboard navigation.
* **Screen Reader Support:** Includes `.visually-hidden` form labels and an `aria-live="polite"` task list container.

---

## UI States & Evidences (`evidences/`)
* `01-empty-state.png` — Initial empty list state and disabled clear button
* `02-tasks-added.png` — Active tasks populated with remaining item counter
* `03-filter-done.png` — Filtered view displaying completed tasks
* `04-hover-delete.png` — Contextual delete button reveal on item hover
* `05-counter-all-done.png` — All tasks completed state (`All done 🎉`)
