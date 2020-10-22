const scrollDistance = 500;
const storyCarousel = document.getElementById('storyCarousel')
const nextThumbnail = document.getElementById('nextThumbnail')
const prevThumbnail = document.getElementById('prevThumbnail')
const swipeDistance = 150

nextThumbnail.addEventListener('click', function() {
  storyCarousel.scrollLeft += scrollDistance
})

prevThumbnail.addEventListener('click', function() {
  storyCarousel.scrollLeft -= scrollDistance
})

// let touchstartX = 0
// let touchendX = 0

// function handleSwipe() {
//   if (touchendX < touchstartX) {
//     storyCarousel.scrollLeft += swipeDistance
//   }

//   if (touchendX > touchstartX) {
//     storyCarousel.scrollLeft -= swipeDistance
//   }  
// }

// storyCarousel.addEventListener('touchstart', function(e) {
//   touchstartX = e.changedTouches[0].screenX
//   handleSwipe()
// })

// storyCarousel.addEventListener('touchend',function(e) {
//   touchendX = e.changedTouches[0].screenX
//   handleSwipe()
// })