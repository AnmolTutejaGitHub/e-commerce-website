window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.position = 'fixed';
    } else {
        navbar.style.position = '';
    }
});


// slider
const slider = document.querySelectorAll('.slider');
for (let i = 0; i < slider.length; i++) {
    slider[i].style.left = `${i * 100}%`;
}

let count = 0;
function slideShow() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.transform = `translateX(-${count * 100}%)`;
    }
    count++;
    if (count == slider.length) {
        count = 0;
    }
    setTimeout(slideShow, 3000);
}

slideShow();