headerBackground = document.querySelector(".intro");

document.addEventListener("DOMContentLoaded", () => {
  changeHeaderBackground();
});

let colorNow = 0;
function changeHeaderBackground() {
  headerBackground.style.background = `url("/assets/background/${
    colorNow + 1
  }.png") no-repeat center center/cover`;
  setTimeout(() => {
    colorNow++;
    if (colorNow >= 6) {
      colorNow = 0;
    }
    changeHeaderBackground();
  }, 1500);
}
