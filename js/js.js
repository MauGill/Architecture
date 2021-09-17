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
    ' <i class="weare" > proyectos </i> ',
    ' <i class="weare" > construcciones </i> ',
    ' <i class="weare" > relevamientos </i> ',
    ' <i class="weare" > remodelaciones </i> '],
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
//                                                                                                                          NAV BAR CHANGE COLOR
const navVar = document.querySelector(".nav-var")

window.addEventListener("scroll", shownav);
function shownav () {

        navVar.classList.toggle("sticky", window.scrollY > 350)

}
//                                                                                                                          GALLERY
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img")
const original = document.querySelector(".full-img")
const caption = document.querySelector(".caption");
const quit = document.querySelector(".fa-times")

quit.addEventListener("click", (e) => {
    modal.classList.remove("open");
    original.classList.remove("open");
} )

previews.forEach(preview =>  {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = preview.getAttribute("data-original");
        original.src= `./img/${originalSrc}`;

        const altText = preview.alt
        caption.textContent = altText;
    } )
});

//FALTA CAMBIAR QUE AL HACER CLICK EN LA IMAGEN NO SUCEDA NADA, QUE NO SE CIERRE, Y VER LA MANERA DE QUE LAS FOTOS YA ESTEN CARGADAS 

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
} )
//                                                                                                                      ABOUT US
const mom = document.querySelector(".mom")
const mom2 = document.querySelector(".mom2")
const mom3 = document.querySelector(".mom3")
const descrip = document.querySelector(".description")
const descrip2 = document.querySelector(".description2")
const descrip3 = document.querySelector(".description3")

mom.addEventListener('mouseover', () => {
    descrip.classList.add('hover')
} )

mom.addEventListener('mouseout', () => {
    descrip.classList.remove('hover')
} )

mom2.addEventListener('mouseover', () => {
    descrip2.classList.add('hover')
} )

mom2.addEventListener('mouseout', () => {
    descrip2.classList.remove('hover')
} )
mom3.addEventListener('mouseover', () => {
    descrip3.classList.add('hover')
} )

mom3.addEventListener('mouseout', () => {
    descrip3.classList.remove('hover')
} )





