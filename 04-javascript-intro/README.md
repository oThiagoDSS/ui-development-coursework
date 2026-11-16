# Module 04: JavaScript Fundamentals — DOM, Conditionals & Events

![Status](https://img.shields.io/badge/Status-In%20Progress-blue?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-JavaScript%20(ES6%2B)%20%7C%20DOM%20%7C%20CSS3-yellow?style=flat-square)

## Overview
This module covers JavaScript as the behavioral layer of modern web interfaces. It progresses from basic variables, types, and operators to interactive DOM manipulation, conditional branching (`if`, `else if`, `else`), strict input validation, multi-event handling (`submit`, `click`, hover/focus states), and client-side state persistence via `localStorage`.

---

## Practical Projects & Labs

| Project | Core Concepts | Date | Folder |
| :--- | :--- | :---: | :--- |
| **Basic & GPA Calculators** | Variables (`let`/`const`), arithmetic operators, `Number()` casting, and console exercises. | Nov 03, 2026 | [`javascript-calculators/`](./javascript-calculators/) |
| **Age Checker (Lab 01)** | Form input reading (`.value.trim()`), `Number.isInteger()` validation, and range checks. | Nov 10, 2026 | [`age-checker/`](./age-checker/) |
| **Average Calculator (Lab 02)** | Multi-field validation, `Number.isFinite()`, array-based field checking, and conditional grading. | Nov 10, 2026 | [`average-calculator/`](./average-calculator/) |
| **Task Manager App** | State-driven DOM rendering, event delegation, `localStorage` persistence, and CSS data-attribute filtering. | Nov 10, 2026 | [`task-manager/`](./task-manager/) |

---

## Key Learning Outcomes
* **DOM Selection & Caching:** Querying elements efficiently via `getElementById()` and `querySelectorAll()`.
* **Input Sanitization & Validation:** Preventing empty-string coercion (`Number("") === 0`), checking finiteness/integers, and enforcing boundary limits before executing logic.
* **Event-Driven Architecture:** Handling `click` and `submit` events, preventing default form reloads (`event.preventDefault()`), and applying event delegation (`event.target.closest()`).
* **State & Persistence:** Synchronizing JavaScript data structures with the DOM and safely reading/writing JSON payloads to `localStorage` inside `try/catch` blocks.
