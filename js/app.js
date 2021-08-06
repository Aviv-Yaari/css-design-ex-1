function onExpandNav() {
  const elNav = document.querySelector('.navbar');
  if (!elNav.classList.contains('expanded')) {
    elNav.classList.add('expanding');
    setTimeout(() => {
      elNav.classList.remove('expanding');
      elNav.classList.add('expanded');
    }, 500);
  } else {
    elNav.classList.add('collapsing');
    setTimeout(() => {
      elNav.classList.remove('expanded');
      elNav.classList.remove('collapsing');
    }, 500);
  }
}
