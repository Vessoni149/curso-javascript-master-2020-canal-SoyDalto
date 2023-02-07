"use strict";
//Drag & drop es la api de arrasrtrar y soltar
//funciona con eventos
const circulo = document.querySelector(".circulo");
circulo.addEventListener("dragstart",(e)=>{         //e va a ser el objeto
console.log(e.dataTransfer);
e.dataTransfer.setData("text-plain",e.target.className);    //setData para modificar o agregar un valor. aca le vamos a pasar el nombre de la clase p saber q objeto fue arrastrado. Esto suele hacerce con ids
console.log(e.dataTransfer.getData("text-plain"));           //asi mostramos lo que obtenemos.
});
// circulo.addEventListener("drag",()=>console.log(2));
// circulo.addEventListener("dragend",()=>console.log(3));

//corresponden a las acciones de agarrar, desplazar y soltar.

//tmb hay eventos del objeto donde se suelta el priemer objeto (objeto zona). Es como q el objeto "siente" que se le arrastra algo.

const cuadrado = document.querySelector(".cuadrado");

cuadrado.addEventListener("dragenter",()=> console.log(1));
cuadrado.addEventListener("dragover",()=> console.log(2));      //dragover es para que en esa zona se permita soltar el objeto, es decir, que se pueda ejecutar el evento drop.
cuadrado.addEventListener("drop",()=> console.log(3));          
cuadrado.addEventListener("dragleave",()=> console.log(4));


//objeto dataTransfer:

// transmite informacion entre los objetos, el movido y la zona a al que se mueve.
//el objeto receptor puede ser uno creado por vos o directamente el body
//sirve para avisarle a un objeto zona que hay un objeto que se esta moviendo sobre el y le esta transfiriendo info.
//se trabaja en el metodo dragstart.

//ejercicio de texturas:
const cambiarTextura = (n,e)=>{
    e.dataTransfer.setData("textura",n);
}
const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
e.preventDefault();
})

zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.jpg")`;
})

for (var i = 1; i < document.querySelector(".texturas").children.length ; i++){
  
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>cambiarTextura(i,e));
    
}




















