function onExpandNav() {
  const elNav = document.querySelector('.navbar');
  if (!elNav.classList.contains('expanded')) {
    elNav.classList.remove('collapsed');
    elNav.classList.add('expanded');
  } else {
    elNav.classList.remove('expanded');
    elNav.classList.add('collapsed');
  }
}

function onReadMore() {
  const elModal = document.querySelector('.modal-read-more');
  if (!elModal.classList.contains('visible')) {
    elModal.classList.remove('hidden');
    elModal.classList.add('visible');
  }
}

function onModalClose() {
  const elModal = document.querySelector('.modal-read-more');
  elModal.classList.remove('visible');
  elModal.classList.add('hidden');
}

function onModalSubmit(ev) {
  ev.preventDefault();
  onModalClose();
}

function stopProp(ev) {
  ev.stopPropagation();
}
