const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // burger animation
        burger.classList.toggle('toggle');
    });

    nav.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
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


// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     const navA = document.querySelectorAll('.navbar a');
//     const logo = document.querySelector('.logo');
//     const navbar = document.querySelector('.navbar');
//     if (document.documentElement.scrollTop > 100) {
//         navbar.style.backgroundColor = "#e0ebe8";
//         logo.style.color = "#0c9b9b";
//         navA.forEach(a => {
//             a.style.color = "#0c9b9b";
//         })
//     } else {
//         navbar.style.backgroundColor = "transparent";
//         logo.style.color = "#e0ebe8";
//         navA.forEach(a => {
//             a.style.color = "#e0ebe8";
//         })
//     }
// }