const producto = {
  nombre: "Termo",
  color: "verde",
  tamaño: "Grande",
  cantidad: 1,
  informacion: {
    peso: "1kg",
    medida: "1 metro",
    fabricacion: {
      pais: "China"
    }
  },
  utilizar: function() {
    console.log(`Bebe agua cerdo! ${nombre}`)
  }
}

console.log(producto);
console.log(producto.nombre);

//Agregar propiedades
// producto.imagen = "imagen.jpg";

//Delete
delete producto.tamaño;

//Asignar valor de un objeto a una variable
nombreDelProducto = producto.nombre;

//Nueva forma = destructuring
//Extrae y crea el nombre de la variable del objeto
//Nombre es el nombre de la variable y del cual esta obteniendo el valor
const {nombre} = producto;
console.log(nombre);
console.log("")

const { color } = producto;
console.log(color);
console.log("");
console.log(producto.informacion.peso);
console.log(producto.informacion.fabricacion.pais);

// destructuring de objetos dentro de objetos
const {nombreDelPais, informacion: {fabricacion}} = producto;
console.log(fabricacion);

//Una variable que esta declarada como un objeto si puede reescribir sus propiedades

//NO me permite agregar mas propiedades al objeto
// Object.freeze(producto);
producto.imagen = "imagen.jpg";
console.log(producto);
console.log(Object.isFrozen(producto))
console.log("");

//No se pueden agregar o eliminar propiedades pero si puedes modificar las existentes;
// Object.seal(producto);
producto.nombre = "Vaso";
console.log(producto.nombre);
console.log(Object.isSealed(producto));

//Unir dos objetos
const luis = {
  nombre: "luis",
  tieneTermo: false
}

const resultado = Object.assign(producto, luis);
console.log(resultado);

const resultado2 = {...producto,...luis};
console.log(resultado2);

//This
producto.utilizar();