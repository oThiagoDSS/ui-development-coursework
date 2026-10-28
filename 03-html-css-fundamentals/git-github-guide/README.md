# Front-End Project: Git & GitHub Quick Reference Guide

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3-blue?style=flat-square)
![Responsive](https://img.shields.io/badge/Layout-Responsive-brightgreen?style=flat-square)

## 📌 Project Overview
An educational reference web application designed to help computer science and ADS students master essential Git version control commands and GitHub collaboration workflows. Built using clean, semantic HTML5 and custom CSS3.

* **Author:** Thiago Santos
* **Course:** User Interface Development (ADS - CEUB 2026)
* **Live Demo:** [GitHub Pages Live Preview](https://thiagossceub.github.io/repositorio-html-css-meu-primeiro-site/#about)

---

## 🛠️ Key Technical Features & Implementations

### 1. Semantic HTML5 Structure (`index.html`)
* **Header & Navigation:** Sticky navigation bar (`<header>`, `<nav>`) with instant jump links to sections (`#about`, `#workflow`, `#commands`, `#resources`).
* **Structured Data:** Ordered lists for step-by-step Git workflows and tabular layouts (`<table>`) for command cheat sheets.
* **Interactive Forms:** Accessible search input with HTML5 validation (`required` attribute) and explicit label connections.

### 2. Custom Responsive CSS3 (`styles.css`)
* **Flexbox Layouts:** Header alignment and search form input group configured via `display: flex`.
* **Sticky Positioning:** Global sticky header with `position: sticky` and `z-index: 100` for fixed navigation during scrolling.
* **Table Responsiveness:** Custom wrapper with `overflow-x: auto` ensuring data tables do not break mobile screen viewports.
* **Media Queries:** Tailored breakpoint at `600px` converting horizontal navigation and form controls into vertical stacked layouts for smartphones.

---

## 📂 Codebase Files

* [`index.html`](./index.html) — Main semantic web markup file.
* [`styles.css`](./styles.css) — Custom stylesheet including resets, layout modules, and media queries.
