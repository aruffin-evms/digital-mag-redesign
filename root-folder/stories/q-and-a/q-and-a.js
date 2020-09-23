// intersection observer for page animations
// animate-vertical
// aniamte-left 
// animate-right
const slideElementsUp = document.querySelectorAll('.animate-vertical');

const config = {
  threshold: [0.9]
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