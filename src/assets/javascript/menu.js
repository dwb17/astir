var hamburger = document.querySelector(".hamburger");
var logo = document.querySelector(".logo-wrapper");
var navigation = document.getElementById("navigation");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-enabled");
  logo.classList.toggle("is-menu-open");
});
