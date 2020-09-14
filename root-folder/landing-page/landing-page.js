const qouteDrawer = document.getElementById('qouteDrawer')
const qouteDrawerInitialHeight = qouteDrawer.style.height;
const qouteText = document.getElementById('qouteText')

const storyLink = document.getElementById('storyLink')

const gridStories  = document.querySelectorAll('.landing-page__featured-stories__grid-item__wrapper')
const gridLinks = document.querySelectorAll('.landing-page__featured-stories__link')
const gridItemTitles = document.getElementsByTagName('h3')
// const gridLinkstyleString = "text-decoration: underline;"

const colors = {
  evmsRust: '#c7531e'
}

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
  qouteText.style.animation = '1.5s fadeIn'

  if(qouteText.style.display === 'none') {
    qouteText.style.animation = '1s fadeOut'
  }
}

gridStories.forEach(function(story) {
  story.addEventListener('mouseover', function() {
    // console.log(story.getElementsByTagName('figure')[0])
    story.getElementsByTagName('figure')[0].style.boxShadow = `0 -5px 0 ${colors.evmsRust}  inset`
    
    story.onmouseout = function(event) {
      story.getElementsByTagName('figure')[0].style.boxShadow = `none`
      story.getElementsByTagName('figure')[0].style.transition = '.5s all'
    }
  })
})