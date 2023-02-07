// //aparecieron x q coasas, 1)son compactas, 2) el this
// //estructura
// const saludar = ()=> {
//     console.log("hola");
//     console.log("como estas?");
// }
// // saludar()   //retorna los 2 console log de arriba.

// //una caracteristica q tienen las func flecha es que si hay solo 1 expresion, la retorna (normalmente hay q usar la palabra reservada "return" para que una funcion retorne algo) ej:
// resultado = saludar();
// console.log(resultado); //esto va a ser undefined, xq la funcion no esta retornando nada. Lo mismo pasaría si dentro de la funcion hubiene un solo console.log
// //pero si la escribimos en una sola linea sí va a retornar algo:
// const saludar2 = ()=> "string";          //ya si le ponemos llaves se considera que no es una sola expresion sino una sentenncia
// saludar2();
// resultado2 = saludar2();
// console.log(resultado2);            //va a mostrar string en vez de undefined como en la L 11
// //otro ej:
// const saludar3 = ()=> nombre = "pedro"; //esto solo es posible con funciones flecha, es como que si tienen una sola linea, viene por defecto el "return".
// resultado3 = saludar3();
// console.log(resultado3);

// //los () son opcionales si hay 1 solo parametro. Si no hay parametro tienen que estar si o si
// // ej:  const saludar = res => nombre = res;


// //Las func flechas no son adecuadas como metodos ni pueden ser usadas como constructores.
// //así sí funciona:
// // const objeto ={
// //     nombre : "Lucas",
// //     saludar4 : function(){console.log(`Hola ${this.nombre}`)}
// // }
// // objeto.saludar4();

// //con una funcion flecha:
// const objeto ={
//     nombre1 : "Lucas",
//     saludar4 : ()=> {console.log(`Hola ${this.nombre1}`)}
// }
// // window.nombre1 = "Dalto"
// objeto.saludar4();              //va a decir hola undefined
// //esto pasa xq "this" lo que ahce es hacer referencai al objeteo windows. En las funciones comunes, this hace referencai al objeto que está llamando a esa funcion.
// //en la funcion flecha se refiere al objeto (windows) que esta llamando al objeto (objeto) que esta llamando a la funcion
// //entonces si ponemos lo que esta en la L 39, ahi si va a acceder al objeto.

// //como dijimos, las func flecha tampooc pueden ser tomadas como funciones constructoras:

// const constructorPersona = (nombre,apellido)=>{
//     this.nombre = nombre;
//     this.apellido = apellido;
// }
// const persona = new constructorPersona("lucas","dalto");
// console.log(persona.nombre);        //nos va a decir que constructorPersona is not a cosntructos at linea 51 



//THIS CONTEXTUAL

//this hace referencia al objeto q esta llamando a la funcion que esta llamando al objeto, ej:
// console.log(this);                           //afuera de caulquier funcion, this es window
// console.log(window);                         //va a mostrar lo mismo, de hecho:
// console.log(window === this)                //va a dar true

// //veamos uan diferencai del this en funciones comunes y en flecha:
// this.nombre= "dalto";

// function saludar(){
//     console.log(`hola ${this.nombre}`)
// }
// // const saludar = ()=>{
// //     console.log(`hola ${this.nombre}`)
// // }

// const objeto = {
//     nombre: "lucas",
//     //(saludar                       esto es un shorthand de js que reemplaza la linea de abajo. si la fropiedad es = al valor no hace falta escribirlo 2 veces.)
//     saludar : saludar()             //esto esta llamando a la funcion saludar, que dependiendo de si la misma es uan funcion comun o no, nos va a dar un resultado distinto.
// }                                   //si saludar es una funcion comun, el nombre va a ser lucas, pero si la función es flecha va a ser dalto.
//                                     //la funcion normal forma parte del objeto que llama a la funcion, x eso da como resultado lucas. 
//                                     //en cambio la funcion flecha hace referencia a window

// saludar()




//FUNCIONES RECURSIVAS:

//son funciones q se llaman a si mismas. Un ej son las callbacks q se llama a si mismas
// const validarEdad = (msg)=>{
//     let edad;
//     try{
//     if (msg) edad = prompt(msg);
//     else edad = prompt("introduce tu edad");
//     edad = parseInt(edad);
//     if (isNaN(edad)) throw "introduce un numero para la edad";
//     if (edad > 18) console.log("sos mayor de edad");
//     else console.log("sos menor de edad");
// } catch(e){
//     validarEdad(e)
// }
// }
// validarEdad();

//clausulas o cierres
//funciones q retornan otras funciones
// const saludar = (nombre)=>{
// return function(){
//     console.log(nombre);
// }
// }
// let saludo = saludar("pedro");

// addEventListener("load",saludo)

//un uso practico:

const cambiarTamaño = tamaño=>{
    return ()=>{
 document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}
px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);


//PARAMETROS POR DEFECTO

const suma = (a,b)=>{
    console.log(a+b)
}
suma(10);       //si pasamos un solo valos va a decir NaN, xq el segundo parametro es undefined. Hay varias formas de solucionarlo.


const suma1 = (a,b)=>{
    b = b || 0;             //esto dice que b va a ser igual a b o en su defecto a 0
    console.log(a+b)
}

suma1(10); 


const suma2 = (a = 0,b = 0)=>{              //en este caso se le pasa un parametro x defecto al definir los parametros
    console.log(a+b)                        //podemos aplicarlo a los 2 parametros.
}
suma2(10); 


//PARAMETRO REST
//Ademas existe el parametro REST, que se usa cuando pasamos mas parametros de lo que necesita la funcion, y puede llevar cualquier nombre despues de los ... Si la funcion tiene varios parametros el rest tiene que ir ultimo.

const suma3 = (...num)=>{           //va a crear un arrai con la cantidad de elementos q le pasemos pro parametro. Crea un arrai vacio que lo vamos a llenar nosotros con la cantidad de elementos que queramos cuando lo pasemos como parametro al ejecutar la funcion
    console.log(num)                       
}
suma3(1,3,45,32); 



//OPERADOR TERNARIO O CONDICIONAL
//no es una sentencia condicional es un operador ternario

let edad = 25

(edad > 18) ? console.log("es mayoer de edad") //todo lo que le sigue al ? es lo que va a pasar si lo que esta entre () es true
            : console.log("es menor de edad");  //: es lo que va a pasar si es falso

//si queremos poner mas de unb console log hay que ponerlos entre () y separar cada sentencia con "," xq si ponemos ; entre cada sentencia tira error. EJ:

let años = 50;
(años > 18) ? (console.log("es mayoer de edad"),    //es como un bloque pero con () y separaciones de ","
              console.log("asdasdasdasda"))
            : console.log("es menor");              //lo mismo se puede hacer aca para agragar ams lineas.


//estos operadores ternarios usan menos recursos que if y else.


//OPERADOR SPREAD:

//es el operador del parametro rest, son los "...", es uno de sus tantos usos.
//otro uso puede ser resumir parametros.

let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";

let arrai = [valor1,valor2,valor3];
console.log(...arrai);

//se puede usar para añadir arrais a otros arrais

let arr = ["manzana","pera","banana"];
let arr2 = ["kiwi","naranja"];

//normalmente si son pocos parametros se puede hacer asi como vimos antes:
//arr.push(arr2[0],arr2[1]);
//pero si son muchso eleentos los del arrai estaría re larga, para eso esta spread:
arr.push(...arr2);
console.log(arr);      //sigue siendo el mismo arr al que se le sumaron los elementos de arr2

//tambien sirve para concatenar arrais.

let arr3 = [...arr,...arr2];        //aca creamos otro arrai, arr3
console.log(arr3);


//se puede usar como argumento rest para pasar por parametro de una funcion elementos de un arrai
const sumar = (num1,num2)=>{    //en  vez de pasar el spread aca como hicimos anteriormente lo pasamos al ejecutar la funcion. pero de esta forma no podemos pasar parametros de mas si no estan definidos aca mismo como en el ejemplo anterior, se van a sumar tantos numeros como parametros existan.
    console.log(num1 + num2);
}
let arr4 = [3,4];
sumar(...arr4);
