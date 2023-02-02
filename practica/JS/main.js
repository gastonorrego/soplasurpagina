
// variables globales 

const carrousel =  document.querySelector('.carrousel-items');
const carrouselItem = document.querySelector('.carrousel-item')


const padre = document.querySelector('.padre')
const carrito2 = document.createElement('btn');
const padreComprar = document.querySelector('.padreComprar');
const btnBotones = document.querySelector('#botonAñadirCarro');
const Productos = document.querySelector('#boton')


///funcionamiento carrousel

$('#carrousel').fadeIn(1500);


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
    

});

carrousel.addEventListener('mouseleave',() =>{
    start();
    borrarBoton();
});


const addToShoppingCartButtons = document.querySelectorAll('.addToCart');

////////////////////////////////////////

const borrarBoton = () =>{
    $('#botonAñadirCarro').fadeOut(1000);

}

const mostrarBoton= () =>{
   
    $('#botonAñadirCarro').fadeIn(100);

}

///// funcionamiento carrito de compras 


Productos.addEventListener('mouseover',mostrarBoton);
function  borrarItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
  };
  
function comprar(){
    console.log('tu compra se realizo correctamente');
    alert('Esta a punto de comprar. Desea continuar?');
}
 

 function insertarCarro(e){
     e.preventDefault();
     const clase = e.target.classList[4];
    var total = null;
  
    const botonComprar = document.createElement('btn');
    const botonComprar2 =`<button id ="botonComprar" style ="display: none" class="item-button btn btn-success">COMPRAR </button>`
    botonComprar.innerHTML =botonComprar2;
    padreComprar.appendChild(botonComprar);

    $('#botonComprar').css("float","right");
    $('#botonComprar').fadeIn(10);

    
    botonComprar.addEventListener('click', comprar);
     
     switch(clase){
        case('claseRemeras'):
            var precio = document.querySelector('#precioRemera').textContent;
            var producto = document.querySelector('#tituloRemera').textContent;
            var imagen = document.querySelector('#imagenRemera');
            console.log(producto);
            console.log(precio);
            var precioInt = Number(precio);
            
            break;
        case('claseTazas'):
        var precio = document.querySelector('#precioTaza').textContent;
        var producto = document.querySelector('#tituloTaza').textContent;
            console.log(producto);
            console.log(precio);
            var precioInt = Number(precio);
            break;

        case('claseGorra'):
        var precio = document.querySelector('#precioGorra').textContent;
        var producto = document.querySelector('#tituloGorra').textContent;
            console.log(producto);
            console.log(precio);
        var precioInt = Number(precio);
        break;
        
        case('claseChop'):
        var precio = document.querySelector('#precioChop').textContent;
        var producto = document.querySelector('#tituloChop').textContent;
            console.log(producto);
            console.log(precio);
            var precioInt = Number(precio);     
        break;
    
        case('claseMascota'):
        var producto1 = document.querySelector('#tituloHueso').textContent;
        var precio = document.querySelector('#precioHueso').textContent;
        var nombre = prompt('Nombre de tu mascota');
        var producto = producto1 + " " + nombre;
        var precioInt = Number(precio);
            console.log(producto);
            console.log(precio);
        break;}

     const carro = document.createElement('div');
     const carroAdentro = `<div class="row shoppingCartItem" id="idClass">
     <div class="col-6">
         <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
             <img src class "image-carro"=${imagen} class="shopping-cart-image">
             <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${producto} 
             </h6>
         </div>
     </div>
     <div class="col-2">
         <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
             <p class="item-price mb-0 shoppingCartItemPrice">$${precioInt}</p>
         </div>
     </div>
     <div class="col-4">
         <div
             class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
             <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                 value="1">
             <button class="btn btn-danger buttonDelete" type="button">X</button>
         </div>
     </div>
  </div>`;
        $("#carro").css("background-color","white");
        carro.innerHTML = carroAdentro;
     padre.append(carro);

     carro.querySelector('.buttonDelete').addEventListener('click', borrarItem);
    
    
     

     
    
     
     }
     
    

     addToShoppingCartButtons.forEach(addToCart => {
    
        addToCart.addEventListener('click', insertarCarro);
      });





start();

