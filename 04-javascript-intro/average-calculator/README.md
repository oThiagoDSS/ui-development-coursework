# Lab 02: Grade Average Calculator & Field-Level Validation

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Concepts](https://img.shields.io/badge/Concepts-DOM%20%7C%20Arrays%20%7C%20Conditionals-yellow?style=flat-square)

## Overview
Interactive academic grade calculator that reads a student's name and three numeric scores (`0` to `10`), validates required fields and numeric boundaries, computes the arithmetic mean, and classifies the student status (**Approved** for `>= 7.0`, **Recovery** for `5.0` to `6.9`, and **Failed** for `< 5.0`) with dynamic visual feedback.

- **Course:** User Interface Development (ADS — CEUB 2026)
- **Initial Date:** November 10, 2026
- **Updated:** November 17, 2026 (Module 04 Integration — Lesson 03)

---

## Implementation Highlights
- **Separation of Concerns:** Decouples pure calculation and classification functions (`calculateAverage`, `isValidGrade`, `getStatus`) from DOM manipulation and event listeners (`submit` and `click` on reset).
- **Pre-Conversion Empty Check & Auto-Focus:** Validates `.value.trim()` before casting with `Number()` to prevent empty strings from coercing into `0`, automatically focusing the first invalid input.
- **Individual Field Diagnostics:** Maps grade inputs into an array of labeled objects (`{ value, label, input }`) and uses `.find()` to identify and report the exact out-of-range field (e.g., *"Grade 2 must be a number between 0 and 10"*).
- **Safe DOM Output & Accessibility:** Renders output using `.textContent` instead of `.innerHTML` to prevent XSS injection, paired with `role="status"` and `aria-live="polite"` for screen readers.

---

## Boundary & Functional Test Cases (`registro-de-testes.md` / `evidences/`)
- `01-empty-fields.png` — Empty student name or grade field (`""` → *"Please fill in all fields."*)
- `02-out-of-range.png` — Negative or above-10 grade (`-1` or `11` → *"Grade X must be a number between 0 and 10."*)
- `03-boundary-recovery.png` — Exact lower recovery threshold (`5, 5, 5` → `5.0 — Recovery`)
- `04-boundary-approved.png` — Exact approval threshold (`7, 7, 7` → `7.0 — Approved`)
- `05-failed-status.png` — Below recovery threshold (`4, 4, 4` → `4.0 — Failed`)
- `06-reset-state.png` — Form reset via **Clear** button restoring initial UI state
