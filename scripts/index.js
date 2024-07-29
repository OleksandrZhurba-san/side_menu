const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.querySelectorAll(".menu__item");

function toggleSubMenu(target) {
  target.nextElementSibling.classList.toggle("toggle-sub-menu");
}

function toggleMenu() {
  navMenu.classList.toggle("nav-menu--open");
}
openMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

closeMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", (event) => {
  if (
    navMenu.classList.contains("nav-menu--open") &&
    !navMenu.contains(event.target)
  ) {
    toggleMenu();
  }
});

document.onkeyup = (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("nav-menu--open")) {
    toggleMenu();
  }
};

menuItem.forEach((e) => {
  e.addEventListener("click", (event) => {
    // e.stopPropagation();
    toggleSubMenu(event.target);
  });
});
