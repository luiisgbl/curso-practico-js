const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerNav = document.querySelector('.menu');
const menuBurguer = document.querySelector('.mobile-menu');




function agregarYquitar(nombre){
    nombre.classList.toggle('inactive');
    console.log("click")
}


navEmail.addEventListener('click', agregarYquitar(desktopMenu));
// burguerNav.addEventListener('click', toggleMobileMenu);
