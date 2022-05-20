
const groupKation = [
    "Paul Jiminez",
    "Hector Herasme",
    "Cesar Lora",
    "Dulce Perez"
]

const animales = [
    {
        activos: "perros",
        pasivos: "gatos"
    },
    {
        acuaticos: "ballenas,tiburon",
        silvestres: "leones"
    }
]

console.log(groupKation[0]);
console.log("");
console.log(groupKation[3]);
console.log("");
//Esto es como agregar algo entre los elementos del arrary
//The arr.join() method is used to join the elements of  an array into a string. 
console.log(groupKation.join(" "));
console.log("");
//Esto es agregar elementos al array, al final
groupKation.push("Ninoska");
// agregar al inicia del array
groupKation.unshift("ricardo");
// Y con esto compruebas de que realmente se agrego al consultar la posicion del item agregado
console.log(groupKation[4]);
console.log("");
//Esto es la posicion del objeto a la que quieres ingresar y luego al dato que buscas del objeto en esa posicion
//ejemplo el array animales el objeto que esta en posicion [1] es el segundo objeto. y si quiero acceder a uno de esos datos
//llamo al campo al que deseo ingresar
console.log(animales[1].acuaticos);
console.log(animales[0].activos)
console.log("");
for (let i = 0; i < groupKation.length; i++) {
    console.log(groupKation[i]);
}
console.log("");
for (let i = 0; i < groupKation.length; i++) {
    test = [i];
    test.push("agrege esto");
    console.log(test.join(" "));
}
console.log("");
let numberOfRun = 0;
groupKation.forEach(function(groupKation, index){
    console.log(index, groupKation);
    numberOfRun++;
    console.log(numberOfRun);
})

console.log("")
const meses = ['enero', 'febrero', 'marzo','abril'];
//cuanto mide el arreglo
console.log(meses.length);
console.log("")
for(i=0; i < meses.length; i++) {
    console.log(i)
}

const carrito = [];
const producto = {
    nombre: "queso",
    precio: 400
}

const producto2 = {
    nombre: "plato",
    precio: 200
}

const perrito = {
    nombre: "pancholo",
    precio: "gratis"
}

//agregar elementos al carrito
let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [...resultado, perrito];
console.table(resultado);

//eliminar elementos de un array
//eliminar el ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);
//inicio del arreglo
carrito.shift();
console.log(carrito);

//eliminar cualquier elemento
carrito.slice(1,1);
console.log(carrito)

//destructuring
const numeros = [10,20,30,40.50];
const [primero , segundo, tercero] = numeros;
console.log(primero);
console.log(tercero);


//forEach
const carrito2 = [
    { nombre: "queso" , precio: 300},
    { nombre: "monitor" , precio: 2300},
    { nombre: "pancho" , precio: 500}
]

carrito2.forEach(function(produtoDeCarrito2){
    console.table(produtoDeCarrito2.nombre);
})
console.log("");
//map
carrito2.map(function(produtoDeCarrito2){
    console.table(produtoDeCarrito2.nombre);
})

//la diferencia es que .map va a llenar una variable con un nuevo arreglo, es decir puedes crear una variable con map
const nuevoArreglo = carrito2.map(function(produtoDeCarrito2){
    return produtoDeCarrito2.nombre;
})

console.log(nuevoArreglo);

console.log("");
const pendientes = [ 'tarea', 'estudiar', 'ejercicio'];
const pendientes2 = ['leer', 'jugar'];

//comprobar si un valor existe en un arreglo de indices
pendientes.forEach((pendiente) => {
    if(pendiente === 'tarea') {
        console.log("tarea si existe")
    }
})
//con array method
const resultado2 = pendientes.includes('tarea');
console.log(resultado2)

//si quieres revisar si un  valor existe en un arreglo de objetos .some
const existe = carrito2.some((producto) => {
    return producto.nombre === 'celular';
})
console.log(existe);

console.log("");
//FindIndex: Saber en que indice de nuestro arreglo se encuentra un elemento
pendientes.forEach((pendiente, index) => {
    if(pendiente === 'ejercicio') {
        console.log(index);
    }
})
//con array method
const indice = pendientes.findIndex((pendiente) => {
    return pendiente === 'tarea';
})
console.log(indice);
//comprobar un indice de un arreglo de objetos
indiceDeObjetos = carrito2.findIndex((producto) => {
    // return producto.nombre === 'estudiar'
    return producto.nombre === 'monitor'
});
console.log(indiceDeObjetos);

console.log("");
//reduce
let resultado3 = carrito2.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado3);

console.log("");
//Filter: va crearte un nuevo arreglo basado en el parametro que haz pasado
const resultado4 = carrito2.filter((producto) => {
    return producto.precio > 400;
})
console.log(resultado4);
const resultado5 = carrito2.filter((producto) => {
    return producto.nombre != 'pancho';
})
console.log(resultado5);

console.log("");
//Find: va crearte un nuevo arreglo basado en el condicion que estas realizando
// let resultado6 = '';
// carrito2.forEach((producto, index) => {
//     if(producto.nombre === 'pancho'){
//         resultado6 = carrito2[index];
//     }
// })
// console.log(resultado6);

const resultado7 = carrito2.find( (producto) => {
    return producto.nombre === 'monitor'
})
console.log(resultado7);

console.log("");
//Every: todos los elementos de un arreglo deben de cumplir esa conducion para que nos retorne un true
const resultado8 = carrito2.every( (producto) => {
    return producto.precio < 200;
    //aqui no se cumple porque no todos los precios son menores a 200
})
//por eso imprime false
console.log(resultado8);

console.log("");
//Concat: unir dos arreglos
const resultado9 = pendientes.concat(pendientes2);
console.log(resultado9);

//spread operator
const resultado10 = [...pendientes,...pendientes2];
console.log(resultado10);

console.log("");
