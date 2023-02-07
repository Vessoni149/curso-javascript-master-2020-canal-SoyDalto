const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#946");
})

zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
})

zona.addEventListener("drop",e=>{
    e.preventDefault();                 //esto para que cuando arrastremos el archivo de texto no lo abra en otra pestaña
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
    zona.style.border = "4px solid #888"
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}




// const cargarArchivo = ar =>{
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load",e=>{
//         document.querySelector(".resultado").textContent = e.currentTarget.result;
//     })
// }

//para imagenes:
// const cargarArchivo = ar =>{
//     const reader = new FileReader();                            //primero se abre el reader
//    reader.readAsDataURL(ar);                                    //se especifica que lea una url
//     reader.addEventListener("load",e=>{                         //cuando carga creamos una url para el archivo (parametro)
//        let url = URL.createObjectURL(ar);  //creamos la url para el archivo
//         let img =  document.createElement("IMG");               //creamos una imagen      
//         img.setAttribute("src",url);                            //decimos que la url de la imagen es al url que acabamos de crear. La incertamos en el html
//         document.querySelector(".resultado").appendChild(img);
//     })
// }

//para videos:

const cargarArchivo = ar =>{
    const reader = new FileReader();                           
   reader.readAsArrayBuffer(ar);
     reader.addEventListener("progress",e=>{
         let carga = Math.round(e.loaded / ar.size * 100); //e.loaded nos dice cuanto cargo del total del peso del archivo. ar.size dice el peso total del archivo. Y lo multiplico * 100 xq es un porcentaje.
        zona.textContent = `${carga}`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga/3.6}`;
     })                                  
    reader.addEventListener("load",e=>{   
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: 'video/mp4'});                     
        let url = URL.createObjectURL(video);  
        let img =  document.createElement("VIDEO");               
        img.setAttribute("src",url);                           
        document.querySelector(".resultado").appendChild(img);
        img.play();
     
    })
}
//los videos largos tardan mucho en cargar, x eso es buena idea poner una barra de carga para que el usuario sepa que se esta ejecutando algo.



