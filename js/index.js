// js/index.js

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const categorySelect = document.getElementById("category");
  const difficultySelect = document.getElementById("difficulty");

  startBtn.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    const selectedDifficulty = difficultySelect.value;

    if (!selectedCategory || !selectedDifficulty) {
      alert("Please select both category and difficulty!");
      return;
    }

    // 📝 Save selections to localStorage
    localStorage.setItem("quizCategory", selectedCategory);
    localStorage.setItem("quizDifficulty", selectedDifficulty);

    // 🚀 Redirect to quiz page
    window.location.href = "quiz.html";
  });
});
