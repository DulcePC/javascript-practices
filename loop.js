let dulce = 22;
while(dulce <= 18) {
    console.log("tu no puede hacer lo que se te venga en gana no mi crazy im sorry");
}

let totalSerrucho = 10;
for (serrucho = 0; serrucho < totalSerrucho; serrucho++ ) {
    console.log("ya tenemos pal wendy");
}

for (let i = 0; i <= 20; i++) {
    console.log('numero' + ' ' + i);
}

console.log("")
//Pares y impares
console.log("pares y impares")
for (let i = 0; i <= 20; i++) {
    if( i % 2 === 0 ) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

console.log("")
// Encontrar todos los divisores de un número.
console.log("Encontrar todos los divisores de un número")
//12
for ( let i = 0; i <= 12; i++) {
    if( 12 % i === 0) {
        console.log(i)
    }
}

console.log("")
// Determinar si un número ingresado por el usuario en un loop es primo o no, 
//validar que el número ingresado sea mayor o igual a dos.
console.log("Determinar si un número ingresado por el usuario en un loop es primo o no validar que el número ingresado sea mayor o igual a dos");
let numeroPorUsuario ;
converToNumber = parseInt(numeroPorUsuario);
for ( i = 0 ; i <= 10; i++) {
    //validacion del numero
    if(converToNumber === 2) {
        console.log(`${this.converToNumber} Es mayor a 2`)
    } else if (converToNumber >= 3 ) {
        console.log(`${this.converToNumber} mayor a 2`)
    } else {
        console.log(`${this.converToNumber} es menor a 2`)
    }
}
console.log("");

for( i = 0; i < 10; i++) {
    if( i === 5) {
        console.log("es igual a cinco");
        break
    }
    console.log(`numero: ${i}`)
}
console.log("");
const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 400 },
    { nombre: 'television', precio: 200 },
    { nombre: 'tablet', precio: 300 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 90 },
    { nombre: 'celular', precio: 700, descuento: true},
]

for ( i = 0; i < carrito.length; i++) {
    console.log(carrito[i])

    if(carrito[i].descuento) {
        console.log(`El articulo: ${carrito[i].nombre} tiene descuento`)
    }
}
console.log("");
//Fizz Buzz
//Multiplo de 3: fizz
//multiplo de 5: buzz
//multiplo de 5 y 3 : fizzbuzz
//Los multiplos de un numero son cuando al dividir por el numero que buscas da 0
for (i = 0; i < 100; i++) {
  if(i % 15 === 0) {
    console.log(`${i} fizzfuzz`)
  } else if(i % 3 === 0) {
    console.log(`${i} fizz`)
  } else if(i % 5 === 0) {
    console.log(`${i} fuzz`)
  }
}

console.log("");
//While
let friendsYourParty = 5;
while (friendsYourParty < 10 ) {
    friendsYourParty++;
    console.log(friendsYourParty);
}

console.log("");
//Do while
do {
    friendsYourParty++;
    console.log(friendsYourParty);
} while (friendsYourParty < 10);
//for of
//itera sobre arreglos
console.log("");

const pendientes = [ 'tarea', 'estudiar', 'ejercicio'];
for (let pendiente of pendientes) {
    console.log(pendiente);
}

console.log("");
//for in
//itera sobre objetos
for (let pendiente in pendientes) {
    console.log(pendiente);
}
console.log("");
const automovil = {
    modelo: 'camaro',
    year: 1244,
    motor: '2.3'
}

for( let [llave, valor] of Object.entries(automovil)) {
    console.log(valor)
    console.log(llave)
}