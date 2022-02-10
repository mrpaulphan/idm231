const toggleButton = document.querySelector(".js-toggle");

toggleButton.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
});
