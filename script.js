import {barcelona, roma, paris, londres}from './ciudades.js';

//Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a')
//console.log(enlaces)
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(){
            //REMOVER ACTIVO de todas los enlaces
            enlaces.forEach(function(enlace){
                enlace.classList.remove('active');
            });
            //AGREGAR ACTIVE AL QUE CORRESPONDA
            
            this.classList.add('active')          
            
            //TRAER INFORMACION CORRESPONDIENTE AL ENLACE ACTIVE
            
            let contenido = obtenerContenido(this.textContent)
            
            //MOSTRAR CONTENIDO EN EL DOM
            
            tituloElemento.innerHTML = contenido.titulo
            subtituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
    });
        
});
//FUNCIÓN PARA TRAER LA INFORMACIÓN CORRECTA DESDE ciudades.js
function obtenerContenido(enlace){

    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace]
}