//Forma de declarar string
const monitor = "Monitor de 20 pulgdas"
console.log(monitor);

const monitor2 = String('Monitor de 24 pulgadas');
console.log(monitor2);

//metodos de los strings
//conocer la cantidad de texto del string
const animalFavorito = "perro";
console.log(animalFavorito.length);
//IndexOf para saber si la variable tiene la palabra gato/// -1 no tiene ////
console.log(animalFavorito.indexOf('gato'));
//Includes para saber si la variable tiene la palabra gato
console.log(animalFavorito.includes('gato'));
//Concatenar
console.log(monitor.concat(" " + animalFavorito));
console.log(monitor + " " + animalFavorito);
console.log("mi animal favorito es: " +animalFavorito);
//Templates 
console.log(`El ${animalFavorito} es mi animal favorito`);
//trim = Eliminar los espacios en blanco
let espacios = "                 goood             ";
console.log(espacios);
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
console.log(espacios.trimStart().trimEnd());
//replace = Remplazar el texto de un string
//Debes escribir el texto que quieres cambiar y luego el texto por lo cual deseas cambiar
let changeTexts = "good";
console.log(changeTexts.replace('good', 'bad'));
//Slices = Para cortar texto
let eliminarTexto = "Eliminar texto"
console.log(eliminarTexto.slice(0,10));
console.log(eliminarTexto.slice(8));
console.log(eliminarTexto.slice(8,4)); //si es mayor el primero no cuenta
//Repeat = repetor una cadena de texto
const repetir = "repetir";
console.log(repetir.repeat(3));
//Slipt = dividir un string
const dividirString = "dividir un string"
console.log(dividirString.split(" "));
//Convertir a mayusculas o minisculas
const medicina = "PRofesiOnaL de biOlogia";
console.log(medicina.toLocaleUpperCase());
console.log(medicina.toLocaleLowerCase());
//convertir numero a string
const numero = 40;
console.log(numero.toString());



