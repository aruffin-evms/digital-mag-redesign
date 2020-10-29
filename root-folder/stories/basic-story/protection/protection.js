// intersection observer for page animations
// animate-vertical
// aniamte-left
// animate-right
const slideElementsUp = document.querySelectorAll(".animate-vertical");
const prevSlide = document.getElementById('prevSlide')
const nextSlide = document.getElementById('nextSlide')
const maskCarousel = document.getElementById("maskCarousel");
// const modals = document.querySelectorAll(".modal");
const slideModal = document.getElementById("slideModal");
const steps = document.getElementById("steps");
const closeModal = document.getElementById('closeModal')
const slides = document.querySelectorAll(".modal__slides");
const slideOne = document.querySelector(".slide-one__modal");
const slideTwo = document.querySelector(".slide-two__modal");
const slideThree = document.querySelector(".slide-three__modal");
const slideFour = document.querySelector(".slide-four__modal");
const slideFive = document.querySelector(".slide-five__modal");
const slideFiveB = document.querySelector(".slide-five-b__modal");
const slideSix = document.querySelector(".slide-six__modal");
const slideSeven = document.querySelector(".slide-seven__modal");
const slideEight = document.querySelector(".slide-eight__modal");
const slideEightB = document.querySelector(".slide-eight-b__modal");
const slideEightC = document.querySelector(".slide-eight-c__modal");
const slideNine = document.querySelector(".slide-nine__modal");
const slideTen = document.querySelector(".slide-ten__modal");
const slideEleven = document.querySelector(".slide-eleven__modal");
const modalWrapper = document.getElementById('modalWrapper')

// const modalSlides = {
//   slideOne: document.getElementById('slideOne'),
//   slideTwo: document.getElementById('slideTwo'),
//   slideThree: document.getElementById('slideThree'),
//   slideFour: document.getElementById('slideFour'),
//   slideFive: document.getElementById('slideFive'),
//   slideFiveB: document.getElementById('slideFiveB'),
//   slideSix: document.getElementById('slideSix'),
//   slideSeven: document.getElementById('slideSeven'),
//   slideEight: document.getElementById('slideEight'),
//   slideEightB: document.getElementById('slideEightB'),
//   slideEightC: document.getElementById('slideEightC'),
//   slideNine: document.getElementById('slideNine'),
//   slideTen: document.getElementById('slideTen'),
//   slideEleven: document.getElementById('slideEleven')
// }

const config = {
  threshold: [0.7],
};

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("slide-up");
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsUp.forEach((element) => {
  observer.observe(element);
}, config);

const slideElementsLeft = document.querySelectorAll(".animate-left");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("slide-left");
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsLeft.forEach((element) => {
  observer.observe(element);
}, config);

const slideElementsRight = document.querySelectorAll(".animate-right");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("slide-right");
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsRight.forEach((element) => {
  observer.observe(element);
}, config);

steps.addEventListener("click", function () {
  showSlide(slideOne);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log(n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  console.log('index ' + n)
  console.log('slides array ' + slides.length)

  if (n > slides.length) {
    slideIndex = 1;
    // hideBackArrow()
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  if(n === 1) {
    hideBackArrow()
  } else {
    showBackArrow()
  }

  if(n === slides.length) {
    hideNextArrow()
  } else {
    showNextArrow()
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

closeModal.addEventListener('click', function() {
  modalWrapper.style.display ='none'
})

steps.addEventListener('click', function() {
  modalWrapper.style.display ='flex'
})

function hideBackArrow() {
  prevSlide.style.display = 'none'
}

function showBackArrow() {
  prevSlide.style.display = 'block'
} 

function hideNextArrow() {
  nextSlide.style.display = 'none'
}

function showNextArrow() { 
  nextSlide.style.display ='block'
}