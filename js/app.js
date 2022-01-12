//Dark Theme

const iconMode = document.getElementById('themeMode');
const body = document.querySelector('body');

iconMode.addEventListener('click', () => {
  iconMode.classList.toggle('fa-swap-opacity');
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    iconMode.style.color = 'var(--color-secondary-light)';
  } else {
    iconMode.style.color = 'var(--color-primary-dark)';
  }
});
