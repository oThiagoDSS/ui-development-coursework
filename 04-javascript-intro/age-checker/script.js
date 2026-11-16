// Elements are cached once so the DOM is queried only on page load.
const ageInput = document.getElementById("age");
const checkButton = document.getElementById("check");
const resultText = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const inputValue = ageInput.value.trim();

  // Validate before converting: Number("") returns 0, which would slip through.
  if (inputValue === "") {
    resultText.textContent = "Please enter an age.";
    return;
  }

  const age = Number(inputValue);

  // isInteger rejects NaN, Infinity and decimals (e.g. "18.5").
  // The range check blocks unrealistic ages.
  if (!Number.isInteger(age) || age < 0 || age > 120) {
    resultText.textContent = "Invalid age.";
    return;
  }

  resultText.textContent = age >= 18 ? "Adult" : "Minor";
});
