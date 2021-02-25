const temperatureToday = 86;
console.log("");
if(temperatureToday === 86 ) {
    console.log("its damn to hot");
} else {
    console.log("its not hot")
}

console.log("");

const buenEstudiante = 100;
if (buenEstudiante <= 70) {
    console.log("eres buen estudiante")
} else {
    console.log("debes estudiar mas");
}

console.log("");

const meritorio = 96;
if(meritorio >= 80 && meritorio <= 94) {
    console.log("eres buen estudiante pero no meritorio");
} else if (meritorio <= 75) {
    console.log("eres mal estudiante, debes esforzarte un poco mas");
}else if (meritorio >= 95) {
    console.log("en hora buena! eres meritorio");
}

console.log("");

const personLimit = 100;
const estadio = 96;

if(estadio === personLimit) {
    console.log("no se aceptan mas personas");
} else if ( estadio <= 94) {
    console.log("pueden entrar gente");
} else if(estadio >= 95 && estadio <= personLimit) {
    console.log("casi casi ya no entra nadie"); 
}

console.log("");
const puntaje = 1000;

if(puntaje == 1000) {
    console.log("si es igual")
} else {
    console.log("no es igual")
}

// != comparar que sea diferente
// === estrictamente igual

//switch case

const metodoDePago = "efectivo";

switch(metodoDePago) {
    case 'efectivo': 
        pagar(); 
        console.log("pagaste con efectivo"); 
    break;
    case 'cheque': 
        console.log("pagaste con cheque"); 
    break;
    default: 
        console.log("aun no soporto ese metodo de pago");
    break;
}

function pagar() {
    console.log("pagando...");
}

console.log("");
// && (and) "y" operator

const usuario = true;
const puedePagar = false;

if ( usuario && puedePagar ) {
    console.log("Si eres usuario y si puedes pagar")
} else if(!usuario){
    console.log("no eres usuario")
}else if(!puedePagar){
    console.log("no puede pagar")
} else {
    console.log("No, no puede comprar")
}