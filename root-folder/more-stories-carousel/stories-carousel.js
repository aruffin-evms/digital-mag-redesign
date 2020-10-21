const scrollDistance = 500;
const storyCarousel = document.getElementById('storyCarousel')
const nextThumbnail = document.getElementById('nextThumbnail')
const prevThumbnail = document.getElementById('prevThumbnail')

nextThumbnail.addEventListener('click', function() {
  storyCarousel.scrollLeft += scrollDistance
})

prevThumbnail.addEventListener('click', function() {
  storyCarousel.scrollLeft -= scrollDistance
})