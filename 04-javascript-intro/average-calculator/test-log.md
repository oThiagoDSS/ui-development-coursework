# Test Log — Lesson 03 (Average Calculator)

| Case | Input Data | Expected Result | Obtained Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Student Name: `""` (empty); Grades: `8, 7, 9` | `Please fill in all fields.` | `Please fill in all fields.` | Passed |
| **2** | Student Name: `Mariana`; Grades: `8, "abc", 9` *(tested via text input)* | `Grade 2 must be a number between 0 and 10.` | `Grade 2 must be a number between 0 and 10.` | Passed |
| **3** | Student Name: `Mariana`; Grades: `-1, 7, 9` (or `11`) | `Grade 1 must be a number between 0 and 10.` | `Grade 1 must be a number between 0 and 10.` | Passed |
| **4** | Student Name: `Carlos`; Grades: `5, 5, 5` | `Average: 5.0` — `Status: Recovery` | `Average: 5.0` — `Status: Recovery` | Passed |
| **5** | Student Name: `Mariana`; Grades: `7, 7, 7` | `Average: 7.0` — `Status: Approved` | `Average: 7.0` — `Status: Approved` | Passed |
| **6** | Student Name: `Ana`; Grades: `4, 4, 4` | `Average: 4.0` — `Status: Failed` | `Average: 4.0` — `Status: Failed` | Passed |
