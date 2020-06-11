AOS.init();

//hidding menu
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener('scroll' , function () {
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName('div')[0].style.top = '0px'
    } else {
        document.getElementsByTagName('div')[0].style.top = '-100px'
    }

    ubicacionPrincipal= desplazamientoActual;
})

//lightbox

const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.add-image');
const containerLight = document.querySelector('.imagen-light');
const menuIconB = document.querySelector('.menu-icon');



images.forEach( image => {
    image.addEventListener( 'click', () => {
        showImage(image.getAttribute('src'));
    });
});

containerLight.addEventListener('click', (e) => {
    if(e.target !== imagesLight) {
        containerLight.classList.toggle('show');
        imagesLight.classList.toggle('show-image');
    }
})


const showImage = (image) => {
    imagesLight.src = image;
    containerLight.classList.toggle('show');
    imagesLight.classList.toggle('show-image');
};

//deployable menu

let menuNavigation = document.querySelectorAll('.menu-navigation')[0];
let menuWhite = true

let nameTag = document.querySelectorAll('.clickable');


document.querySelectorAll('.menu-right')[0].addEventListener('click', () => {
    if(menuWhite) {
        document.querySelectorAll('.menu-right')[0].style.color = '#000';
        menuWhite = false;
    }else {
        document.querySelectorAll('.menu-right')[0].style.color = '#fff';
        menuWhite = true;
    }
    
    menuNavigation.classList.toggle('menuDos')
})

let clickArray = document.querySelectorAll('.clickable');


clickArray.forEach( item => 
    item.addEventListener( 'click', () => {
        menuNavigation.classList.toggle('menuDos')
    })
);