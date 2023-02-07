//la programacion basada en prototipos se basa en heredacion del prototipo mas q por instanciaci{on en si
//cadena de prototipos o prototipe chain
//vamos a hablar de "proto" al decir prototipo, no de "prototype", no es lo mismo
let objeto = {
    "propiedad": "datos"
};
console.log(objeto);            //vemos que tiene una propiedad proto. Todos los objetos (y en js todos los tipos de datos son objetos) tienen el prototipo object.
                                //paradojicamente los objetos {} no tienen proto object
//todos los objetos heredan tienen el prototipo objet, que es el prototipo padre, y tmb el prototipo de su tipo de dato
//ej el prototipo nombre o string tienen dentro al prototipo object. PORQUE LO HEREDAN. Para acceder a él se usa "objeto.__proto__"
//distinto es el caso de las fuinciones, que cuando las creamos, tmb creamos un prototipo. y para acceder a los prototipos que NOSOTROS CREAMOS se usa "nombreDeLaFuncion.prototype"
//y si queremos acceder al prototipo que hereda el objeto que NOSOTROS creamos es: "ObjetoCreadoXMi.prototype.__proto__"


//todos los objetos si o si heredan el prototipo object (aunque lo cree yo), despues varía el resto de protos que heredan.


//características del prototipo:
//cuando lo creamos NOSOTROS, es mutable, lo podemos modificar
//el proto en sí mismo es un objeto, y pueden tener funciones
//existen fisicamente en la memoria
//puede ser llamado (como ya vimos antes) y modificado, mutarlo
//puede ser visto como un modelo ejemplar de una familia objeto
//el objeto hereda propeidades (valores y metodos) de su prototipo. Veamoslo:
//Si yo muestro en consola un arraiy x ej:
let variable = ["pedro", 234, null];
console.log(variable);
//me va a mostrar que tiene en cada una de sus posiciones, la propiedad lenght y el proto. No tiene metodos en sí mismo. 
//Ahora si abrimos el proto, veremos todas las propiedades y metodos que va a heredar.
//en el proto vamos a encontrar que estan todos los metodos que estudiamos, ya que el array hereda el proto array, donde están los metodos.

//veamos un ej de un objeto creado por mi:
class Objeto {
    constructor(){}
    hablar(){
        console.log("hola")
    }
}
const asd = new Objeto;
console.log(asd);

//este objeto va a tener solo la propiedad proto, y dentro de él va a estar el metodo "hablar", el constructor y el proto que se hereda, el que redefinimos y agregamos cosas (el metodo y el constructor).
//cuando creamos una clase e instanciamos un bojeto estamos creando un prototipo, que va a tener el metodo, el cosntructor, y el proto object heredado (todos los prototipos heredan el proto object.)
//para acceder al prototipo del prototipo no podemos usar "ObjetoCreadoXMi.prototype.__proto__". Debemos usar "ObjetoCreadoXMi.__proto__.__proto__"

//sobreescribir proto y sobreescribir metodo

// asd.hablar = ()=>{
//     console.log("modificado afuera");
// }
// asd.hablar();
//lo que sucede es que primero se ejecutan los metodos que estan afuerra, y despues los que estan adentro del objeto como metodo.
//aca no se esta modificando el metodo, se esta agregando una funcion al objeto.


//para modificar el proto es asi:
asd.__proto__.hablar = ()=>{
    console.log("modificado")
}



//MODO ESTRICTO
//antes js se escribia feo y con ecmascript 5  se puso el modo escricto para eliminar los errores q tiene js. No se aplico en js por defecto xq sino muchso sitios hubiesen quedado obsoletos, entonces es una herramiena del desarrollador que es una buena practica.
//lo q hace es convertir errores de js en excepciones, ej si pongo nombre = "agustin" sin el var o let lo toma igual normalmente como var, es una excepcion. En el modo estricto NO
//mejora la optimizacion de errores para que se ejecute el codigo mas rapido.
//evita sintaxis usadas anteriores a ecmascript 6
//no permite q el programador relice sintaxis malas.

//formas de usarlo:
//en las funciones y en codigo global. SIEMPRE tiene que escribirse como primera linea del codigo o como primera linea dentro de la función respectivamente
//aglobal: en la primer linea se escribe : "use strict";
 
//ej del use strict dentro de una funcion:
nombre = "lucas"; //no la declaramos con var ni let
function decir(){   
    "use strict";
    console.log(nombre);
}
decir();
//en este caso va a funcionar, xq la variable ya esta declarada como var, xq js toma ese error como excepcion. El use strict solo tendrá efecto dentro de la función.











