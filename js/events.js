const h1 = document.querySelector('h1');
// h1.addEventListener('click', () => {
//   console.log("diste click;")
// });

h1.addEventListener('mouseenter', () => {
  console.log("diste click;")
})

const input = document.querySelector('.form-control');
input.addEventListener('input', (evento) => {
  console.log(evento.target.  value);
})

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("Enviado");
});

window.addEventListener('scroll', () => {
//  console.log("scrolling");
 const scrollY = window.scrollY;
 console.log(scrollY)
})

// event bubbling
let elemento1 = document.querySelector('.card');
let elemento2 = document.querySelector('.card-text');
let elemento3 = document.querySelector('.card-title');

elemento1.addEventListener('click', e => {
  e.stopPropagation();
  console.log("click elemento 1")
})

elemento2.addEventListener('click', e => {
  e.stopPropagation();
  console.log("click elemento 2")
})

elemento3.addEventListener('click', e => {
  e.stopPropagation();
  console.log("click elemento 3")
})