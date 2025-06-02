// 1. Validate email format (basic validation)
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

// 2. Get a random featured project from your portfolio
const projects = ["E-Commerce Site", "To-Do App", "Travel Blog", "Portfolio Redesign"];

function getRandomProject() {
  const index = Math.floor(Math.random() * projects.length);
  return projects[index];
}
console.log(`Featured project: ${getRandomProject()}`);

// 3. Store user feedback messages in an array
let feedbackMessages = [];

function addFeedback(message) {
  feedbackMessages.push(message);
  return feedbackMessages;
}
console.log(addFeedback("Great design!")); // ["Great design!"]

// 4. Count the total number of projects
function countProjects(projectArray) {
  return `You have ${projectArray.length} projects.`;
}
console.log(countProjects(projects)); // You have 4 projects.

// 5. Personalized greeting using user's first and last name
function greetUser(firstName, lastName) {
  return `Welcome to my portfolio, ${firstName} ${lastName}!`;
}
console.log(greetUser("Jane", "Doe")); // Welcome to my portfolio, Jane Doe!
