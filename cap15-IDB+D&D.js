const IDBRequest = indexedDB.open("daltobase",1);
IDBRequest.addEventListener("upgradeneeded",()=>{       //verifica si esta creada, en caso de que no este creada y la tengamos que crear: deberemos agregar las tablas
    console.log("se creo correctamente");
    const db = IDBRequest.result;                     //aca sí creamos al base de datos, a partir de que la solicitud  (l5) fue exitosa  
    db.createObjectStore("nombres",{                   //aca creamos el almacecnamiento de objetos. El primer parametro es el nombre del object store, y el segundo es el "key". Hay 2 tipos de key, como arrais asociativos o como arrai comunes. Tenemos autoIncrement que ahce q a medida q hacemos registros el key aumenta, es como un id es una key unica q identivida cada dato.
        autoIncrement: true                           //asi se autoincrementa la key a medida q creamos datos para que todos sean distintos
    });                       
})


IDBRequest.addEventListener("success",()=>{
    leerObjetos();
})

IDBRequest.addEventListener("error",()=>{
    console.log("ocurrio un error");
})

document.getElementById('add').addEventListener("click",()=>{
    let nombre = document.getElementById("name").value;
    if(nombre.length > 0){
        if (document.querySelector(".posible") != undefined){
            if (confirm("Hay elementos sin guardar: ¿quiere continuar?")){
                addObjeto({nombre});                    //que es un shorthand de {nombre:"nombre"}
                leerObjetos();
            }
        } else {
            addObjeto({nombre});                    
            leerObjetos();
        }
    }   
})

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
   const fragment = document.createDocumentFragment();
   document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if(cursor.result){           
            let elemento =  nombresHTML(cursor.result.key,cursor.result.value);                               
              fragment.appendChild(elemento);                    
            cursor.result.continue()                                  
        }else document.querySelector(".nombres").appendChild(fragment);      
    })                                                              

}

//Agregar:
const addObjeto = objeto =>{                                            
    const IDBData = getIDBData("readwrite","objeto agregado correctamante");       
    IDBData.add(objeto);                                            
}

const nombresHTML = (id,name)=>{
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");          //para q no salte la linea roja del autocorrector

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{                       //para q cuando se cambie la clase se cambie de color.
        saveButton.classList.replace("imposible","posible")
    })

    saveButton.addEventListener("click",()=>{
        if (saveButton.className == "posible"){
            modificarObjeto(id,{nombre: h2.textContent});
            saveButton.classList.replace("posible","imposible");
        }

    })

    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container
}

