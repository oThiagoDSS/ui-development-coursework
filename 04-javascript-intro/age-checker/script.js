// Elements are cached once so the DOM is queried only on page load.
const ageForm = document.querySelector("#age-form");
const ageInput = document.querySelector("#age");
const clearButton = document.querySelector("#clear");
const resultBox = document.querySelector("#result");

// Pure validation and classification functions
function isValidAge(age) {
  return Number.isInteger(age) && age >= 0 && age <= 120;
}

function getAdultYear(age) {
  const currentYear = new Date().getFullYear();
  return currentYear + (18 - age);
}

function showError(message) {
  resultBox.textContent = message;
  resultBox.className = "result error";
  ageInput.focus();
}

// Form submission event (supports both button click and Enter key)
ageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = ageInput.value.trim();

  // 1. Validate before converting: Number("") returns 0, which would slip through.
  if (inputValue === "") {
    showError("Please enter an age.");
    return;
  }

  const age = Number(inputValue);

  // 2. isInteger rejects NaN, Infinity, and decimals (e.g., "18.5").
  // The range check blocks unrealistic ages.
  if (!isValidAge(age)) {
    showError("Invalid age. Please enter an integer between 0 and 120.");
    return;
  }

  // 3. Classify and update UI with status styling
  if (age >= 18) {
    resultBox.textContent = "Adult";
    resultBox.className = "result adult";
  } else {
    const adultYear = getAdultYear(age);
    resultBox.textContent = `Minor! You will become an adult in ${adultYear}.`;
    resultBox.className = "result minor";
  }
});

// Reset event to restore initial state
clearButton.addEventListener("click", () => {
  resultBox.textContent = "The result will be displayed here.";
  resultBox.className = "result";
  ageInput.focus();
});
