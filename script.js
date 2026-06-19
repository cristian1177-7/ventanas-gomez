

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.padding = "0px";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        navbar.style.background = "rgba(255,255,255,.98)";

    }else{

        navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
        navbar.style.background = "rgba(255,255,255,.95)";

    }

});


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

const hiddenElements = document.querySelectorAll(
`
.stat-card,
.service-card,
.benefit,
.about-text,
.testimonial,
.gallery-grid img
`
);

hiddenElements.forEach(el => {

    el.classList.add('hidden');

    observer.observe(el);

});



const galleryImages = document.querySelectorAll('.gallery-grid img');

const lightbox = document.createElement('div');

lightbox.id = 'lightbox';

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener('click', () => {

        lightbox.classList.add('active');

        const img = document.createElement('img');

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener('click', () => {

    lightbox.classList.remove('active');

});



window.addEventListener('scroll', () => {

    const hero = document.querySelector('.hero');

    let scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.4 + 'px';

});