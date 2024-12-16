let closeMenu = document.querySelector(".close-menu");
let menuBar = document.querySelector(".menu-bar");
let desktopNav = document.querySelector(".desktop-nav");
let mobileNav = document.querySelector(".nav-mobile");
let mobileNavList = document.querySelector(".nav-mobile .nav-list");

openNav = () => {
  desktopNav.style.display = "none";
  mobileNav.style.height = "auto";
  mobileNavList.style.display = "flex";
};

closeNav = () => {
  //   desktopNav.style.display = "block";
  mobileNav.style.height = "0";
  desktopNav.style.display = "flex";
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 550) {
    closeNav();
  }
});

closeMenu.addEventListener("click", closeNav);
menuBar.addEventListener("click", openNav);
