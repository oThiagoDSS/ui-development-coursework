// Cache DOM elements once on page load
const averageForm = document.querySelector("#average-form");
const nameInput = document.querySelector("#student-name");
const grade1Input = document.querySelector("#grade1");
const grade2Input = document.querySelector("#grade2");
const grade3Input = document.querySelector("#grade3");
const clearButton = document.querySelector("#clear");
const resultBox = document.querySelector("#result");

// Pure functions (Lesson 2)
function calculateAverage(grade1, grade2, grade3) {
  return (grade1 + grade2 + grade3) / 3;
}

function isValidGrade(grade) {
  return !Number.isNaN(grade) && Number.isFinite(grade) && grade >= 0 && grade <= 10;
}

function getStatus(average) {
  if (average >= 7) return "Approved";
  if (average >= 5) return "Recovery";
  return "Failed";
}

function getStatusClass(status) {
  if (status === "Approved") return "approved";
  if (status === "Recovery") return "recovery";
  return "failed";
}

function showError(message, elementToFocus = null) {
  resultBox.textContent = message;
  resultBox.className = "result error";
  if (elementToFocus) {
    elementToFocus.focus();
  }
}

// Form submission event (Lesson 3)
averageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentName = nameInput.value.trim();
  const grade1Text = grade1Input.value.trim();
  const grade2Text = grade2Input.value.trim();
  const grade3Text = grade3Input.value.trim();

  // 1. Validate empty fields before Number() conversion (avoids Number("") === 0)
  if (!studentName || grade1Text === "" || grade2Text === "" || grade3Text === "") {
    showError(
      "Please fill in all fields.",
      !studentName ? nameInput : null
    );
    return;
  }

  // 2. Convert strings to numbers and validate range (0 to 10)
  const grades = [
    { value: Number(grade1Text), label: "Grade 1", input: grade1Input },
    { value: Number(grade2Text), label: "Grade 2", input: grade2Input },
    { value: Number(grade3Text), label: "Grade 3", input: grade3Input },
  ];

  const invalidGrade = grades.find(({ value }) => !isValidGrade(value));

  if (invalidGrade) {
    showError(
      `${invalidGrade.label} must be a number between 0 and 10.`,
      invalidGrade.input
    );
    return;
  }

  // 3. Calculate, classify, and safely render result using textContent
  const average = calculateAverage(
    grades[0].value,
    grades[1].value,
    grades[2].value
  );
  const status = getStatus(average);
  const statusClass = getStatusClass(status);

  resultBox.textContent =
    `Student: ${studentName}\n` +
    `Average: ${average.toFixed(1)}\n` +
    `Status: ${status}`;
  resultBox.className = `result ${statusClass}`;
});

// Reset event to restore initial state
clearButton.addEventListener("click", () => {
  resultBox.textContent = "The result will be displayed here.";
  resultBox.className = "result";
  nameInput.focus();
});
