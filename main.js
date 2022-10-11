//EJERCICIO 1--------------------------------------------------------
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
//EJERCICIO 2---------------------------------------------------------
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
// Obtener valor del boton en html Ejercicio 2
const boton=document.getElementById('btnValidar');
boton.addEventListener('click',fnControlaCaracteres);//Llamada evento para ejecutar funcion


//EJERCICIO 3---------------------------------------------------------
// Patrones de expresiones regulares
// / con esto se comienzan los patrones de expresiones regulares
// con el sombrero se especifica que debe comenzar de esta manera. Y $ al final de los corchetes para terminar
// el sombrero dentro de los corchetes es una negación pero con el $ no funciona

let txtCaracter=document.querySelector('#txtCar');
let btnCaracter=document.querySelector('#btnCar');
let texto1="Correcto";
let texto2="Incorrecto";
let patronLetra= /^[a-zA-Z]/; //Patron debe comenzar por una letra mayuscula o minuscula
let patronVocal=/[aeiouAEIOUáéíóú]/; //Patron debe contener vocales

function validarLetras(){
    if (patronLetra.test(txtCaracter.value) && patronVocal.test(txtCaracter.value)) {
        document.querySelector("#errorCar").innerHTML=texto1
    }else{
        document.querySelector("#errorCar").innerHTML=texto2
    }
}
btnCaracter.addEventListener('click',validarLetras);

let txtCarNum= document.querySelector('#txtCarNum');
let btnCarNum= document.querySelector('#btnCarNum');
let patronCar= /^[a-zA-Z0-9]*$/
let patronNum= /[0-9]{1}/

function ValidarNumCar() {
    if (patronNum.test(txtCarNum.value)&&patronCar.test(txtCarNum.value)) {
        document.querySelector("#errorCarNum").innerHTML=texto1
    }else{
        document.querySelector("#errorCarNum").innerHTML=texto2
    }
}
btnCarNum.addEventListener('click',ValidarNumCar);

let txtNum= document.querySelector('#txtNum');
let btnNum= document.querySelector('#btnNum');
let patronNumber= /^607+[0-9]{7}/

function ValidarNum() {
    if (patronNumber.test(txtNum.value)) {
        document.querySelector("#errorNum").innerHTML=texto1
    }else{
        document.querySelector("#errorNum").innerHTML=texto2
    }
}
btnNum.addEventListener('click',ValidarNum);

//  Ejercicio 4-----------------------------------------
let textoPal=document.querySelector('#txtPalabras');
// Evento Keyup cada vez que se escribe un caracter se activa
textoPal.addEventListener('keyup',alertLetra)
function alertLetra(){
    // Manda una alerta con lo que se escribió
    alert("Escribiste: "+textoPal.value);
}


let textoCont=document.querySelector('#txtCaracteres');
//  Evento de escucha keyup se ejecuta cada que se escribe un caracter
textoCont.addEventListener('keyup',contarCar);
// Funcion contar los caracteres
function contarCar(){
   let disponibles=50-textoCont.value.length;
   document.querySelector('#cantiPalabras').innerHTML=disponibles;
   if (disponibles===0) {
    alert("Has llegado al limite");
    textoCont.disabled='true';
   }
}

// Ejercicio 5----------------------------------------------
// Opción 2 se trae el id de la imagen
// let image1=document.getElementById('img1');
// Se hace click y como se crea una funcion flecha donde se activa la funcion de cambio
// image1.addEventListener('click',()=>muestra('muestra1'))

function muestra(num){
    // Obtenemos el source de la imagen obtenida en la posicion num
    let imagen=document.images[num].src
    // Obtenemos la posicion de la imagen principal
    let grande=document.images["Principal"];
    // Se realiza el cambio entre imagenes
    grande.src=imagen;
}

// Ejericico 6-------------------------------------------------------------
// Insertando nodos
// function fnAgregarLista() {
//     const node=document.createElement('li');
//     const textNode=document.createTextNode('water');
//     node.appendChild(textNode);
//     document.getElementById('myList').appendChild(node);
// }
// document.getElementById('btnCrear').addEventListener('click',fnAgregarLista)

// Creamos un nodo de tipo p y un texto
const nuevoElemento=document.createElement('p');
const text=document.createTextNode('Insertando nuevo texto -COEX-')
// Opción 1******************
nuevoElemento.appendChild(text); //Agregamos al p el texto
// Opción 2************
// const nuevoNodo=nuevoElemento.appendChild(text);
function fnCrear() {
    const crear=document.getElementById('newText')
    crear.appendChild(nuevoElemento);
}
document.getElementById('btnCrear').addEventListener('click',fnCrear);

function fnCopiar() {
    // Traemos el elemento p
    let copiarNodo=document.getElementById('newText');
    // Creamos una copia del elemento p
    copia=copiarNodo.cloneNode(true);
    // LO mandamos a imprimir 
    document.getElementById('copia').appendChild(copia);
}
document.getElementById('btnCopiar').addEventListener('click',fnCopiar);
function fnEliminarNodo() {
    // Traemos el p
    let eliminarNodo=document.getElementById('newText');
    // LLame al ontenedor padre y borre el hijo 
    eliminarNodo.parentNode.removeChild(eliminarNodo);
}
document.getElementById('btnEliminar').addEventListener('click',fnEliminarNodo);

// Ejercicio 7--------------------------------------------------------------------
// Almacenamos la lista
let listaElementos=document.querySelector('#elementos');

function fnAgregarElemento(evento) {
    evento.preventDefault();// Cuando le de click al boton no se refresque la pagina
    // Capturamos el valor de la caja de texto
    let newElement=document.getElementById('txtElement').value;
    // Creamos un nuevo li y el boton de eliminar
    let li=document.createElement('li');
    let btnDelete=document.createElement('button');
    // agregar elemento a las clases
    li.className="list-group-item";
    btnDelete.className="btn btn-light btn-outline-danger btn-sm float-end delete";

    // Agregamos el nodo de texto
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    // Agregamos el li a la lista
    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}
let form=document.querySelector('#frmList');
form.addEventListener('submit',fnAgregarElemento);

function fnEliminar(evento) {
    if (evento.target.classList.contains("delete")) {
        if (confirm("Seguro que desea eliminar?")) {
            let li=evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }
}
listaElementos.addEventListener('click',fnEliminar);