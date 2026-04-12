const form = document.getElementById("registerForm")

form.addEventListener("submit", function(e) {
  e.preventDefault()
  window.location.href = "success.html"
})