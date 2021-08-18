const navSlide = () => {
    const burger = document.querySelector('.mobile-menu');
    const nav = document.querySelector ('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

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


// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//         this.mobileMenu = document.querySelector (mobileMenu);
//         this.navList = document.querySelector (navList);
//         this.navLinks = document.querySelector (navLinks);
//         this.activeClass ="active";
//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks() {
//         this.navLinks.forEach((link) => {
//             link.style.animation
//                 ? (link.style.animation = "")
//                 : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
//         });
//     }

//     handleClick(){
//         console.log(this)
//         this.navList.classList.toggle(this.activeClass);
//         this.animateLinks();
//     }


//     addClickEvent () {
//         this.mobileMenu.addEventListener ("click", this.handleClick );
//     }
//     init () {
//         if (this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }
// const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li",
// ); 
// mobileNavbar.init();





// let nav = document.querySelector('body .header .nav-var .mobile-menu');
// let links = document.querySelector('body .header .nav-var .links ul')

// nav.addEventListener('click', desplazar);

// function desplazar () {
//     links.classList.toggle("active");
// }