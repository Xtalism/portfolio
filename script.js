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
          window.open("https://www.youtube.com/watch?v=UqHILyzcULE&t=1817s&ab_channel=HowtoWebDev", "_blank");
          break;
        case "robotic-arm":
          window.open("https://github.com/Xtalism/aero-pid-controller", "_blank");
          break;
        default:
          console.log("No matching link found.");
      }
    });
  });
});
