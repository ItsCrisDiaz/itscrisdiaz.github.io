const NAV_BUTTON = document.querySelector(".navbar__button");
const CONTENT_MENU = document.querySelector(".blog-navbar");
const CONTENT_LINKS = document.querySelectorAll(".blog-navbar li");
const CONTENT_MENU_SHADOW = document.querySelector(".blog-navbar__shadow");
const HTML = document.getElementsByTagName("html");

const addActiveClass = function () {
  NAV_BUTTON.classList.toggle("active");
  CONTENT_MENU.classList.toggle("active");
  if (NAV_BUTTON.getAttribute("aria-expanded") === "true") {
    NAV_BUTTON.setAttribute("aria-expanded", "false");
  } else {
    NAV_BUTTON.setAttribute("aria-expanded", "true");
  }
};

const switchOverflowHTML = function () {
  if (NAV_BUTTON.classList.contains("active")) {
    HTML[0].style.overflow = "hidden";
  } else {
    HTML[0].style.overflow = "visible";
  }
};

const addClassTrigger = function () {
  NAV_BUTTON.addEventListener("click", function () {
    addActiveClass();
    switchOverflowHTML();
  });

  CONTENT_MENU_SHADOW.addEventListener("click", function () {
    addActiveClass();
    switchOverflowHTML();
  });

  CONTENT_LINKS.forEach((element) => {
    element.addEventListener("click", function () {
      addActiveClass();
      HTML[0].style.overflow = "visible";
    });
  });
};

addClassTrigger();
