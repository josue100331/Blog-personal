const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
