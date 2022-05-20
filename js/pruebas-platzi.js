const tipoDeSuscripcion = "basic";

if(tipoDeSuscripcion == "free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if ( tipoDeSuscripcion == "basic") {
  console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
} else if (tipoDeSuscripcion == "expert") {
  console.log("Puedes tomar casi todos los cursos de platzi durante un year");
} else if(tipoDeSuscripcion == "expertPlus") {
  console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un year")
}

//
if(tipoDeSuscripcion == "free") {console.log("Solo puedes tomar los cursos gratis");}
if(tipoDeSuscripcion == "basic") {console.log("Puedes tomar casi todos los cursos de platzi durante un mes");}
if(tipoDeSuscripcion == "expert") {console.log("Puedes tomar casi todos los cursos de platzi durante un year");}
if(tipoDeSuscripcion == "expertPlus") {console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un year");}

let userSubcription = "free";
const suscripciones = [
  {
    nivel: "free",
    mensaje: "Solo puedes tomar los cursos gratis"
  },
  {
    nivel: "basic",
    mensaje: "Puedes tomar casi todos los cursos de platzi durante un mes"
  },
  {
    nivel: "expert",
    mensaje: "Puedes tomar casi todos los cursos de platzi durante un year"
  },
  {
    nivel: "expertPlus",
    mensaje: "tu y alguien mas pueden tomar todos los cursos de platzi durante un year"
  },
];

for (i = 0; i < suscripciones.length; i++) {
  if(suscripciones[i].nivel == userSubcription) {
    console.log(suscripciones[i].mensaje)
  }
}

let i = 0;
while(i <= 5) {
  console.log(i);
  i++;
}

let x = 10;
while(x >= 2) {
  console.log(x);
  x--;
}

function answer() {
  var question = prompt("Cuanto es 2 + 2? ");
  var answer = parseInt(question);
  if(answer === 4) {
    console.log("Bien!")
  } else {
    console.log("Mal")
  }
}
answer();

let frutas = ["Manzana", "Banana", "Kiwi"];

function showFruta(fruta) {
  console.log(fruta[0]);
}
showFruta(frutas);

let housePeople = ["Dulce", "Luis", "Pancho"]
function showNames(names) {
  for (let name of names) {
    console.log(name);
  }
}
showNames(housePeople);

let car = {
  color: "red",
  marca: "Honda civic",
  puertas: 4
}

function showVehicle(vehicle) {
  for( let [propiedad, valor] of Object.entries(vehicle)) {
    console.log(propiedad + ":" + " " + valor);
  }
}
showVehicle(car);