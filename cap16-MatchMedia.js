//Es una api de js que permite trabajar con responsive design. El estilo se da con css y las mq tmb. pero cuando hay que agregar un evento o cambiar clases si se usa js.


const mq = matchMedia("(max-width: 500px)")                   //mq de media query. matchMedia es del objeto window
//es como decir en css: @media only screen and (max-width: 500px){estilos}
console.log(mq);                                               //en matches nos va a decir T o F dependiendo de si tiene menos o mas de 500px
//vemos q tiene la propirdad onchange. Cada vex que cambia la resolucion de T a F o de F a T, se ejecuta este evento onchange.


const caja = document.querySelector(".caja");
mq.addEventListener("change",()=>{              //cada vez que cambie de estado (de T a F o de F a T), se va a ejecutar la funcion flecha del segundo parametro
    console.log("resolucion cambiada");
if (mq.matches) caja.classList.replace("caja","resposive-caja");
else if (caja.className == "responsive-caja") caja.classList.replace("responsive-caja","caja");
})
//con esta herramienda podemos trabajar los estilos.




























