document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-btn button");
  const popup = document.getElementById("popup");
  const closePopup = popup.querySelector(".close");
  const menu = document.querySelector("#menu-bar");
  const nav = document.getElementById("nav");

  loginButton.addEventListener("click", function () {
    popup.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  menu.addEventListener("click", function () {
    menu.classList.toggle("change");
    nav.classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  });

  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }

  // Close navbar when clicking outside
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menu.contains(event.target)) {
      nav.classList.remove("change");
      menu.classList.remove("change");
      document.getElementById("menu-bg").classList.remove("change-bg");
    }
  });

  showSlides();
});
