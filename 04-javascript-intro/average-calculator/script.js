// Elements are cached once so the DOM is queried only on page load.
const averageForm = document.getElementById("average-form");
const nameInput = document.getElementById("student-name");
const grade1Input = document.getElementById("grade1");
const grade2Input = document.getElementById("grade2");
const grade3Input = document.getElementById("grade3");
const clearButton = document.getElementById("clear");
const resultBox = document.getElementById("result");

// Pure functions (Lesson 2): decoupled from the DOM for clarity and reuse.
function calculateAverage(grade1, grade2, grade3) {
  return (grade1 + grade2 + grade3) / 3;
}

function isValidGrade(grade) {
  return Number.isFinite(grade) && grade >= 0 && grade <= 10;
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

  // 1. Validate student name
  if (studentName === "") {
    showError("Please enter the student's name.", nameInput);
    return;
  }

  // 2. Validate empty grade fields before Number() conversion
  if (grade1Text === "" || grade2Text === "" || grade3Text === "") {
    showError("Please fill in all three grades.");
    return;
  }

  // 3. Convert to Number and validate range (0 to 10) per field
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

  // 4. Calculate, classify, and update the UI
  const average = calculateAverage(
    grades[0].value,
    grades[1].value,
    grades[2].value
  );
  const status = getStatus(average);
  const statusClass = getStatusClass(status);

  resultBox.innerHTML = `
    <strong>Student:</strong> ${studentName}<br />
    <strong>Average:</strong> ${average.toFixed(1)}<br />
    <strong>Status:</strong> ${status}
  `;
  resultBox.className = `result ${statusClass}`;
});

// Reset event to restore initial state
clearButton.addEventListener("click", () => {
  resultBox.textContent = "The result will be displayed here.";
  resultBox.className = "result";
  nameInput.focus();
});
