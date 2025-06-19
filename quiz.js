// ✅ DOM Elements
const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const questionNoElem = document.getElementById("questionNo");
const timerValue = document.getElementById("timerValue");
const timerProgress = document.getElementById("timerProgress");

// ✅ LocalStorage
const selectedCategory = localStorage.getItem("quizCategory") || "general";
const selectedDifficulty = localStorage.getItem("quizDifficulty") || "easy";

// ✅ Validate Questions
let questions = [];
if (
  typeof allQuestions === "object" &&
  allQuestions[selectedCategory] &&
  allQuestions[selectedCategory][selectedDifficulty]
) {
  questions = allQuestions[selectedCategory][selectedDifficulty];
} else {
  questionElem.textContent = "⚠️ No questions available for this category/difficulty.";
  optionsElem.innerHTML = "";
  console.warn("⚠️ Invalid category or difficulty selected:", selectedCategory, selectedDifficulty);
}

// ✅ Quiz State
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

// ✅ Load a Question
function loadQuestion() {
  if (!questions || questions.length === 0) return;

  const current = questions[currentQuestion];
  questionElem.textContent = current.question;
  optionsElem.innerHTML = "";

  current.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.onclick = () => selectOption(btn, index);
    optionsElem.appendChild(btn);
  });

  questionNoElem.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ✅ Handle Option Selection
function selectOption(selectedBtn, selectedIndex) {
  const current = questions[currentQuestion];

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("selected", "correct", "wrong");
  });

  selectedBtn.classList.add("selected");

  if (selectedIndex === current.answer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    const correctBtn = document.querySelectorAll(".option-btn")[current.answer];
    correctBtn.classList.add("correct");
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

// ✅ Start Timer with Circular Progress
function startTimer() {
  const timerText = document.getElementById("timerText");

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
    } else {
      timerText.textContent = `${timeLeft}s`;

      // 🔴 Change to red under 10s
      if (timeLeft <= 10) {
        timerText.style.color = "#ff4d4d";
      }

      // 🔔 Flashing under 5s
      if (timeLeft <= 5) {
        timerText.style.animation = "flash 1s infinite";
      } else {
        timerText.style.animation = "none";
      }

      timeLeft--;
    }
  }, 1000);
}


// ✅ Submit Result
function submitQuiz() {
  localStorage.setItem("quizScore", score);
  localStorage.setItem("totalQuestions", questions.length);
  localStorage.setItem("quizCategory", selectedCategory);
  localStorage.setItem("quizDifficulty", selectedDifficulty);
  window.location.href = "result.html";
}

// ✅ Initialize on Page Load
window.addEventListener("DOMContentLoaded", () => {
  if (questions && questions.length > 0) {
    loadQuestion();
    startTimer();
  }
});
