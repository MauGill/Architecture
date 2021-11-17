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

//                                                                                                                      CLOSE BURGER LINKS
const menuLinks = document.querySelectorAll ('.header .nav-list a[href^="#"]');
const mobheader = document.querySelector('.mob-header')
const nav = document.querySelector ('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li')
const burger = document.querySelector('.mobile-menu');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        // burger.classList.remove('toggle');
        
        
    })
} )
//                                                                                                                         gallery
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function () {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            let getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window")
            newImgWindow.setAttribute("onclick","closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");


            newImg.onload = function() {

                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;"

    
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;"

            }
        }
    });
}
//ACA ESTA LA SOLUCION PARA EL JS ANTERIOR , EN EL CUAL TUVE QUE HACER UN BOTON PARA CERRAR LA IMAGEN( GALERIA),
// YA QUE SI HACIA CLICK EN LA IMAGEN SE CERRABA PERO QUEDABA OSCURO

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}
function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", `img/img${calcNewImg}.jpg`);
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;
}