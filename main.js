const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

const faq_btn_01 = document.querySelector(".faq01");
const faq_btn_02 = document.querySelector(".faq02");
const faq_btn_03 = document.querySelector(".faq03");
const faq_btn_04 = document.querySelector(".faq04");
const faq_btn_05 = document.querySelector(".faq05");

const faq_answer_01 = document.querySelector(".answer01");
const faq_answer_02 = document.querySelector(".answer02");
const faq_answer_03 = document.querySelector(".answer03");
const faq_answer_04 = document.querySelector(".answer04");
const faq_answer_05 = document.querySelector(".answer05");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

faq_btn_01.addEventListener("click", () => {
  faq_answer_01.classList.toggle("active");
  faq_btn.classList.toggle("active");
});

faq_btn_02.addEventListener("click", () => {
  faq_answer_02.classList.toggle("active");
});

faq_btn_03.addEventListener("click", () => {
  faq_answer_03.classList.toggle("active");
});

faq_btn_04.addEventListener("click", () => {
  faq_answer_04.classList.toggle("active");
});

faq_btn_05.addEventListener("click", () => {
  faq_answer_05.classList.toggle("active");
});
