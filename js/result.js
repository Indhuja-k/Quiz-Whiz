const scoreText = document.getElementById("scoreText");
const resultMessage = document.getElementById("resultMessage");
const categoryDifficulty = document.getElementById("categoryDifficulty");

// 🧠 Get data safely from localStorage
const score = parseInt(localStorage.getItem("quizScore")) || 0;
const total = parseInt(localStorage.getItem("totalQuestions")) || 0;
const category = localStorage.getItem("quizCategory") || "N/A";
const difficulty = localStorage.getItem("quizDifficulty") || "N/A";

// 📊 Display score
scoreText.textContent = `You scored ${score}/${total}`;

// ✨ Show performance message
let message = "";
const percentage = total > 0 ? (score / total) * 100 : 0;

if (percentage === 100) {
  message = "🌟 Perfect! You're a genius!";
} else if (percentage >= 80) {
  message = "💪 Great job! Almost perfect!";
} else if (percentage >= 50) {
  message = "👍 Good try! You can do even better!";
} else {
  message = "😅 Keep practicing. You'll improve!";
}

resultMessage.textContent = message;

// 📘 Show category + difficulty (optional)
if (categoryDifficulty) {
  categoryDifficulty.textContent = `Category: ${capitalize(category)} | Difficulty: ${capitalize(difficulty)}`;
}

// 🔁 Retry handler
function retryQuiz() {
  localStorage.removeItem("quizScore");
  localStorage.removeItem("totalQuestions");
  localStorage.removeItem("quizCategory");
  localStorage.removeItem("quizDifficulty");
  window.location.href = "index.html";
}

// 🔠 Capitalize utility
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
