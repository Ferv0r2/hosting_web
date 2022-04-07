const toggleBtn = document.querySelector(".nav_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const lang = document.querySelector(".lang");

const modal_evol = document.querySelector("#modal_evol");
const modal_potion = document.querySelector("#modal_potion");
const modal_mix = document.querySelector("#modal_mix");
const modal_mining = document.querySelector("#modal_mining");

const modal_evol_active = document.querySelector("#btn_modal_evol");
const modal_potion_active = document.querySelector("#btn_modal_potion");
const modal_mix_active = document.querySelector("#btn_modal_mix");
const modal_mining_active = document.querySelector("#btn_modal_mining");

const faq_01_btn = document.querySelector(".faq_01_btn");
const faq_02_btn = document.querySelector(".faq_02_btn");
const faq_03_btn = document.querySelector(".faq_03_btn");
const faq_04_btn = document.querySelector(".faq_04_btn");
const faq_05_btn = document.querySelector(".faq_05_btn");
const faq_06_btn = document.querySelector(".faq_06_btn");

const faq_answer_01 = document.querySelector(".answer_01");
const faq_answer_02 = document.querySelector(".answer_02");
const faq_answer_03 = document.querySelector(".answer_03");
const faq_answer_04 = document.querySelector(".answer_04");
const faq_answer_05 = document.querySelector(".answer_05");
const faq_answer_06 = document.querySelector(".answer_06");

// Modal Evol
modal_evol.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal")) {
    modal_evol.style.display = "none";
  }
});

modal_evol_active.addEventListener("click", () => {
  modal_evol.style.display = "block";
});

// Modal Potion
modal_potion.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal")) {
    modal_potion.style.display = "none";
  }
});

modal_potion_active.addEventListener("click", () => {
  modal_potion.style.display = "block";
});

// Modal Mix
modal_mix.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal")) {
    modal_mix.style.display = "none";
  }
});

modal_mix_active.addEventListener("click", () => {
  modal_mix.style.display = "block";
});

// Modal Mining
modal_mining.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal")) {
    modal_mining.style.display = "none";
  }
});

modal_mining_active.addEventListener("click", () => {
  modal_mining.style.display = "block";
});

// Modal Close
window.addEventListener("keyup", (e) => {
  if (modal_evol.style.display === "block" && e.key === "Escape") {
    modal_evol.style.display = "none";
  } else if (modal_potion.style.display === "block" && e.key === "Escape") {
    modal_potion.style.display = "none";
  } else if (modal_mix.style.display === "block" && e.key === "Escape") {
    modal_mix.style.display = "none";
  } else if (modal_mining.style.display === "block" && e.key === "Escape") {
    modal_mining.style.display = "none";
  }
});

// Hamburger
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  lang.classList.toggle("active");
});

// FAQ
faq_01_btn.addEventListener("click", () => {
  faq_answer_01.classList.toggle("active");
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

faq_06_btn.addEventListener("click", () => {
  faq_answer_06.classList.toggle("active");
});

// Animation
// const saTriggerMargin = 75;
// const saElementList = document.querySelectorAll(".sa");
// const saFunc = function () {
//   for (const element of saElementList) {
//     if (!element.classList.contains("show")) {
//       if (
//         window.innerHeight >
//         element.getBoundingClientRect().top + saTriggerMargin
//       ) {
//         element.classList.add("show");
//       }
//     }
//   }
// };

// window.addEventListener("load", saFunc);
// window.addEventListener("scroll", saFunc);
