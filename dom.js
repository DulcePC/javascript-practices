let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
console.log(elemento);

//Seleccionar elementos por sus clases
let elemento2 = document.getElementsByClassName('card');
console.log(elemento2);

//Seleccionar elementos por id
let elemento3 = document.getElementById('card');
console.log(elemento3);

//QuerySelector = devuelve el primero que encuentre ( clases y id)
let elemento4 = document.querySelector('.card');
console.log(elemento4);

let titulo = document.querySelector('h1');
console.log(titulo);
console.log(titulo.innerText);   // si en el css tiene un visibility hidden, este no lo va a encontrar
console.log(titulo.textContent); // por el contrario este si y agregarlo
console.log(titulo.innerHTML);   // este otro se trae el html

console.log(titulo.textContent = 'Nuevo titulo');

let imagen = document.querySelector('img');
imagen.src = 'placeholder-img-dos.png';

// cambiar estilos con css
imagen.style.height = '250px';

const cardBody = document.querySelector('.card-body');
console.log(cardBody);
cardBody.classList.add('bg-info', 'd-flex');

let elemento5 = document.querySelector('.card');
console.log(elemento5);
console.log(elemento5.childNodes); // cuenta los espacios como elementos html
console.log(elemento5.children); // lo contrario
console.log(elemento5.parentNode); // el padre del elemento

const elemento6 = document.querySelector('.btn-primary');
console.log(elemento6);
elemento6.remove();

//creando enlace ( creando elementos con js)
const enlace = document.createElement('a');
// agregando texto
enlace.textContent = "Nuevo enlace";
// direccion de enlace
enlace.href = 'https://github.com/';
enlace.target = "_blank";
enlace.classList.add('bg-warning', 'p-2', 'd-block')
//Mostrar enlace
document.querySelector('.d-flex').appendChild(enlace);
console.log(enlace);