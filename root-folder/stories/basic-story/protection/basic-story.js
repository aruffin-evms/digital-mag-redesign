// intersection observer for page animations
// animate-vertical
// aniamte-left 
// animate-right
const slideElementsUp = document.querySelectorAll('.animate-vertical');
const nextThumbnail = document.getElementById('nextThumbnail')
const prevThumbnail = document.getElementById('prevThumbnail')
const maskCarousel = document.getElementById('maskCarousel')
const slideModal = document.getElementById('slideModal') 
const steps = document.querySelectorAll('.basic-story__mask-steps__thumbnail-wrapper')
const closeModal = document.getElementById('closeModal')
const slides = document.querySelectorAll('.modal__slides')
const slideOne = document.getElementById('slideOne')

const modalSlides = {
  slideOne: '../../../assets/slide-picture1@2x.jpg',
  slideTwo: '../../../assets/slide-picture2@2x.jpg',
  slideThree: '../../../assets/slide-picture3@2x.jpg',
  slideFour: '../../../assets/slide-picture4@2x.jpg',
  slideFive: '../../../assets/slide-picture5@2x.jpg',
  slideFiveB: '../../../assets/slide-picture5b@2x.jpg',
  slideSix: '../../../assets/slide-picture6@2x.jpg',
  slideSeven: '../../../assets/slide-picture7@2x.jpg',
  slideEight: '../../../assets/slide-picture8@2x.jpg',
  slideEightB: '../../../assets/slide-picture8b@2x.jpg',
  slideEightC: '../../../assets/slide-picture8c@2x.jpg',
  slideNine: '../../../assets/slide-picture9@2x.jpg',
  slideTen: '../../../assets/slide-picture10@2x.jpg',
  slideEleven: '../../../assets/slide-picture11@2x.jpg'
}


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

function newSlide(n) {
  showSteps((slideIndex += n));
}

function currentSlide(n) {
  return showSteps(slideIndex = n);
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
          showModal()
          showSlide(modalSlides.slideOne)
          break;
          
        case 'stepTwo':
          showModal()
          showSlide(modalSlides.slideTwo)
          break;

        case 'stepThree':
          showModal()
          showSlide(modalSlides.slideThree)
          break;

        case 'stepFour':
          showModal()
          showSlide(modalSlides.slideFour)
          break;

        case 'stepFive':
          showModal()
          showSlide(modalSlides.slideFive)
          break;

        case 'stepFiveB':
          showModal()
          showSlide(modalSlides.slideFiveB)
          break;

        case 'stepSix':
          showModal()
          showSlide(modalSlides.slideSix)
          break;

        case 'stepSeven':
          showModal()
          showSlide(modalSlides.slideSeven)
          break;

        case 'stepEight':
          showModal()
          showSlide(modalSlides.slideEight)
          break;

        case 'stepEightB':
          showModal()
          showSlide(modalSlides.slideEightB)
          break;

        case 'stepEightC':
          showModal()
          showSlide(modalSlides.slideEightC)
          break;

        case 'stepNine':
          showModal()
          showSlide(modalSlides.slideNine)
          break;

        case 'stepTen':
          showModal()
          showSlide(modalSlides.slideTen)
          break;

        case 'stepEleven':
          showModal()
          showSlide(modalSlides.slideEleven)
          break;

        default:
          break;
      }
    })
  });
}

handleCurrentSlide()

function showModal() {
  slideModal.style.display = 'block'
  // html.style.overflow = "hidden";
}

function hideModal() {
  slideModal.style.display = 'none'
}

function showSlide(slide) {
  slide.style.display = 'block'

  // if(!slide) {
  //   console.log('not')
  //   slide.style.display = 'none'
  // }
}

const scrollDistance = 500;

nextThumbnail.addEventListener('click', function() {
  maskCarousel.scrollLeft += scrollDistance
})

prevThumbnail.addEventListener('click', function() {
  maskCarousel.scrollLeft -= scrollDistance
})

closeModal.addEventListener('click', hideModal)