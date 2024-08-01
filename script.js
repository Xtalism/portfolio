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
