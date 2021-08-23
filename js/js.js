const navSlide = () => {
    const burger = document.querySelector('.mobile-menu');
    const nav = document.querySelector ('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')
    const mobheader = document.querySelector('.mob-header')

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobheader.classList.toggle('active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });    
        burger.classList.toggle('toggle');
    });    
}
navSlide();

const typed = new Typed ('.typed', {
    strings: [
    ' <i class="weare" > projects </i> ',
    ' <i class="weare" > buildings </i> ',
    ' <i class="weare" > surveys </i> ',
    ' <i class="weare" > remodeling </i> '],
    //stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false ,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});