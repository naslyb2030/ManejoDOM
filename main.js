//Captura de valores del HTML Ejercicio 1
const lista=document.querySelector('#colors');
const texto=document.querySelector('#texto');
const numero=document.querySelector('#numero');
const valor=document.querySelector('#valor');
const color=document.querySelector('#color');

//Añadiendo evento de escucha y funcion de asignación del ejercicio 1
lista.addEventListener('change',()=>{
   numero.value=lista.selectedIndex;
   texto.value=lista.options[lista.selectedIndex].text; //accediendo a la opciones del indice seleccionado
   valor.value=lista.options[lista.selectedIndex].value;
   color.value=("#"+lista.options[lista.selectedIndex].value)
})

// Funcion expresada Ejercicio 2
const fnControlaCaracteres=()=>{
    const descripcion=document.getElementById('description')
    if (descripcion.value.length==0) { //Obteniendo el tamaño del texto ingresado en el textarea
        alert('Campo de texto vacio');
    }else if(descripcion.value.length>50){
        alert('El texto debe ser menor o igual a 50');
    }else{
        alert('Tamaño correcto');
    }
}
// Obtener valor del boton en html
const boton=document.getElementById('btnValidar');
boton.addEventListener('click',fnControlaCaracteres);//Llamada evento para ejecutar funcion