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

