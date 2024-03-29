
function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(4));

console.log("");

function saludos(name,lastName,range,greetingType) {
    return `${greetingType} ${range} ${lastName} para el sacrificio de tu alma y entregarselo a los Dioses,${name}, espero que disfrutes de todo este viaje astral mientras segundo a segundo tu alma es consumida por nuestro Dios de la muerte para un mundo mejor, gracias ${range} ${lastName} descansa en paz`;
}

console.log(saludos("Dulce","Pérez","esclava","Bienvenida"));
console.log("");

function sumar() {
    console.log(2+2);
}

sumar();

//function expression - funcion de expresion

const sumar2 = function() {
    console.log(3 + 5)
}

sumar2();

//Diferencia entre function expression y declaracion de funcion:
//Bueno es que la declaracion de funcion puedes llamar la funcion incluso cuando la ejecutas antes de declarar la funcion a diferencia de expresion de funcion

//Diferencia entre funciones y metodos:
//Hacen lo mismo lo unico que lo hace cambiar es la manera en que lo llamas 
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //esto es una function
console.log(numero1.toString()); //esto es un metodo

function saludar(nombre, apellido = 'no tiene apellido') { //nombre y apellido son parametros
    console.log( `Hola ${nombre} ${apellido}`);
}

saludar('dulce',"perez"); //argumentos
saludar('dulce'); //parametros por default cuando en el parametro le agregas un valor, si falta un argumento al llamar la funcion

console.log("");

function restar(a,b) {
    return a - b;
}

const resultado = restar(10 , 43);
console.log(restar);
console.log(resultado);

console.log("");

let total = 0;
function agregarAlCarrito(precio) {
    return total += precio;
}

function calcularImpuestos(total) {
    return total * 1.15;
}

total = agregarAlCarrito(400);
total = agregarAlCarrito(4400);

console.log(total);

const totalAlPagar = calcularImpuestos(total);

console.log(totalAlPagar);


//cuando un objeto tiene funciones estos se le conocen como metodos de propiedad
var canciones = [];
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion numero ${id}`)
    },
    pausar: function(id) {
        console.log(`pausando cancion numero ${id}`);
    },
    agregarCanciones: function(...nombres) {
        canciones.push(nombres);
        console.log(`La cancion con el nombre: ${nombres} ha sido guardado`);
    },
    crearPlaylist: function() {
        nombreDelAlbum = prompt("Introduzca nombre de su album");
        if((nombreDelAlbum !== null) && (nombreDelAlbum !== "")) {
            console.log(`El nombre de su album a sido exitosamente guardando como: ${nombreDelAlbum}`);
            this.agregarCanciones(prompt("introduzca una cancion:"));
        } else {
            console.log("proceso cancelado");
        }
    }
}

reproductor.reproducir(49);
reproductor.pausar(49)


// arrow function
//si es una sola linea lo puedo usar sin {}
const aprendiendo = () => console.log("aprendiendo js");

console.log("");
aprendiendo();

//forEach
const carrito2 = [
    { nombre: "queso" , precio: 300},
    { nombre: "monitor" , precio: 2300},
    { nombre: "pancho" , precio: "Gratis"}
]

carrito2.forEach((produtoDeCarrito2) => {
    console.table(produtoDeCarrito2.nombre);
})
console.log("");
//map
carrito2.map((produtoDeCarrito2) => {
    console.table(produtoDeCarrito2.nombre);
})