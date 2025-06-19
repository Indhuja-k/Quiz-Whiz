# 🧠 QuizWhiz

**QuizWhiz** is an interactive quiz web application that allows users to test their knowledge across various categories and difficulty levels. It offers user authentication through registration and login, personalized profiles, a dynamic leaderboard to highlight top scorers, daily streak tracking for consistent engagement, and instant feedback after each quiz attempt.

---

## ✅ Features

- Category & Difficulty-Based Quiz Selection  
- User Authentication (Register/Login)  
- Personalized Profile with Edit Option  
- Per-Question Timer  
- Result Page with Feedback  
- Leaderboard (Top 5 Scores)  
- Daily Quiz Streak Tracking   
- Retake Quiz Option  
- Forgot Password Recovery (modal popup)  

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Glassmorphism + Gradient UI)
- **JavaScript**
- **localStorage** for data handling

---


## 📸 Screenshots

| Home (Quiz Selection) | Quiz in Progress | Result & Leaderboard |
|------------------------|------------------|-----------------------|
| ![Home](screenshots/home.png) | ![Quiz](screenshots/quiz.png) | ![Result](screenshots/result.png) |

---

## 🔒 Authentication & localStorage

- Auth flow uses `quizUserEmail`, `quizUsers[]`, and `quizUserLoggedIn` in `localStorage`.
- Ensures only logged-in users can access quiz and profile pages.
- Each user sees **only their profile** data.
- Data is safely retained until cleared from browser.

---

## 🏆 Leaderboard & Streak Logic

- Scores are ranked by **percentage** in the **Top 5 Leaderboard**.
- Each quiz session updates the leaderboard if eligible.
- **Daily streaks** are tracked using the current and previous quiz dates and shown after completion.

---

## 🚀 How to Use

1. **Clone or Download** this repository.
2. Open `index.html` in any browser (or use VS Code Live Server).
3. Register a new account or login using existing credentials.
4. Select your quiz **category** and **difficulty**.
5. Complete the quiz and view your **results, feedback, and leaderboard**.
6. Access your **profile**, edit details, or logout.

---

## 📌 Author

- **Indhuja K**
- [GitHub Profile](https://github.com/Indhuja-k)
- [Mail id](mailto:indhujakandhasamy@example.com)




