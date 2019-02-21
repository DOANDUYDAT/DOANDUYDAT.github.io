const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-change');
        // burger animation
        burger.classList.toggle('toggle');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    nav.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-change');
        // burger animation
        burger.classList.toggle('toggle');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    })
}

navSlide();


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    const navbar = document.querySelector('.navbar');
    if (document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = "#e9ebea";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
}