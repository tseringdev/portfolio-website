// ==========================
// Mobile Menu Toggle
// ==========================
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}