# Lab 02: Grade Average Calculator & Field-Level Validation

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Concepts](https://img.shields.io/badge/Concepts-Arrays%20%7C%20Conditionals-yellow?style=flat-square)

## Overview
Academic grade calculator that reads three numeric scores (`0` to `10`), identifies specifically which field fails validation, computes the arithmetic mean, and classifies the student status (**Approved** for averages `>= 6`, **Retake** otherwise).

* **Course:** User Interface Development (ADS — CEUB 2026)
* **Date:** November 10, 2026

---

## Implementation Highlights
* **Individual Field Diagnostics:** Maps inputs into an array of labeled objects (`{ value, label }`) and uses `.find()` to report the exact invalid input (e.g., *"Grade 2 must be a number between 0 and 10"*).
* **Safe Numeric Parsing:** Uses `Number()` instead of `parseInt()` so malformed text strings evaluate to `NaN` rather than partially parsing leading digits, verified via `Number.isFinite()`.
* **Precision Control:** Evaluates pass/fail thresholds against the raw unrounded average before formatting output with `.toFixed(2)` to avoid rounding bias near `6.0`.

---

## Boundary Test Evidences (`evidences/`)
* `01-boundary-zero.png` — Minimum valid scores (`0, 0, 0` → `0.00 — Retake`)
* `02-boundary-six.png` — Exact approval threshold (`6, 6, 6` → `6.00 — Approved`)
* `03-boundary-ten.png` — Maximum valid scores (`10, 10, 10` → `10.00 — Approved`)
* `04-below-threshold.png` — Just below passing threshold (`Retake`)
* `05-above-threshold.png` — Passing average (`Approved`)
* `06-empty-field.png` — Missing input handling
* `07-out-of-range.png` — Out-of-bounds score error feedback
