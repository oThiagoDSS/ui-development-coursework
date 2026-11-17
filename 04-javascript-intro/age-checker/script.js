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

  if (age >= 18) {
    resultText.textContent = "Adult";
  } else {
    // Get the current year dynamically and add the remaining years until 18.
    const currentYear = new Date().getFullYear();
    const adultYear = currentYear + (18 - age);

    resultText.textContent = `Minor! You will become an adult in ${adultYear}.`;
  }
});
