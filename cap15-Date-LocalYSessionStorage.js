//APIs
//permiten hacer mucahs cosas, x ej agarrar y soltar, reconocimiento de voz, facial, ubicacion...
//aplication programing interface. Es una interface de programacion de aplic. Es para conectar 2 o + aplicaciones e si e intercambiar info, o tmb como herramienta propia de c/lenguaje.
//hay muchos tipos de apis, las api rest, las de los lenguajes (q son las q mas usamos)
//la interface puede ser cualquiera, document, window, prompt, alert, cualqueir funcionalidad de los lenguajes e suna api.
//la api recibe un dato lo procesa y devuelve algo, nosotros desconocemos el proceso interno que hace.
//el mismo prompt es una api.
//las appi mas conocidas son la api rest, q no son las internas de los lenguajes, sino q se envias a otro sitio web a cambio de información.

//el objeto date es una api. Es una función 
const fecha = Date();   //los () son el constructor si ponemos delante la palabra reservada new 
console.log(fecha);

const fecha1 = new Date();  //ahora podemos trabajar con lso metodos y propeidades de fecha. Acá podemos agragar como parametros año, mes y dia
console.log(fecha1);
//console.log(fecha.getDate());   //esto vamos a ver q no funciona. No podemos usar metodos sin declarar el objeto
//Metodos:
console.log(fecha1.getDate())       //muestra el dia del mes en el q estamos

console.log(fecha1.getDay());       //devuelve el dia de la semana. Si es martes deveulve 2. Esto xq devuelve un arrai, y el domingo es 0.

console.log(fecha1.getMonth());      //devuelve el mes, pero funciona como getDay, deveulve contando desde el mes 0. Julio va a ser 6 x ej

console.log(fecha1.getYear());      //devuelve el año actual - 1900. ej si estamos en 2020 - 1900 = 120. Hoy devolveria 121 xq es 2021. Para corregir esto podemos hacer:
console.log(fecha1.getYear()+1900);

console.log(fecha1.getHours());     //devuelve hora actual
console.log(fecha1.getMinutes());
console.log(fecha1.getSeconds());

const addZeros = n=>{
    if (n.toString().length < 2) return "0" .concat(n);   //hay q pasarlo primero a string para q funcione bien el .length
    return n;
}
const actualizarHora = ()=>{            
    const time = new Date();
    hora = addZeros(time.getHours());            //si las horas, minutos o seg son menotes a 10 no devuelven x q 09, sino q devuelve 9. Y para rellenar el espacio del reloj necesitamos q adelante tenga el 0
    minutos = addZeros(time.getMinutes());
    segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}

actualizarHora();           //si esta funcion no estuviera ejecutada antes del setInterval, primero apareceria el reloj en 0 y despues de 1 seg la hora real. Por eso hay q dejarlo.
//para que se actualice constantemente:
setInterval(actualizarHora,1000);
//estyo igual ya no se hace mas con setInterval xq come mucho recurso. Se usan librerias.


//localStorage y sessionStorage
//son 2 tipos de forma de almacenamiento, local y de sesion.
//sesion storage es la info q se guarda en la sesion, cuando se actualiza la pag o cierra la pestaña se pierde
//el local storage lo almacena en el almacenamiento local y la info no se pierde en esos casos.


console.log(localStorage);      //veremos q es un objeto, con sus propiedades y metodos.
//localStorage.setItem("nombre","pedro"); //asi se guardara una variable nombre "key" con el valor "pedro". con setItem se define la varaible con su propiedad y se guarda. Por mas que cerremos el navegador, y comentemos esta linea de codigo luego, la variable ya va aestar creada y se va a guardar aun con la linea comentada.
//el lenght que muestra son las keys que tiene guardadas.

console.log(localStorage.getItem("nombre"));   //con getItem obtenemos el valor.

console.log(sessionStorage.setItem("nombre","vessonich"));        //aca si comentamos la linea y cerramos y abrimos el navegador se borra. xq es solo para la sesion actual la info guardada.
console.log(sessionStorage.getItem("nombre"));

//tambien tenemos el metodo .removeItem ej:
setTimeout(()=>{
    let nombree = sessionStorage.removeItem("nombre");  //con esto aparece la info y a los 2 seg se borra.
},2000)                                                 //funciona = en el localStorage


//el metodo .clear limpia todos los items 

setTimeout(()=>{
    let nombree = localStorage.clear(); 
},2000) 

//ejemplo para cmabiar el idioma:

//suponiendo q  tenemos 2 botones para cambiar el idioma:
const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal()
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal()
    })
}
const modal = document.querySelector(".modal-overlay");
const cerrarModal = ()=>{

modal.style.animation = "desaparecer 1s forwards";
setTimeout(()=> modal.style.display = "none",1000);
}
const idioma = localStorage.getItem("idioma");
if (idioma === null) definirIdioma();
else { console.log(`Idioma: ${idioma}`);
        modal.style.display = "none";
}
//con esto podremos ver en consola q una vez q elegimos el idioma, idioma va a ser = a en o es. Aunque actualicemos va a seguir =, para cambiar hay q abrir de nuevo la pag o poner en consola "localStorage.clear()" para q idioma vualva a ser undefined

if (idioma == "es") mostrarEnEspañol();
else mostrarEnIngles();
//estas funciones mostrarian la pagina en español o en ingles
//no explico como hacer esas funciones. 












