const expandList = document.getElementById('expandList')
const featuresList = document.getElementById('featuresList')

const toggleSubnav = document.getElementById('toggleSubnav')
const subnav = document.getElementById('subnav')

const toggleFeatureNav = document.getElementById('toggleFeatureNav')
const toggleDepartmentNav = document.getElementById('toggleDepartmentNav')


const featureMenu = document.getElementById('featureMenu')
const departmentMenu = document.getElementById('departmentMenu')

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