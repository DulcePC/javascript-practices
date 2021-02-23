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
//The arr.join() method is used to join the elements of an array into a string. 
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
    { nombre: "pancho" , precio: "Gratis"}
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
