const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

const faq_01_btn = document.querySelector(".faq_01_btn");
const faq_02_btn = document.querySelector(".faq_02_btn");
const faq_03_btn = document.querySelector(".faq_03_btn");
const faq_04_btn = document.querySelector(".faq_04_btn");
const faq_05_btn = document.querySelector(".faq_05_btn");

const faq_answer_01 = document.querySelector(".answer_01");
const faq_answer_02 = document.querySelector(".answer_02");
const faq_answer_03 = document.querySelector(".answer_03");
const faq_answer_04 = document.querySelector(".answer_04");
const faq_answer_05 = document.querySelector(".answer_05");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

faq_01_btn.addEventListener("click", () => {
  faq_answer_01.classList.toggle("active");
  faq_btn.classList.toggle("active");
});

faq_02_btn.addEventListener("click", () => {
  faq_answer_02.classList.toggle("active");
});

faq_03_btn.addEventListener("click", () => {
  faq_answer_03.classList.toggle("active");
});

faq_04_btn.addEventListener("click", () => {
  faq_answer_04.classList.toggle("active");
});

faq_05_btn.addEventListener("click", () => {
  faq_answer_05.classList.toggle("active");
});
