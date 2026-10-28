# UX/UI Case Study: Public Transit App — Safe Boarding Mode

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Category](https://img.shields.io/badge/Category-Mobile%20UX%2FUI%20Design-blue?style=flat-square)
![Design Tool](https://img.shields.io/badge/Tool-Figma-f24e1e?style=flat-square)

## 👥 Team & Project Info
* **Team:** Thiago Santos, Rafael Lafene, Nathan, Camille
* **Project:** Public Transportation & Student Pass Top-Up Mobile Application

---

## 📌 Problem Statement & Context

* **Core Problem:** Public transit passengers face embarrassment and missed trips because the app approves financial transactions (via Pix) without clearly displaying the physical card balance status or the need for prior offline validation.
* **Target Persona:** **Camila Rocha** (22 years old), a university student and intern who relies on fast Pix top-ups at bus stops daily.
* **Key Pain Point:** Card rejection at the turnstile ("Insufficient Balance") immediately after receiving a "Payment Approved" notification on the app.
* **Guiding How Might We (HMW):** *How might we ensure users know their exact card status and how to activate it before boarding, avoiding turnstile embarrassment?*

---

## 💡 Ideation & Solution Selection

During the ideation phase (using Brainstorming and Crazy 8s exercises), the team evaluated three potential solutions:

1. **Smart Tracked Top-Up:** Real-time timeline mapping financial vs. physical card sync status.
2. **Safe Boarding Mode (Chosen):** A simple pre-boarding dashboard indicator (**GREEN** = Ready / **YELLOW** = Validation Pending) with explicit instructions.
3. **Emergency QR Code Ticket:** Instant temporary digital pass generated upon Pix approval.

### Decision Matrix Evaluation

| Criterion | Idea 1 (Tracked) | Idea 2 (Safe Boarding) | Idea 3 (QR Code) |
| :--- | :---: | :---: | :---: |
| Problem Resolution | 5 | 5 | 4 |
| Persona Needs Alignment | 4 | 5 | 4 |
| User Journey Improvement | 5 | 5 | 4 |
| Ease of Use | 4 | 5 | 4 |
| Implementation Feasibility | 5 | 5 | 2 |
| Innovation Potential | 3 | 4 | 4 |
| Value Generated | 4 | 5 | 4 |
| **TOTAL** | **30** | **34** | **22** |

* **Selection Justification:** **Idea 2 (Safe Boarding Mode)** achieved the highest score (**34 points**). It directly addresses pre-boarding uncertainty via pure software architecture and UI design, without requiring expensive hardware upgrades across public bus fleets.

---

## 🎨 Visual Hierarchy & Accessibility (WCAG & HCI)

### Visual Hierarchy & Eye-Tracking
* **Primary Focal Point:** Large status card at the top ("Ready to Board" vs. "Validation Pending").
* **Secondary Focal Point:** Active balance display in high-contrast, large typography (32pt bold).
* **Tertiary Focal Point:** Action buttons ("How to Validate Now", "Pix Top-Up") placed within natural ergonomic thumb reach (Thumb Zone).

### Accessibility Implementation
* **Colorblind Friendly (Multimodal Design):** Statuses combine colors, text labels, and distinct icons (🟢 Checkmark vs. 🟡 Warning Badge).
* **Contrast Ratios:** Minimum text contrast of 4.5:1 (WCAG AA) ensuring legibility under direct sunlight at bus stops.
* **Screen Reader & Haptic Support:** Logical aria-label structure alongside vibration/audio feedback for status updates.
* **Ergonomic Touch Targets:** Minimum button touch area of **48x48 dp**.

---

## 🖼️ Interface Prototypes & Deliverables

```text
transport-app-project/
├── README.md
└── assets/
    ├── initial_sketch_paint_en.png
    └── figma_prototype_en.png
