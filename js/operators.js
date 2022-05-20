const dulceEdad = 23;
const numeroString = "20";
const mamiEdad = 30;

//mayor a
console.log(dulceEdad > mamiEdad);
console.log(mamiEdad > dulceEdad);
console.log("");

//menor que
console.log(mamiEdad < dulceEdad);
console.log(dulceEdad < numeroString);
console.log("");

// Igual que
console.log(dulceEdad == numeroString);
console.log(dulceEdad == mamiEdad)
console.log("");

//comparador estricto
console.log(dulceEdad === numeroString);
console.log(dulceEdad === parseInt(numeroString));
console.log(typeof(numeroString));
console.log(parseInt(numeroString));
console.log("");

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log("");

//Undefined
//la  variable esta definida pero su valor no
let animal;
console.log(animal);

//Null
let animal2 = null;
console.log(animal2);
console.log(typeof(animal2));

console.log(animal === animal2);
