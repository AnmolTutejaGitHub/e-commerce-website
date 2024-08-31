window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.position = 'fixed';
    } else {
        navbar.style.position = '';
    }
});