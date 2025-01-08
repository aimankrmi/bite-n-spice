document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Account created successfully!");
    window.location.href = "sign-in.html"; // Redirect to sign-in.html
  });
