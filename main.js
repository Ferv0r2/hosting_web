const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

const faq_btn = document.querySelector(".ok");
const faq_answer = document.querySelector(".answer");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

faq_btn.addEventListener("click", () => {
  faq_answer.classList.toggle("active");
});
