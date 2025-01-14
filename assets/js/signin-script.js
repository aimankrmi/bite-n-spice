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
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (uname === "" || email === "" || password === "" || dob === "") {
      alert("Please fill in all fields");
      return false;
    } else {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check for duplicate username or email
      const isDuplicate = existingUsers.some(
        (user) => user.username === uname || user.email === email
      );

      if (isDuplicate) {
        alert(
          "Username or email already exists. Please choose a different one."
        );
        return;
      }

      const userDetails = {
        username: uname,
        email: email,
        password: password,
        dob: dob,
        gender: gender,
      };

      // Save user details to local storage
      existingUsers.push(userDetails);
      localStorage.setItem("users", JSON.stringify(existingUsers));

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

    const uname = document.forms["login-form"]["login-username"].value;
    const password = document.forms["login-form"]["login-password"].value;

    if (uname === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    } else {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the username and password match
      const user = existingUsers.find(
        (user) => user.username === uname && user.password === password
      );

      if (user) {
        // Set current user in local storage
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful");
        window.location.href = "../index.html";
      } else {
        alert("Invalid username or password");
      }
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
      signUpContainer.style.transform = "translateY(-100%)";
      signUpContainer.style.display = "none";
      signInContainer.style.display = "flex";
    } else {
      signInContainer.style.transform = "translateY(-100%)";
      signUpContainer.style.transform = "translateY(0)";
      signInContainer.style.display = "none";
      signUpContainer.style.display = "flex";
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
