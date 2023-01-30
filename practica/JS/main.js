

$('#carrousel').fadeIn(1500);


const carrousel =  document.querySelector('.carrousel-items');

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
    mostrarBoton();


});

carrousel.addEventListener('mouseleave',() =>{
    start();
    $("#botonAñadirCarro").fadeOut(50);
   
});
const mostrarBoton = () =>{
    

    var boton = getComputedStyle(document.getElementById("botonAñadirCarro"))
    if(boton = 1){
        $("#botonAñadirCarro").fadeIn(500);
    }
};
    

const botones = () =>{
    var boton2 = window.getComputedStyle(document.getElementById("carrousel-item"), ":hover").getPropertyValue("transform");
    alert(style);
     $("#botonAñadirCarro").fadeIn(500);
    
        
    
    
}


boton.addEventListener("click",event => {
  
  $('#carro').slideDown(1000);
 
})


start();



