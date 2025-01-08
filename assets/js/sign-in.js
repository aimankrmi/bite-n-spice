document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the form is valid
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email.value && password.value) {
      // Redirect to the homepage if form is valid
      alert("Account login successfully!");
      window.location.href = "../index.html";
    } else {
      // Show validation messages if form is invalid
      if (!email.value) {
        email.setCustomValidity("Please fill in your email.");
      }
      if (!password.value) {
        password.setCustomValidity("Please fill in your password.");
      }
    }
  });
