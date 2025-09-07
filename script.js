// Part 1: JavaScript Event Handling and Interactive Elements
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
    message.classList.toggle("hidden");
});

// Part 2: Interactive Elements
// 1. Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 2. FAQ collapse/expand
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
    faqAnswer.classList.toggle("hidden");
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

  // Simple regex for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
        feedback.textContent = "❌ Name must be at least 3 characters.";
        feedback.className = "error";
    } else if (!emailRegex.test(email)) {
        feedback.textContent = "❌ Please enter a valid email.";
        feedback.className = "error";
    } else if (password.length < 6) {
        feedback.textContent = "❌ Password must be at least 6 characters.";
        feedback.className = "error";
    } else {
        feedback.textContent = "✅ Form submitted successfully!";
        feedback.className = "success";
        form.reset();
    }
});
