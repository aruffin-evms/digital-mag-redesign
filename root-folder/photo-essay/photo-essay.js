
let slideIndex = 1;

showSection(slideIndex);

function showSection(n) {
  if (n > sections.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sections.length;
  }

  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  sections[slideIndex - 1].style.display = "block";
}

function newSlide(n) {
  showSection((slideIndex += n));
}