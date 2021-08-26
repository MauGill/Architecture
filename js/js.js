//                                                                                                                          BURGER
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
//                                                                                                                          TYPING EFECT
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
//                                                                                                                          BUDGET EFFECT
const budget = () => {
    const bud = document.querySelector('.budget');
    const buda = document.querySelector('.budget a')
                

    buda.addEventListener('mouseover', () => {
        bud.classList.toggle('active')
        buda.classList.toggle('active')

    })
    buda.addEventListener('mouseout', () => {
        bud.classList.remove('active')
        buda.classList.remove('active')
    } )
}
budget();
//                                                                                                                          BACK T TOP BTN
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction ( ) {
    if (window.pageYOffset > 300) { //Show btn

        if(!topBtn.classList.contains("btnEntrance")) {
            topBtn.classList.remove("btnExit");
            topBtn.classList.add("btnEntrance");
            topBtn.style.display = "block";
          }
        
    } else { // Hide btn

        if(topBtn.classList.contains("btnEntrance")) {
            topBtn.classList.remove("btnEntrance");
            topBtn.classList.add("btnExit");
            setTimeout(function() {
              topBtn.style.display = "none";
            }, 250);
          }
        }
      }
topBtn.addEventListener("click", backToTop);

function backToTop() {
        const targetPosition = 0;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 750;
        let start = null;
        
        window.requestAnimationFrame(step);
      
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        }
      }    
      function easeInOutCubic(t, b, c, d) {
          t /= d/2;
          if (t < 1) return c/2*t*t*t + b;
          t -= 2;
          return c/2*(t*t*t + 2) + b;
      };

