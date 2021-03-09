let friendsYourParty = 5;
while (friendsYourParty < 10 ) {
    friendsYourParty++;
}
console.log(friendsYourParty);


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
let numeroPorUsuario = prompt("introduzca el numero");
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