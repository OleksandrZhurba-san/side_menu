const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");

navMenu.classList.toggle("display-none");

openMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("display-none");
});

closeMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("display-none");
});

document.addEventListener("click", (e) => {
  if (
    !navMenu.classList.contains("display-none") &&
    !e.target.isEqualNode(navMenu)
  ) {
    navMenu.classList.toggle("display-none");
  }
});

document.onkeyup = (e) => {
  if (e.key === "Escape" && !navMenu.classList.contains("display-none")) {
    navMenu.classList.toggle("display-none");
  }
};
