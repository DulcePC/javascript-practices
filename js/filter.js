const companiesFilter = [
  {name: "Kation Interactive", category: "Development", start:2019, end:"undefined"},
  {name: "Mctekk", category: "Development", start:2019, end:"undefined"},
  {name: "LeSoluciones", category: "Secretary", start:2015, end:2019},
  {name: "DulcePc", category: "dont know that the fuck it is", start:2015, end:"undefined"},
]

const ageFilter = [12,45,60,50,2,10,35,25,65,89,34,09,23,47,46];

console.log("");

//Filter thins out from array
let canDrink = [];

console.log("");
//this its with filter
console.log("this its filter")
const canDrinks = ageFilter.filter(function(age){
  if(age > 18) {
    return true;
  }
})
console.log(canDrinks);

console.log("");

console.log("clean the code")
const canDrinkClean = ageFilter.filter(age => age > 18);
console.log(canDrinkClean);
console.log("");

const ConfirmCategory = companiesFilter.filter(function(categorys) {
  if ( categorys.category === "Secretary") {
   return true;
  }
})

console.log(ConfirmCategory);