# JavaScript Fundamentals: Calculators & Fixation Exercises

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Language](https://img.shields.io/badge/Language-JavaScript%20(ES6+)-yellow?style=flat-square)

## 📌 Project Overview
This directory contains the practical laboratory exercises for Module 04, featuring an interactive web interface with a basic arithmetic operations calculator, a grade point average (GPA) calculator, and console-logged foundational programming exercises.

* **Course:** Systems Analysis and Development (ADS - CEUB 2026)
* **Professor:** Kadidja Valéria
* **Date:** November 3, 2026

---

## 🛠️ Implemented Features & Components

### 1. Basic Operations Calculator (`index.html`, `script.js`)
* Captures two numeric inputs (`#numero1`, `#numero2`).
* Performs addition, subtraction, multiplication, and safe division (preventing division by zero).
* Validates empty fields and updates the `#resultado` container dynamically using template strings.

### 2. Grade Average Calculator (Lab 3)
* Computes the arithmetic mean of three academic grades (`#nota1`, `#nota2`, `#nota3`).
* Limits output formatting using `.toFixed(2)`.
* Updates `#resultadoMedia` dynamically on click events.

### 3. Console Fixation Exercises & Labs
* **Student Registry:** Declares student information variables and logs structured data.
* **Store Purchase & Discounts:** Calculates unit totals and percentage-based discounts.
* **Logical & Comparison Tests:** Validates conditions using strict equality (`===`), comparison operators, and logical operators (`&&`, `||`, `!`).
* **Even or Odd Checker:** Evaluates integer parity using the remainder operator (`%`).

---

## 📂 Codebase & Evidences

* [`index.html`](./index.html) — Structure containing both calculator interfaces.
* [`styles.css`](./styles.css) — Clean UI layout design with responsive container cards.
* [`script.js`](./script.js) — Event listeners, DOM element selection, and mathematical logic.
* [`evidences/`](./evidences/) — Screenshots showing browser interface execution and Chrome Developer Tools (F12) console outputs.

```text
evidences/
├── calculator-ui.png
└── console-output.png
