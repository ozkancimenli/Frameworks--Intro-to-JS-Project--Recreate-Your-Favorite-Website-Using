// Function 1: Validate Email
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Function 2: Random Featured Project
const projects = ["Portfolio Website", "To-do App", "Blog Template"];
function getRandomProject() {
  const index = Math.floor(Math.random() * projects.length);
  return projects[index];
}

// Function 3: Calculate Total Price
const prices = [25.5, 19.9, 40];
function calculateTotal(pricesArray) {
  return pricesArray.reduce((total, price) => total + price, 0);
}

// Function 4: Add Feedback to Array
let feedbackArray = [];
function addFeedback(message) {
  feedbackArray.push(message);
  return feedbackArray;
}

// Function 5: Feature Toggle
function toggleFeature(flag) {
  return flag ? "Feature Enabled" : "Feature Disabled";
}

// Example console tests
console.log(isValidEmail("me@example.com"));
console.log("Random Project:", getRandomProject());
console.log("Total:", calculateTotal(prices));
console.log(addFeedback("Love your site!"));
console.log(toggleFeature(true));
