headerBackground = document.querySelector(".intro");

document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("toggler");
  const navBar = document.getElementById("nav-bar");

  toggler.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });

  changeHeaderBackground();
});

let colorNow = 0;
function changeHeaderBackground() {
  headerBackground.style.background = `url("assets/background/${
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
