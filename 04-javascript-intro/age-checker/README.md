# Lab 01: Age Checker & Input Validation

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Concepts](https://img.shields.io/badge/Concepts-DOM%20%7C%20Conditionals%20%7C%20Validation-yellow?style=flat-square)

## Overview
Interactive form application built to validate integer age inputs (`0` to `120`), classify users as **Adult** (`>= 18`) or **Minor** (`< 18`) with dynamic adulthood year projection, and provide color-coded status feedback.

- **Course:** User Interface Development (ADS — CEUB 2026)
- **Initial Date:** November 10, 2026
- **Updated:** November 17, 2026

---

## Implementation Highlights
- **Separation of Concerns:** Decouples pure validation and calculation helpers (`isValidAge`, `getAdultYear`) from DOM event handling (`submit` and `click` on reset) and `style.css` presentation rules.
- **DOM Caching & Form Events:** Caches form, input, reset button, and output elements on load (`defer`), supporting both button clicks and `Enter` key submission via `event.preventDefault()`.
- **Pre-Conversion Empty Check & Auto-Focus:** Calls `.value.trim()` before `Number()` so blank submissions do not coerce into `0`, returning focus to the input on errors or reset.
- **Strict Integer & Range Validation:** Uses `Number.isInteger(age) && age >= 0 && age <= 120` to reject decimals (e.g., `18.5`), negative values (`-2`), and out-of-bounds numbers (`121`).
- **Accessibility & Visual Feedback:** Output `<section>` uses `role="status"` and `aria-live="polite"` paired with dynamic CSS state classes (`.adult`, `.minor`, `.error`).

---

## Boundary Test Evidences (`evidences/`)
All mandatory boundary and edge cases were tested and documented:
- `01-minor-17.png` — Upper minor boundary (`17` → Minor + dynamic year)
- `02-adult-18.png` — Lower adult boundary (`18` → Adult)
- `03-invalid-18-5.png` — Fractional input rejection (`18.5` → Invalid age)
- `04-invalid-negative-2.png` — Negative input rejection (`-2` → Invalid age)
- `05-adult-120.png` — Maximum valid age boundary (`120` → Adult)
- `06-invalid-121.png` — Upper out-of-range rejection (`121` → Invalid age)
- `07-empty.png` — Empty field submission (`""` → Prompt message)
