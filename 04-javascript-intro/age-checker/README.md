# Lab 01: Age Checker & Input Validation

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Concepts](https://img.shields.io/badge/Concepts-Conditionals%20%7C%20Validation-yellow?style=flat-square)

## Overview
Interactive form application built to validate integer age inputs and classify users as **Adult** (`>= 18`) or **Minor** (`< 18`), enforcing strict boundary checks and accessible live status announcements.

* **Course:** User Interface Development (ADS — CEUB 2026)
* **Date:** November 10, 2026

---

## Implementation Highlights
* **DOM Caching:** Input, button, and output elements are cached once on script load (`defer`).
* **Pre-Conversion Empty Check:** Calls `.value.trim()` before `Number()` so blank submissions do not coerce into `0`.
* **Strict Integer & Range Validation:** Uses `!Number.isInteger(age) || age < 0 || age > 120` to reject decimals (e.g., `18.5`), negative values (`-2`), and out-of-bounds numbers (`121`).
* **Accessibility:** Output paragraph uses `role="status"` and `aria-live="polite"` for screen reader compatibility.

---

## Boundary Test Evidences (`evidences/`)
All mandatory boundary and edge cases were tested and documented:
* `01-minor-17.png` — Upper minor boundary (`17` → Minor)
* `02-adult-18.png` — Lower adult boundary (`18` → Adult)
* `03-invalid-18-5.png` — Fractional input rejection (`18.5` → Invalid age)
* `04-invalid-negative-2.png` — Negative input rejection (`-2` → Invalid age)
* `05-adult-120.png` — Maximum valid age boundary (`120` → Adult)
* `06-invalid-121.png` — Upper out-of-range rejection (`121` → Invalid age)
* `07-empty.png` — Empty field submission (`""` → Prompt message)
