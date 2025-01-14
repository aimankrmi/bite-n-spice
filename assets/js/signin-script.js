document
  .getElementById("btn-register")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const signInContainer = document.getElementById("sign-in-container");
    const imgBg = document.getElementById("food-image");
    currentView = "signUp";
    if (window.innerWidth < 768) {
      signInContainer.style.transform = "translateY(-100%)";
    } else {
      imgBg.style.transform = "translateX(100%)";
    }
    updateView();
  });
let currentView = "signin"; // Default to signup view

// Handle "Sign-Up" button click
document
  .getElementById("sign-up-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const uname = document.forms["register-form"]["uname"].value;
    const email = document.forms["register-form"]["email"].value;
    const password = document.forms["register-form"]["pswd"].value;
    const dob = document.forms["register-form"]["dob"].value;

    if (uname === "" || email === "" || password === "" || dob === "") {
      alert("Please fill in all fields");
      return false;
    } else {
      alert("Account created successfully");
      document.forms["register-form"].reset();
      currentView = "signin"; // Switch to sign-in view
      updateView(); // Update the view
    }
  });

// Handle "Have an account? Log in now!" button click
document
  .getElementById("btn-go-to-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    currentView = "signin"; // Switch to sign-in view
    updateView(); // Update the view
  });

// Handle "Login" button click
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.forms["login-form"]["login-email"].value;
    const password = document.forms["login-form"]["login-password"].value;

    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    } else {
      alert("Login successful");
      window.location.href = "../index.html";
    }
  });

// Function to update the view based on the current state and screen size
function updateView() {
  const signInContainer = document.getElementById("sign-in-container");
  const signUpContainer = document.querySelector(".sign-up-container");
  const imgBg = document.getElementById("food-image");

  if (window.innerWidth < 768) {
    // Mobile view adjustments
    if (currentView === "signin") {
      signInContainer.style.transform = "translateY(0)";
      signUpContainer.style.transform = "translateY(100%)";
      signInContainer.style.display = "flex"; // Ensure visibility
      signUpContainer.style.display = "flex"; // Ensure visibility for smooth transition
    } else {
      signInContainer.style.transform = "translateY(-100%)";
      signUpContainer.style.transform = "translateY(0)";
      signInContainer.style.display = "flex"; // Ensure visibility
      signUpContainer.style.display = "flex"; // Ensure visibility for smooth transition
    }
  } else {
    signInContainer.style.transform = "translateY(0)";
    signUpContainer.style.transform = "translateY(0)";

    // Desktop view adjustments
    if (currentView === "signin") {
      imgBg.style.transform = "translateX(0)";

      signInContainer.style.display = "flex";
      signUpContainer.style.display = "none";
    } else {
      imgBg.style.transform = "translateX(100%)";
      signInContainer.style.display = "none";
      signUpContainer.style.display = "flex";
    }
  }
}

// Check screen width and update the view on resize
function checkScreenWidth() {
  updateView(); // Ensure the view is consistent with the current state
}

// Initial screen check
updateView();

// Add event listener for window resize
window.addEventListener("resize", checkScreenWidth);
