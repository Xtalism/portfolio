document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("a[href='#']");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      switch (button.id) {
        case "linkedin-button":
          window.open("https://linkedin.com/in/manuelpinao", "_blank");
          break;
        case "github-button":
          window.open("https://github.com/Xtalism", "_blank");
          break;
        case "instagram-button":
          window.open("https://www.instagram.com/xtalismo/", "_blank");
          break;
        case "twitter-button":
          window.open("https://x.com/Xtalism_", "_blank");
          break;
        default:
          console.log("No matching link found.");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var panels = document.querySelectorAll("div[class='project']");

  panels.forEach(function (panel) {
    panel.addEventListener("click", function (event) {
      event.preventDefault();
      switch (panel.id) {
        case "fault-detection":
          window.open("https://github.com/Xtalism/object-detection", "_blank");
          break;
        case "portfolio":
          window.open(
            "https://github.com/Xtalism",
            "_blank"
          );
          break;
        case "robotic-arm":
          window.open(
            "https://github.com/Xtalism/aero-pid-controller",
            "_blank"
          );
          break;
        default:
          console.log("No matching link found.");
      }
    });
  });
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});