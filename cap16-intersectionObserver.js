//es para observar si algo esta en el viewport del navegador o no, si es visible o no.

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) => {                                 //esto nos va a devolver un arrai
    for (const entry of entries) {
        if (entry.isIntersecting) console.log("se está viendo la caja ",entry.target.textContent);
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for (const caja of cajas){
    observer.observe(caja);
}

//Lazy load.

//es para que la pagina se cargue a medida que se baja en la barra de navegacion
 

const publicaciones = document.querySelector(".publicaciones");

const createPublicationCode = (name,content)=>{
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const cargarPublicaciones =  async num =>{
    const request = await fetch("informacion.txt");     //no tengo este archivo, era un arrai con objetos.
}

