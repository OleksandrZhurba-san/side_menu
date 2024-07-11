const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");

navMenu.classList.toggle("display-none");

openMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("display-none");
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("display-none");
});
