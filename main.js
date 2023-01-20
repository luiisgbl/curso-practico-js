const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerNav = document.querySelector('.menu');
const menuBurguer = document.querySelector('.mobile-menu');


const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
burguerNav.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', carritos);


function toggleDesktopMenu(){
    const asideClosed = aside.classList.contains('inactive');

    if(!asideClosed){
    aside.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClosed = aside.classList.contains('inactive');

    if(!asideClosed){
    aside.classList.add('inactive');
    };
    menuBurguer.classList.toggle('inactive');
}

function carritos (){
    const menuMobileClose = menuBurguer.classList.contains('inactive');
    const desktopMenuClose = desktopMenu.classList.contains('inactive');

    if(!desktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    if(!menuMobileClose){
        menuBurguer.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive')
}



//lista de productos

const productList = [];
productList.push({
    name: "Bicicleta",
    price: 220,
    img: "https://w7.pngwing.com/pngs/998/319/png-transparent-electric-bicycle-focus-bikes-mountain-bike-cycling-focus-bicycle-frame-bicycle-hybrid-bicycle-thumbnail.png"
});
productList.push({
    name: "Moto",
    price: 600,
    img: "https://e7.pngegg.com/pngimages/323/379/png-clipart-motorcycle-motorcycle.png"
});
productList.push({  
    name: "Auto",
    price: 1600,
    img: "https://img2.freepng.es/20180705/av/kisspng-2018-nissan-maxima-3-5-s-sedan-car-2018-nissan-max-chevrolet-cruze-5b3eb7df2c2267.5060655515308369591808.jpg"
});


function listaDeProductos(arr){
    for (product of arr){


    //Se crea el elemento div
    const productCard = document.createElement('div');
    //Se le agrega la clase product-card al elemento div antes creado
    productCard.classList.add('product-card');

    //Se crea un elemento img
    const productImg = document.createElement('img');
    //Se le agrega el atributo src con la imagen que tiene el alrrays 
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

   

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price + ' $';


    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);


    const productFigure = document.createElement('figure');

    const productImgSvg = document.createElement('img');
    productImgSvg.setAttribute('src', './icons/bt_add_to_cart.svg')

    productFigure.appendChild(productImgSvg);

    productInfo.append(productInfoDiv, productFigure);

    productCard.append(productImg,productInfo);
        
    cardsContainer.appendChild(productCard);
}
};


listaDeProductos(productList);