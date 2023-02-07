"use strict";

const geolocation = navigator.geolocation;
console.log(geolocation);
//esto muestra un porto con varias funciones. getCurrentPosition obtine todos los datos de la posicion actual, watchPosition mira los movimientos y ante cambios la muestra, clearWatch para eliminar la posición
//getCurrentPosition lleva 3 parametros (position,error,options) el primero es obligatorio.
 
const posicion = (pos)=>{
    console.log(pos)
}
const err = ()=>{console.log(e)};
const options = {
    maximumAge: 0,   //eso nos dice cuanto tiempo queremos soloicitar la info real, no la  guardada en cache c. Si la info cambia, cada cuanto se actualiza. Con 0 va a solicitar la info en tiempo real.
    timeout: 3000,      //cuanto queremos q tarde en devolvernos la info
    enableHightAcuracy: true    //esto activa la alta presicion, q aprovecha todos los recursos de posicionamiento para presisar ams la info.
}
geolocation.getCurrentPosition(posicion,err,options);//muestra en consola la geolocaliz. con las coordenadas. El segundo parametro expesa una funcion q se va a ejecutar en caso de error. Y el ultimo parametro para agregar opciones adicionales

//la función watchPosition() es la que se usa para tiempo real. No se ve en el curso

//Historial

console.log(history);
//los metodos back y forward cumplen la funcion de los botones atras y adelante.
//el metodo go regarga la pagina si le pasamos en parametro 0 o nada. Si le pasamos -1 va hacia atras como con back, y si le pasamos 1 va hacia adelante como con forward



//FileReader

//const reader = new FileReader();
//console.log(reader);
//dice todo null, xq esta hecho para actuar no cuando se lo llama sino cuando trabajamos con eventos (cuando se aborta una lectura, hay un error en ella, cuando empieza a cargar, cuando esta cargando...)
//tiene funciones: readAsArrayBuffer, readAsBinaryString, readAsDataURL, readAsText, estas ultimas 2 vamosa usar nosotros.
//en este caso el usuario nos va a mandar el archivo que se tieen q leer. no lo tenemos nosotros en la carpeta ni está en el servidor.

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e)=>{
   //console.log(archivo.files[0])              //esto no nos muestra mucho sobre el contenido del archivo. Para acceder a esa info hay q usar los metodos mencionados mas arriba
   //leerArchivo(archivo.files[0]);           //como es un solo archivo se pone el 0. Para el caso de que sean varios se ve mas adelante.
   leerArchivo(archivo.files)                  //asi es para q lea + de un archivo, files representa a todo el arrai de elementos
})                  //este es elevento q se dispara cuando un input cambia de valor

// const leerArchivo = ar =>{
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load",(e)=>{console.log(e)})       //en caso de que cargue el archivo, muestra en consola el archivo.
// }
//veremos en consola que en current target, el "result" es el contenidodel texto. En este caso "asd".

//para abrir varios archivos:
const leerArchivo = ar =>{
    for (var i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load",(e)=>{
            console.log(e.currentTarget.result);
        })
    }
}







