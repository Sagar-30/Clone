
 const toggleButton = document.getElementById('Hamburger-logo');
 const navLinks= document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});
