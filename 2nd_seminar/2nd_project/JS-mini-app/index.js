const toggleBtn = document.querySelector('.dark-toggle input[type="checkbox"]'),
  currentTheme = localStorage.getItem('theme'),
  modalBtn = document.querySelector('.modal-btn'),
  modalBg = document.querySelector('.modal-bg'),
  modalClose = document.querySelector('.modal-close');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleBtn.checked = true;
  }
}

const switchMode = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

const popModal = () => {
  modalBg.classList.add('modal-active');
};

const closeModal = () => {
  modalBg.classList.remove('modal-active');
};

function init() {
  toggleBtn.addEventListener('change', switchMode, false);
  modalBtn.addEventListener('click', popModal);
  modalClose.addEventListener('click', closeModal);
}

init();
