// auth.js

// Registration
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration successful. You can now login.");
  window.location.href = "login.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    alert("Login successful!");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
});