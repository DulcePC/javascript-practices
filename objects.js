const producto = {
  nombre: "Termo",
  color: "verde",
  tamaño: "Grande",
  cantidad: 1
}

console.log(producto);
console.log(producto.nombre);

//Agregar propiedades
producto.imagen = "imagen.jpg";

//Delete
delete producto.tamaño;

//Asignar valor de un objeto a una variable
nombreDelProducto = producto.nombre;

//Nueva forma
//Extrae y crea el nombre de la variable del objeto
//Nombre es el nombre de la variable y del cual esta obteniendo el valor
const {nombre} = producto;
console.log(nombre);
console.log("")

const { color } = producto;
console.log(color);
