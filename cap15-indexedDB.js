//dexed db es una base de datos q almacena info en el navegador de manera similar a localstorage.
//es una base de datos no sql. 
//crud: create, read, update, delete. Son las 4 operaciones basicas q tienen q tener las bases de datos.
//primero hay q solicitar al navegador q nos abra una base de datos, se hace así:
const IDBRequest = indexedDB.open("daltobase",1);       //IDB refiere a indec bd. En el parametro le indicamos el nombre de la base de datos que queremos abrir o si no existe el nombre que va a tener la que estamos creando. Este metodo es para abrir una ya existente o crear una. El segundo parametro es al version de base de datos, es irelevante explicarlo ahora.
//console.log(IDBRequest);                                //Aca dice q es una solicitud para abrir una base de datos. Si no usaramos el metodo open y solo pusieramos que muestre indexedDB mostraria que es una factory (de base de datos). Con el metodo open la abrimos o creamos.
//si la base de datos no existe se va a ejecutar el metodo onupgradeneeded y onsuccess. Si ya existe no se va a ejecutar el primero.
//la constante IDBRequest (l5) no es la base de datos, es la solicitud de abrir la base de datos. La base de datos va a ser el resultado de la solicitud. por eso en  l12 usamos .result 
//crear almacen de objetos: es una arquitectura de almacenamiento de datos que almacena datos como objetos, y se van a poder trabajar como objetos justamente.
IDBRequest.addEventListener("upgradeneeded",()=>{       //verifica si esta creada, en caso de que no este creada y la tengamos que crear: deberemos agregar las tablas
    console.log("se creo correctamente");
    const db = IDBRequest.result;                     //aca sí creamos al base de datos, a partir de que la solicitud  (l5) fue exitosa  
    db.createObjectStore("nombres",{                   //aca creamos el almacecnamiento de objetos. El primer parametro es el nombre del object store, y el segundo es el "key". Hay 2 tipos de key, como arrais asociativos o como arrai comunes. Tenemos autoIncrement que ahce q a medida q hacemos registros el key aumenta, es como un id es una key unica q identivida cada dato.
        autoIncrement: true                           //asi se autoincrementa la key a medida q creamos datos para que todos sean distintos
    });                       
})
//la otra opcion a autoincrement es KeyPath, que asocia por nombres (cada key tiene un nombre), requiere 2 valores, el nombre del objeto y el valor, el autoincrement da un numero como key.
//si en consola vamos a aplication, y a la izquierda vamos a indexedDB veremos que se creo la nueva base de datos. Va a decir la version y la cantidad de Object stores que son las tablas donde se van a almacenar los objetos (informaciones). Los almacenes de objetos los podemos crear cuando creamos la base de datos, cuando se ejecuta el evento upgradeneedeed
//si ya esta creada no va a mostrar el mensaje en consola.
IDBRequest.addEventListener("success",()=>{
    console.log("todo salio bien");
})

IDBRequest.addEventListener("error",()=>{
    console.log("ocurrio un error");
})


//Una vez creado el almacen de objetos empezamos con el CRUD: crear, leer, modificar y elimicar cada uno de los objetos dentro del almacen


// const addObjeto = objeto =>{                                             //el parametro objeto va a ser  el nombre del objeto q vamos a agregar
//     const db = IDBRequest.result;                                        //a partir de q la creacion de la base de datos fue exitosa
//     const IDBtransaction = db.transaction("nombres","readwrite");        //transaction abre una operacion, sea cual sea, agregar, eliminar, solicitar info... El primer parametro es en que objectStore la queremos abrir, el segundo aprametro es en que modo  queremos abrir al operacion. Hay 2 modos "readwrite" y "readonly", leer y escribir o solo leer.
//                                                                         // En este caso readwrite porque vamos a  escribir en la BD, vamos a agregar un objeto. Para crear, modificar o eliminar un objeto es readwrite. Sino readonly, que es el valor q vendria por defecto.
//     const objectStore = IDBtransaction.objectStore("nombres");           //aca solo decimos que la transaccion se va a ejecutar en el objectStore "nombres". Esto termina de abrir la transaccion
//     objectStore.add(objeto);                                             //aca agregamos el objeto que queremos agregar
//     IDBtransaction.addEventListener("complete",()=>{                    //en caso de que se complete, que muestre en consola el mensaje 
//         console.log("objeto agregado correctamante");
//     })
// }
// //Si vamos a consola y ponemos: "addObjeto({nombre: "roberto"})"" va a mostrar el mensaje de q se agrego correctamente. Vamos a application, actualizamos y vemos que se agrego el objeto.
// //addObjeto({nombre: "roberto"});       //en consola lo agrega, pero si ejecutamos la funcion aca no. no se xq (????)
// //el "#" que se muestra en application es el indice, no es lo mismo q key

// //Ahora creamos la operacion para leer los objetos:

// const leerObjetos = ()=>{
//     const db = IDBRequest.result;                                      //cada vez q operemosuna base de datos tenemos q abrir la transaccion, es = q en la funcion anterior
//     const IDBtransaction = db.transaction("nombres","readonly");
//     const objectStore = IDBtransaction.objectStore("nombres");
//     const cursor = objectStore.openCursor();                         //el cursor nos lee los datos
//     cursor.addEventListener("success",()=>{
//         if(cursor.result){                                           //si cursor.result es true
//             console.log(cursor.result.value);                        //value nos accede a la lectura
//             cursor.result.continue()                                   //esto es para que lea todos los objetos, sino lee uno solo
//         }else console.log("todos los datos fueron leidos")          //el continue siempre se ejecuta una vez siendo nulo. Por eso al final siempre se ejecuta un else, a pesar de que la condicion no se cumpla porque ya leyo todos los objetos
//     })                                                              //como en la ultima vuelta se convierte en nulo el result, usamos el else para decir q todos los datos fueron leidos.

// }



// //Modificar objetos:
// //es lo mismo que cuando los agregamos pero con put. Veremos que muchas lineas se repiten.

// const modificarObjeto = (key,objeto) =>{                                             
//     const db = IDBRequest.result;                                        
//     const IDBtransaction = db.transaction("nombres","readwrite");                                                                           
//     const objectStore = IDBtransaction.objectStore("nombres");           
//     objectStore.put(objeto,key);                                       //vemos que las 3 lineas de la funcion  son =les, y las ultimas 2 similares (solo cambian el mensaje). Put si no existe el objeto lo agrega, y si si existe lo modifica.              
//     IDBtransaction.addEventListener("complete",()=>{                    
//         console.log("objeto modificado correctamante");
//     })
// }
// //la  funcion se ejecutaria así en consola:  modificarObjeto(3,{nombre: "cofla"});
// //por alguna razon si la ejecuto aca no funciona.



// //Eliminar objetos:

// //las primeras 3 lineas de la funcion son =les. Y las ultimas 2 similares.
// const eliminarObjeto = key =>{                                             
//     const db = IDBRequest.result;                                        
//     const IDBtransaction = db.transaction("nombres","readwrite");                                                                           
//     const objectStore = IDBtransaction.objectStore("nombres");           
//     objectStore.delete(key);                                                   
//     IDBtransaction.addEventListener("complete",()=>{                    
//         console.log("objeto eliminado correctamante");
//     })
// }



// para evetar repetir codigo vamos a crear una funcion para las primeras 3 lineas y ultimas 2 que siempre se repiten:

const getIDBData = (mode,msg)=>{
    const db = IDBRequest.result;                                        
    const IDBtransaction = db.transaction("nombres",mode);                       //en el segundo parametro iria readwrite o readonly, segun la función que usemos pasaremos uno u otro por parametro (readonly solo se usa para leerObjetos)                                                    
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{                    
        console.log(msg);
    })
    return objectStore;
}

//Veamos como aprimar esta funcion en las anteriores:
 //Eliminar:
 const eliminarObjeto = key =>{                                             
    const IDBData = getIDBData("readwrite","objeto eliminado correctamante");       
    IDBData.delete(key);                                                   
    
}

//Modificar:
const modificarObjeto = (key,objeto) =>{                                             
    const IDBData = getIDBData("readwrite","objeto modificado correctamante");     
    IDBData.put(objeto,key);
}

//Leer:
const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();                        
    cursor.addEventListener("success",()=>{
        if(cursor.result){                                           
            console.log(cursor.result.value);                       
            cursor.result.continue()                                  
        }else console.log("todos los datos fueron leidos")         
    })                                                              

}

//Agregar:
const addObjeto = objeto =>{                                            
    const IDBData = getIDBData("readwrite","objeto agregado correctamante");       
    IDBData.add(objeto);                                            
}