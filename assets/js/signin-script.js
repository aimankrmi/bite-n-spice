document
  .getElementById("sign-up-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const signInContainer = document.getElementById("sign-in-container");
    const imgBg = document.getElementById("food-image");
    const uname = document.forms["register-form"]["uname"].value;
    const email = document.forms["register-form"]["email"].value;
    const password = document.forms["register-form"]["pswd"].value;
    const dob = document.forms["register-form"]["dob"].value;
    const nama = document.getElementById("uname");
    const emel = document.getElementById("email");
    const pswd = document.getElementById("pswd");
    const dob1 = document.getElementById("dob");
    if (uname == "" || email == "" || password == "" || dob == "") {
      alert("Please fill in all fields");
      return false;
    } else {
      if (imgBg.style.transform === "translateX(100%)") {
        // Move image to the right
        alert("Account created successfully");
        imgBg.style.transform = "translateX(0)";
        nama.value = "";
        pswd.value = "";
        emel.value = "";
        dob1.value = "";
        // imgBg.classList.add("moved-back");
        // imgBg.classList.remove("moved");
      }
    }
  });
document
  .getElementById("btn-register")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const signInContainer = document.getElementById("sign-in-container");
    const imgBg = document.getElementById("food-image");
    // console.log("clicked");
    imgBg.style.transform = "translateX(100%)";
    // if (imgBg.style.transform === "translateX(0)") {
    //   // Move image to the right
    //   imgBg.style.transform = "translateX(100%)";
    //   // imgBg.classList.add("moved");
    // }
  });

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.forms["login-form"]["login-email"].value;
    const password = document.forms["login-form"]["login-password"].value;

    if (email == "" || password == "") {
      alert("Please fill in all fields");
      return false;
    } else {
      alert("Login successful");
      window.location.href = "../index.html";
    }
  });
