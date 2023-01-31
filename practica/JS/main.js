

$('#carrousel').fadeIn(1500);

const carroDeCompras = () =>{
   
    carroCompraPadre = document.querySelector('.padre')
    carroCompra = document.createElement('div')
    carroCompra.innerHTML  = 'producto precio cantidad';
    carroCompraPadre.appendChild(carroCompra);

    
}


//const carrousel =  document.querySelector('.carrousel-items');
const carrouselItem = document.querySelector('.carrousel-item')

const padre = document.querySelector('#gorra');
const carrito2 = document.createElement('div');




let intervalo = null;
let step = 1;
let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
const start = () =>{

    intervalo = setInterval(function(){
        carrousel.scrollLeft = carrousel.scrollLeft + step;
        if(carrousel.scrollLeft == maxScrollLeft){
            step = -1;
        }else if(carrousel.scrollLeft == 0){
            step = 1;
            
        }},10)

    

};

const stop = () =>{
    
    clearInterval(intervalo);
    
};




carrousel.addEventListener('mouseover',() =>{
    stop();
    botonDOM();
    

});

carrousel.addEventListener('mouseleave',() =>{
    start();
    borrarBoton();
});


const botonDOM = () =>{
    
    carrito2.innerHTML = `<button id ="botonAñadirCarro" class="item-button btn btn-primary addToCart claseRemeras">COMPRAR $3000</button>`;
   padre.appendChild(carrito2);
   
};


const borrarBoton = () =>{
   
    padre.removeChild(carrito2);

    
}

carrito2.onmouseleave = () =>{
   
    carroDeCompras();

    
};



carrito2.onclick = () =>{
   
    carroDeCompras();
};
start();

