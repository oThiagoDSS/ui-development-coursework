// 1. BASIC OPERATIONS CALCULATOR
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  const field1 = document.getElementById("number1");
  const field2 = document.getElementById("number2");
  const resultSection = document.getElementById("result");

  if (field1.value === "" || field2.value === "") {
    resultSection.textContent = "Please fill in both numbers.";
    return;
  }

  const number1 = Number(field1.value);
  const number2 = Number(field2.value);
  
  const sum = number1 + number2;
  const subtraction = number1 - number2;
  const multiplication = number1 * number2;
  const division =
    number2 === 0 ? "Cannot divide by zero." : number1 / number2;

  resultSection.innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Subtraction: ${subtraction}</p>
    <p>Multiplication: ${multiplication}</p>
    <p>Division: ${division}</p>
  `;
});

// 2. LAB 3 - GRADE AVERAGE CALCULATOR
const calculateAverageBtn = document.getElementById("calculateAverageBtn");

calculateAverageBtn.addEventListener("click", function () {
  // 1. HTML Element Selection
  const fieldGrade1 = document.getElementById("grade1");
  const fieldGrade2 = document.getElementById("grade2");
  const fieldGrade3 = document.getElementById("grade3");
  const averageResult = document.getElementById("averageResult");

  // 2. Validation: check if any field is empty
  if (
    fieldGrade1.value === "" ||
    fieldGrade2.value === "" ||
    fieldGrade3.value === ""
  ) {
    averageResult.textContent = "Please fill in all three grades to calculate.";
    return;
  }

  // 3. Converting string values to numbers
  const grade1 = Number(fieldGrade1.value);
  const grade2 = Number(fieldGrade2.value);
  const grade3 = Number(fieldGrade3.value);

  // 4. Calculating the average
  const average = (grade1 + grade2 + grade3) / 3;

  // 5. Displaying the result (toFixed(2) limits to 2 decimal places)
  averageResult.textContent = `The final average is: ${average.toFixed(2)}`;
});

// --- Practice Exercises ---

// 1. Student Registration
const studentName = "Jane Doe";
const studentId = 202410123;
const course = "Software Analysis and Development";
const term = "2nd Term";
const academicStatus = "Enrolled";

console.log("--- STUDENT INFORMATION ---");
console.log("Name:", studentName);
console.log("Student ID:", studentId);
console.log("Course:", course);
console.log("Term:", term);
console.log("Academic Status:", academicStatus);

// 2. Purchase Calculation
const unitPrice = 150.0;
const quantity = 3;
const totalAmount = unitPrice * quantity;

// Using backticks (`) for string interpolation with ${}
console.log(`Unit Price: $ ${unitPrice.toFixed(2)}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total Amount: $ ${totalAmount.toFixed(2)}`);

// 3. Discount Calculation
const originalPrice = 200.0;
const discountRate = 0.15; // 15%

const discountAmount = originalPrice * discountRate;
const finalPrice = originalPrice - discountAmount;

console.log(`Original Price: $ ${originalPrice.toFixed(2)}`);
console.log(`Discount (15%): $ ${discountAmount.toFixed(2)}`);
console.log(`Final Price with Discount: $ ${finalPrice.toFixed(2)}`);

// 4. Comparisons
// Using 'let' instead of 'const' to allow reassignment in Exercise 5
let age = 20;

console.log("Tested Age:", age);
console.log("Greater than 18 (age > 18):", age > 18); // true
console.log("Less than 18 (age < 18):", age < 18); // false
console.log("Equal to 18 (age === 18):", age === 18); // false
console.log("Greater than or equal to 18 (age >= 18):", age >= 18); // true

// 5. Logical Operators
// Reassigning age value without declaring 'const' again
age = 22;
const isRegistered = true;
const isAccountActive = true;

// 1. Minimum age (>= 18) AND registered
const minAgeAndRegistered = age >= 18 && isRegistered;
console.log("Meets minimum age AND registered?", minAgeAndRegistered); // true

// 2. Active account OR registered
const activeAccountOrRegistered = isAccountActive || isRegistered;
console.log("Active account OR registered?", activeAccountOrRegistered); // true

// 3. Account NOT active
const isAccountNotActive = !isAccountActive;
console.log("Is the account NOT active?", isAccountNotActive); // false

// 6. Even or Odd Number Check
const number = 7;

if (number % 2 === 0) {
  console.log(`The number ${number} is EVEN.`);
} else {
  console.log(`The number ${number} is ODD.`);
}
