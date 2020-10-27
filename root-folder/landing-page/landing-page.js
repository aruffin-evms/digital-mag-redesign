const mobileIcon = document.getElementById('mobileIcon')
const sideNav = document.getElementById('sideNav')

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

const expandList = document.getElementById('expandList')
const featuresList = document.getElementById('featuresList')

const toggleSubnav = document.getElementById('toggleSubnav')
const subnav = document.getElementById('subnav')

const toggleFeatureNav = document.getElementById('toggleFeatureNav')
const toggleDepartmentNav = document.getElementById('toggleDepartmentNav')


const featureMenu = document.getElementById('featureMenu')
const departmentMenu = document.getElementById('departmentMenu')

const animationVideo = document.getElementById('animationVideo')

const colors = {
  evmsRust: '#c7531e'
}

const backArrow = document.getElementById('backArrow')
const forwardArrow = document.getElementById('forwardArrow')

const carousel = document.querySelector('.landing-page__stories-carousel__carousel__wrapper')

const scrollDistance = 200;

let clickCount = 0;

let browserWidth = window.innerWidth

console.log('width: ' + window.innerWidth)



// todo: create function that checks scroll position for looping carousel
backArrow.addEventListener('click', function() {
  carousel.scrollLeft -= scrollDistance

  clickCount--

  console.log(clickCount)

  // if(3 > clickCount > 0) {
  //   backArrow.style.display = 'none'
  //   forwardArrow.style.display = 'block'
  // }
})

forwardArrow.addEventListener('click', function() {
  carousel.scrollLeft += scrollDistance

  clickCount++ 

  console.log(clickCount)

  // if(clickCount == 3) {
  //   forwardArrow.style.display = 'none'
  // }

  // if(clickCount > 0) {

  // }
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
      console.log('intersection ratio ' + entry.intersectionRatio)
      console.log('intersection rect ' + entry.intersectionRect)
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
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-left');
      console.log('intersection ratio ' + entry.intersectionRatio)
      console.log('intersection rect ' + entry.intersectionRect)
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
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-right');
      console.log('intersection ratio ' + entry.intersectionRatio)
      console.log('intersection rect ' + entry.intersectionRect)
    } else {
      // entry.target.classList.remove('slide-up');
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
    console.log('qoute')
  }
});


observer.observe(slideQoute)

mobileIcon.addEventListener('click', function() {
  this.classList.toggle('icon-transform')
  sideNav.style.width = "300px";
  mobileIcon.style.position = 'absolute'
  
  if(!this.classList.contains('icon-transform')) {
    sideNav.style.width = 0
    mobileIcon.style.marginRight = '300px'
    mobileIcon.style.transition = 'margin-right 1s'
  }
})

expandList.addEventListener('click', function() {
  console.log(this.innerHTML)
  if(this.innerHTML === 'expand_more') {
    this.innerHTML = 'expand_less'
    showList(featuresList)
  } else {
    this.innerHTML = 'expand_more'
    hideList(featuresList)
  }
})

function showList(list) {
  list.style.display = 'block'
  list.style.height = '200px'
  list.style.opacity = '1'
}

function hideList(list) {
  list.style.display = 'none'
  list.style.height = '0px'
}


toggleSubnav.addEventListener('click', function() {
  if(this.innerHTML === 'expand_more') {
    this.innerHTML = 'expand_less'
    showSubnav()
  } else {
    this.innerHTML = 'expand_more'
    hideSubnav()
  }
})

function showSubnav() {
  subnav.style.height = '50px'
}

function hideSubnav() {
  subnav.style.height = '0'
}

toggleFeatureNav.addEventListener('click', function() {
  hideMenu(departmentMenu)
  if(this.innerHTML === 'expand_more') {
    this.innerHTML = 'expand_less'
    showMenu(featureMenu)
  } else {
    this.innerHTML = 'expand_more'
    hideMenu(featureMenu)
  }
})

toggleDepartmentNav.addEventListener('click', function() {
  hideMenu(featureMenu)
  if(this.innerHTML === 'expand_more') {
    this.innerHTML = 'expand_less'
    showMenu(departmentMenu)
  } else {
    this.innerHTML = 'expand_more'
    hideMenu(departmentMenu)
  }
})

function showMenu(menu) {
 menu.style.maxHeight = '500px'
  // featureMenu.style.transition = 'height 1s'
  console.log('show feature')
}

function hideMenu(menu) {
  menu.style.maxHeight = '0'
}


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