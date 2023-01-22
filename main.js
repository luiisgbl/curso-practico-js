// selectores de email 
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// selectores de menu mobile
const burguerNav = document.querySelector('.menu');
const menuBurguer = document.querySelector('.mobile-menu');

// selectores de la targeta de detalle de productos
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardDetalis');

// selectores de la lista de productos
const cardsContainer = document.querySelector('.cards-container');

// selectores del produc detail
const productDetail = document.querySelector('#product-detail');
const closeProductDetail = document.querySelector('#closeProducDetail');
const overlog = document.querySelector('.overlog');

const productDetailImg = document.querySelector('#productDetailImg');
const productDetailPrice = document.querySelector('#productDetailPrice');
const productDetailName = document.querySelector('#productDetailName');
const productDetailDescription = document.querySelector('#productDetailDescription');

// funciones
navEmail.addEventListener('click', toggleDesktopMenu);
burguerNav.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', carritos);

closeProductDetail.addEventListener('click', funCloseProductDetail);


function toggleDesktopMenu(){
    const shoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!shoppingCardContainerClosed){
    shoppingCardContainer.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const shoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!shoppingCardContainerClosed){
    shoppingCardContainer.classList.add('inactive');
    };
    menuBurguer.classList.toggle('inactive');
}

function funCloseProductDetail(){
    overlog.classList.add('inactive');
    productDetail.classList.add('inactive');
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
    
    shoppingCardContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    shoppingCardContainer.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    menuBurguer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
    overlog.classList.remove('inactive');

//event.target.src => Al hacer clic en la imagen, obtenemos su atributo src.
    productDetailImg.setAttribute("src", event.target.src);
//event.target.nextElementSibling.innerText =>  Al hacer click en la imagen, devuelve el siguiente elemento en el mismo nivel del árbol.
    productDetailPrice.innerText = event.target.nextElementSibling.innerText;
   
};


// agregando listas de productos lista de productos

const productList = [];
productList.push({
    name: "Bicicleta",
    price: 220,
    img: "https://falabella.scene7.com/is/image/Falabella/881948375_1?wid=800&hei=800&qlt=70"
});
productList.push({
    name: "Moto",
    price: 600,
    img: "https://ripleycl.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F11%2F15114751%2Fka-150-naranjo.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=ce25caa524cde7be40642905e216f9ed"
});
productList.push({  
    name: "Auto",
    price: 1600,
    img: "https://catalogo.gac-sa.cl/assets/matriz/MG/MGN00041/fotos/portada/foto1.jpg"
});
productList.push({  
    name: "Auto",
    price: 2600,
    img: "https://static.retail.autofact.cl/blog/c_img_740x370.rpbbp8kyezf0rd.jpg"
});
productList.push({  
    name: "Auto",
    price: 1600,
    img: "https://media.revistagq.com/photos/5ca5e602944b834654eb8fe6/master/pass/los_10_coches_mas_caros_del_mundo_131086603.jpg"
});
productList.push({  
    name: "Auto",
    price: 1600,
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NNC7TA7K2NG5HM2REZSAE244XE.jpg"
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
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

   

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price + ' $';
    productDetailPrice.innerHTML = product.price + ' $';

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