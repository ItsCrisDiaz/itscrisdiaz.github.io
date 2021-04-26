const HAMBURGER_BUTTON = document.querySelector(".hamburger");
const MENU_CONTAINER = document.querySelector(".menu");
const MENU_LINKS = document.querySelectorAll(".header li");
const HTML = document.getElementsByTagName("html");

export const menuAnimation = function () {
  HAMBURGER_BUTTON.addEventListener("click", function () {
    this.classList.toggle("active");
    MENU_CONTAINER.classList.toggle("active");

    if (HAMBURGER_BUTTON.classList.contains("active")) {
      HTML[0].style.overflow = "hidden";
    } else {
      HTML[0].style.overflow = "visible";
    }
  });
  MENU_LINKS.forEach((element) => {
    element.addEventListener("click", function () {
      HAMBURGER_BUTTON.classList.toggle("active");
      MENU_CONTAINER.classList.toggle("active");

      if (HAMBURGER_BUTTON.classList.contains("is-active")) {
        HTML[0].style.overflow = "hidden";
      } else {
        HTML[0].style.overflow = "visible";
      }
    });
  });
};
