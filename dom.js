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