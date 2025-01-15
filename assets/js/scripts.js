headerBackground = document.querySelector(".intro");

document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("toggler");
  const navBar = document.getElementById("nav-bar");

  toggler.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
  if (headerBackground) {
    changeHeaderBackground();
  }
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
document.addEventListener("DOMContentLoaded", function () {
  const signInLink = document.getElementById("sign-in-link");

  signInLink.addEventListener("click", function (event) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      event.preventDefault(); // Prevent the default link behavior
      const stayLoggedIn = confirm(
        "You are already logged in. Do you want to log out?"
      );
      if (stayLoggedIn) {
        // User chose to log out
        localStorage.removeItem("currentUser");
        alert("You have been logged out.");
      }
    }
  });
});
