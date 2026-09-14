// =========================
// CAFE OXYGEN - JAVASCRIPT
// =========================


// =========================
// SMOOTH SCROLL
// =========================

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});


// =========================
// HERO BUTTON
// =========================

const heroBtn = document.querySelector('.hero-btn');

if (heroBtn) {

    heroBtn.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

}


// =========================
// ABOUT BUTTON
// =========================

const aboutBtn = document.querySelector('.about-btn');

if (aboutBtn) {

    aboutBtn.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

}


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});


// =========================
// GALLERY IMAGE EFFECT
// =========================

const galleryImages =
    document.querySelectorAll('.gallery-item img');

galleryImages.forEach(image => {

    image.addEventListener('click', () => {

        image.classList.toggle('zoomed');

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log('Cafe Oxygen website is ready! ☕');
