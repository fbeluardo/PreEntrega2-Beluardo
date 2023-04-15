function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // perform authentication here
    if (username === "example" && password === "password") {
      sessionStorage.setItem("loggedIn", true);
      alert("Login successful!");
      // redirect to protected page
      window.location.href = "protected.html";
    } else {
      alert("Invalid username or password");
    }
  }
  