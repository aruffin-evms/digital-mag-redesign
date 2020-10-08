const qouteDrawer = document.getElementById('qouteDrawer')
const qouteDrawerInitialHeight = qouteDrawer.style.height;
const qouteText = document.getElementById('qouteText')
const qouteSource = document.getElementById('qouteSource')

const storyLink = document.getElementById('storyLink')

const gridStories  = document.querySelectorAll('.landing-page__featured-stories__grid-item__wrapper')
const gridLinks = document.querySelectorAll('.landing-page__featured-stories__link')
const gridItemTitles = document.getElementsByTagName('h3')
const gridItemContent = document.querySelector('.landing-page__featured-stories__grid-item__content-wrapper')

const colors = {
  evmsRust: '#c7531e'
}

const backArrow = document.getElementById('backArrow')
const forwardArrow = document.getElementById('forwardArrow')

const carousel = document.querySelector('.landing-page__stories-carousel__carousel__wrapper')

const scrollDistance = 200;

// todo: create function that checks scroll position for looping carousel
backArrow.addEventListener('click', function() {
  carousel.scrollLeft -= scrollDistance
})

forwardArrow.addEventListener('click', function() {
  carousel.scrollLeft += scrollDistance
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
    gridItemContent.style.opacity = '.3'
    
    story.onmouseout = function(event) {
      story.getElementsByTagName('figure')[0].style.boxShadow = `none`
      story.getElementsByTagName('figure')[0].style.transition = '.5s all'
      gridItemContent.style.opacity = '1'
    }
  })
})

// intersection observer for page animations
// animate-vertical
// aniamte-left 
// animate-right
const slideElementsUp = document.querySelectorAll('.animate-vertical');

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