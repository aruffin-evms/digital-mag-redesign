const expandList = document.getElementById('expandList')
const featuresList = document.getElementById('featuresList')
const toggleSubnav = document.getElementById('toggleSubnav')
const subnav = document.getElementById('subnav')
const toggleFeatureNav = document.getElementById('toggleFeatureNav')
const toggleDepartmentNav = document.getElementById('toggleDepartmentNav')
const featureMenu = document.getElementById('featureMenu')
const departmentMenu = document.getElementById('departmentMenu')
const departmentsList = document.getElementById('departmentsList')
const iconBars = document.querySelectorAll('.digital-mag__nav--mobile__icon-bar')
const categoryFeatures = document.getElementById('categoryFeatures')
const categoryDepartments = document.getElementById('categoryDepartments')
const expandAlumniList = document.getElementById('expandAlumniList')
const mobileIcon = document.getElementById('mobileIcon')
const subnavIcon = document.getElementById('subnavIcon')
const featureNavIcon = document.getElementById('featureNavIcon')
const alumniListIcon = document.getElementById('alumniListIcon')
const expandDeptList = document.getElementById('expandDeptList')
const togglePivotingNav = document.getElementById('togglePivotingNav')
const pivotingNavIcon = document.getElementById('pivotingNavIcon')
const pivotingMenu = document.getElementById('pivotingMenu') 
const categoryPivoting = document.getElementById('categoryPivoting')
const expandPivotingList = document.getElementById('expandPivotingList')
const pivotingList = document.getElementById('pivotingList')



categoryFeatures.addEventListener('click', function() {
  if(expandList.innerHTML === 'expand_more') {
    expandList.innerHTML = 'expand_less'
    showList(featuresList)
  } else {
    expandList.innerHTML = 'expand_more'
    hideList(featuresList)
  }
})

categoryDepartments.addEventListener('click', function() {
  if(expandDeptList.innerHTML === 'expand_more') {
    expandDeptList.innerHTML = 'expand_less'
    showList(departmentsList)
  } else {
    expandDeptList.innerHTML = 'expand_more'
    hideList(departmentsList)
  }
})

categoryPivoting.addEventListener('click', function() {
  if(expandPivotingList.innerHTML === 'expand_more') {
    expandPivotingList.innerHTML = 'expand_less'
    showList(pivotingList)
  } else {
    expandPivotingList.innerHTML = 'expand_more'
    hideList(pivotingList)
  }
})


function showList(list) {
  list.style.display = 'block'
  list.style.maxHeight = '200px'
  list.style.transition ='max-height 1s'
  list.style.opacity = '1'
}

function hideList(list) {
  list.style.display = 'none'
  list.style.maxHeight = '0px'
  list.style.transition ='max-height 1s'
}

toggleSubnav.addEventListener('click', function() {
  hideMenu(departmentMenu)
  hideMenu(featureMenu)
  if(subnavIcon.innerHTML === 'expand_more') {
    subnavIcon.innerHTML = 'expand_less'
    showSubnav()
  } else {
    subnavIcon.innerHTML = 'expand_more'
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
  hideMenu(pivotingMenu)
  if(featureNavIcon.innerHTML === 'expand_more') {
    console.log('clcik')
    // this.innerHTML = 'expand_less'
    featureNavIcon.innerHTML = 'expand_less'
    showMenu(featureMenu)
  } else {
    featureNavIcon.innerHTML = 'expand_more'
    hideMenu(featureMenu)
  }
})

toggleDepartmentNav.addEventListener('click', function() {
  hideMenu(featureMenu)
  hideMenu(pivotingMenu)
  if(departmentNavIcon.innerHTML === 'expand_more') {
    departmentNavIcon.innerHTML = 'expand_less'
    showMenu(departmentMenu)
  } else {
    departmentNavIcon.innerHTML = 'expand_more'
    hideMenu(departmentMenu)
  }
})

togglePivotingNav.addEventListener('click', function() {
  hideMenu(featureMenu)
  hideMenu(departmentMenu)
  if(pivotingNavIcon.innerHTML === 'expand_more') {
    pivotingNavIcon.innerHTML = 'expand_less'
    showMenu(pivotingMenu)
  } else {
    pivotingNavIcon.innerHTML = 'expand_more'
    hideMenu(pivotingMenu)
  }
})

function showMenu(menu) {
 menu.style.maxHeight = '700px'
}

function hideMenu(menu) {
  menu.style.maxHeight = '0'
}


expandAlumniList.addEventListener('click', function() {
  if(alumniListIcon.innerHTML === 'expand_more') {
    alumniListIcon.innerHTML = 'expand_less'
    showList(alumniList)
  } else {
    alumniListIcon.innerHTML = 'expand_more'
    hideList(alumniList)
  }
})

function changeIconColor(color) {
  iconBars.forEach(function(bar) {
    bar.style.backgroundColor = color
  })
}

mobileIcon.addEventListener('click', function() {
  this.classList.toggle('icon-transform')
  sideNav.style.width = "300px";
  changeIconColor('white')
  
  
  if(!this.classList.contains('icon-transform')) {
    sideNav.style.width = 0
    changeIconColor('#333')
  }
})