function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

fdocument.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    var nav = document.querySelector("nav");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50 && scrollPosition != 0) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }

  // Initial call to handleScroll to set the initial state
  handleScroll();

  // Add the scroll event listener
  window.addEventListener("scroll", handleScroll);
});
