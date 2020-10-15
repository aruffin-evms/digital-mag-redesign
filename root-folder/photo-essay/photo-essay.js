
const slides = document.getElementsByClassName("photo-essay__slide");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

let slideIndex = 1;

showSection(slideIndex);

function showSection(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  // slides[slideIndex - 1].classList.add('fadeIn')
}

function newSlide(n) {
  showSection((slideIndex += n));
}