// intersection observer for page animations
// animate-vertical
// aniamte-left 
// animate-right
const slideElementsUp = document.querySelectorAll('.animate-vertical');
const nextThumbnail = document.getElementById('nextThumbnail')
const prevThumbnail = document.getElementById('prevThumbnail')
const maskCarousel = document.getElementById('maskCarousel')
const modals = document.querySelectorAll('.modal')
const steps = document.querySelectorAll('.basic-story__mask-steps__thumbnail-wrapper')
const closeModals = document.querySelectorAll('.modal__close')
const slides = document.querySelectorAll('.modal__slides')
const slideOne = document.querySelector('.slide-one__modal')
const slideTwo = document.querySelector('.slide-two__modal')
const slideThree = document.querySelector('.slide-three__modal')
const slideFour = document.querySelector('.slide-four__modal')
const slideFive = document.querySelector('.slide-five__modal')
const slideFiveB = document.querySelector('.slide-five-b__modal')
const slideSix = document.querySelector('.slide-six__modal')
const slideSeven = document.querySelector('.slide-seven__modal')
const slideEight = document.querySelector('.slide-eight__modal')
const slideEightB = document.querySelector('.slide-eight-b__modal')
const slideEightC = document.querySelector('.slide-eight-c__modal')
const slideNine = document.querySelector('.slide-nine__modal')
const slideTen = document.querySelector('.slide-ten__modal')
const slideEleven = document.querySelector('.slide-eleven__modal')


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
  threshold: [0.7]
}

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('slide-up');
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsUp.forEach(element => {
  observer.observe(element);
}, config);

const slideElementsLeft = document.querySelectorAll('.animate-left');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('slide-left');
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsLeft.forEach(element => {
  observer.observe(element);
}, config);

const slideElementsRight = document.querySelectorAll('.animate-right');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('slide-right');
    } else {
      // entry.target.classList.remove('slide-up');
    }
  });
});

slideElementsRight.forEach(element => {
  observer.observe(element);
}, config);



// logic for carousel
let slideIndex = 1;

showSteps(slideIndex);

function showSteps(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    // console.log(slides[i])
  }

  // slides[slideIndex - 1].style.display = "block";
  // steps[slideIndex - 1].classList.add('fadeIn')
}

function nextModal(slide) {
  // let modals = [
  //   '.slide-one__modal',
  //   '.slide-two__modal',
  //   '.slide-three__modal',
  //   '.slide-four__modal',
  //   '.slide-five__modal',
  //   '.slide-five-b__modal',
  //   '.slide-six__modal',
  //   '.slide-seven__modal',
  //   '.slide-eight__modal',
  //   '.slide-eight-b__modal',
  //   '.slide-eight-c__modal',
  //   '.slide-nine__modal',
  //   '.slide-ten__modal',
  //   '.slide-eleven__modal'
  // ]

  // let currentModal = index - 1;
  // console.log(current)
  let currentModal = document.querySelector(slide)
  console.log(currentModal)
  currentModal.style.display = 'block'
}

function currentSlide(n) {
  showSteps(slideIndex = n);
}

function handleThumbnailClick() {
  
}

handleThumbnailClick()

function handleCurrentSlide() {
  steps.forEach(step => {
    step.addEventListener('click', function() {
      let id = this.id
      switch (id) {
        case 'stepOne':
          // showModal()
          showSlide(slideOne)
          break;
          
        case 'stepTwo':
          // showModal()
          showSlide(slideTwo)
          break;

        case 'stepThree':
          // showModal()
          showSlide(slideThree)
          break;

        case 'stepFour':
          // showModal()
          showSlide(slideFour)
          break;

        case 'stepFive':
          // showModal()
          showSlide(slideFive)
          break;

        case 'stepFiveB':
          // showModal()
          showSlide(slideFiveB)
          break;

        case 'stepSix':
          // showModal()
          showSlide(slideSix)
          break;

        case 'stepSeven':
          // showModal()
          showSlide(slideSeven)
          break;

        case 'stepEight':
          // showModal()
          showSlide(slideEight)
          break;

        case 'stepEightB':
          // showModal()
          showSlide(slideEightB)
          break;

        case 'stepEightC':
          // showModal()
          showSlide(slideEightC)
          break;

        case 'stepNine':
          // showModal()
          showSlide(slideNine)
          break;

        case 'stepTen':
          // showModal()
          showSlide(slideTen)
          break;

        case 'stepEleven':
          // showModal()
          showSlide(slideEleven)
          break;

        default:
          break;
      }
    })
  });
}

handleCurrentSlide()

// function // showModal() {
//   modal.style.display = 'block'
// }

function hideModal() {
  modals.forEach(function(modal) {
    modal.style.display = 'none'
  })
}

function showSlide(slide) {
  // console.log(slide)
  slide.style.display = 'block'
}

const scrollDistance = 500;

nextThumbnail.addEventListener('click', function() {
  maskCarousel.scrollLeft += scrollDistance
})

prevThumbnail.addEventListener('click', function() {
  maskCarousel.scrollLeft -= scrollDistance
})

closeModals.forEach(function(closeIcon) {
  closeIcon.addEventListener('click', function() {
    hideModal()
  })
})