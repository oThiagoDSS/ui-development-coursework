// Elements are cached once so the DOM is queried only on page load.
const grade1Input = document.getElementById("grade1");
const grade2Input = document.getElementById("grade2");
const grade3Input = document.getElementById("grade3");
const calculateButton = document.getElementById("calculate");
const resultText = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const grade1Text = grade1Input.value.trim();
  const grade2Text = grade2Input.value.trim();
  const grade3Text = grade3Input.value.trim();

  // Validate before converting: Number("") returns 0, which would
  // silently count an empty field as a zero grade.
  if (grade1Text === "" || grade2Text === "" || grade3Text === "") {
    resultText.textContent = "Please fill in all three grades.";
    return;
  }

  // Convert each string to a number before any arithmetic.
  // Number() (not parseInt) so garbage becomes NaN instead of 7 from "7abc".
  const grade1 = Number(grade1Text);
  const grade2 = Number(grade2Text);
  const grade3 = Number(grade3Text);

  // Validate each grade individually so the user knows which field
  // is wrong (PDF exercise 6). isFinite rejects NaN and Infinity;
  // the range check blocks values outside 0..10.
  const grades = [
    { value: grade1, label: "Grade 1" },
    { value: grade2, label: "Grade 2" },
    { value: grade3, label: "Grade 3" },
  ];

  const invalid = grades.find(
    ({ value }) => !Number.isFinite(value) || value < 0 || value > 10
  );

  if (invalid) {
    resultText.textContent = `${invalid.label} must be a number between 0 and 10.`;
    return;
  }

  const average = (grade1 + grade2 + grade3) / 3;

  // toFixed(2) rounds for display only; the classification uses
  // the raw average to avoid rounding bias at the 6.0 threshold.
  const status = average >= 6 ? "Approved" : "Retake";

  resultText.textContent = `Average: ${average.toFixed(2)} — ${status}`;
});
