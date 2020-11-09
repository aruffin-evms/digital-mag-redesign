const qouteDrawer = document.getElementById('qouteDrawer')
const qouteDrawerInitialHeight = qouteDrawer.style.height;
const qouteText = document.getElementById('qouteText')
const qouteSource = document.getElementById('qouteSource')

const storyLink = document.getElementById('storyLink')

const gridStories  = document.querySelectorAll('.landing-page__featured-stories__grid-item__wrapper')
const gridLinks = document.querySelectorAll('.landing-page__featured-stories__link')
const gridItemTitles = document.getElementsByTagName('h3')
const gridItemContent = document.querySelector('.landing-page__featured-stories__grid-item__content-wrapper')

const additionalStories = document.querySelectorAll('.landing-page__story-block')

const animationVideo = document.getElementById('animationVideo')

const colors = {
  evmsRust: '#c7531e'
}

const backArrow = document.getElementById('backArrow')
const forwardArrow = document.getElementById('forwardArrow')

const carousel = document.querySelector('.landing-page__stories-carousel__carousel__wrapper')

const scrollDistance = 250;

function hideArrows(slider) {
  if(slider.scrollLeft >= 370) {
    backArrow.style.visibility = 'visible'
    forwardArrow.style.visibility = 'hidden'
  } 
  
  if(slider.scrollLeft <= 10) {
    backArrow.style.visibility = 'hidden'
    forwardArrow.style.visibility = 'visible'
  }
}

hideArrows(carousel)

backArrow.addEventListener('click', function() {
  carousel.scrollLeft -= scrollDistance

  if(carousel.scrollLeft <= 20) {
    backArrow.style.visibility = 'hidden'
  } else {
    forwardArrow.style.visibility = 'visible'
  }
})

forwardArrow.addEventListener('click', function() {
  carousel.scrollLeft += scrollDistance

  if(carousel.scrollLeft >= 350) {
    forwardArrow.style.visibility = 'hidden'
  } else {
    backArrow.style.visibility = 'visible'
  }
})

qouteDrawer.addEventListener('click', function() {
  if(qouteDrawer.style.height === qouteDrawerInitialHeight) {
    qouteDrawer.style.height = '150px';
    showQouteText('block')
  } else {
    qouteDrawer.style.height = qouteDrawerInitialHeight
    showQouteText('none')
  }
})


function showQouteText(display) {
  qouteText.style.display = display
  qouteText.style.animation = '2.9s fadeIn'
  qouteSource.style.display = display
  qouteSource.style.animation = '3.3s fadeIn'

  if(qouteText.style.display === 'none') {
    qouteText.style.animation = '1s fadeOut'
  }
}

gridStories.forEach(function(story) {
  story.addEventListener('mouseover', function() {
    story.getElementsByTagName('figure')[0].style.boxShadow = `0 -5px 0 ${colors.evmsRust}  inset`
    
    story.onmouseout = function(event) {
      story.getElementsByTagName('figure')[0].style.boxShadow = `none`
      story.getElementsByTagName('figure')[0].style.transition = '.5s all'
    }
  })
})

additionalStories.forEach(function(story) {
  story.addEventListener('mouseover', function() {
    story.getElementsByTagName('figure')[0].style.boxShadow = `0 -5px 0 ${colors.evmsRust}  inset`
    
    story.onmouseout = function(event) {
      story.getElementsByTagName('figure')[0].style.boxShadow = `none`
      story.getElementsByTagName('figure')[0].style.transition = '.5s all'
    }
  })
})

// intersection observer for page animations
// animate-vertical
// aniamte-left 
// animate-right
const slideElementsUp = document.querySelectorAll('.animate-vertical');

const config = {
  root: null,
  rootMargin: '50px',
  threshold: [0.5]
}

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up');
      setTimeout(() => {
        animationVideo.play()
      }, 4100);
    }
  });
});

slideElementsUp.forEach(element => {
  observer.observe(element);
}, config);

const slideElementsLeft = document.querySelectorAll('.animate-left');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-left');
    }
  });
});

slideElementsLeft.forEach(element => {
  observer.observe(element);
}, config);

const slideElementsRight = document.querySelectorAll('.animate-right');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-right');
    }
  });
});


slideElementsRight.forEach(element => {
  observer.observe(element);
}, config);

const slideQoute = document.querySelector('.animate-qoute-left');

observer = new IntersectionObserver(entry => {
  if(entry.isIntersecting) {
    entry.target.classList.add('animate-qoute')
  }
});


observer.observe(slideQoute)

window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 75,
    color: ['#4bacb8', '#4bacb8'],
    minDistance: 150,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 900,
        options: {
          maxParticles: 100
        }
      },
      {
        breakpoint: 600,
        options: {
          maxParticles: 25
        }
      }
    ] 
  });
};