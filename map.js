const companiesMap = [
  {name: "Kation Interactive", category: "Development", start:2019, end:"undefined"},
  {name: "Mctekk", category: "Development", start:2019, end:"undefined"},
  {name: "LeSoluciones", category: "Secretary", start:2015, end:2019},
  {name: "DulcePc", category: "dont know that the fuck it is", start:2015, end:"undefined"},
]

const companiesName = companiesMap.map(function(company) {
  return company.name;
})
console.log(companiesName);

const ageMap = [12,45,60,50,2,10,35,25,65,89,34,09,23,47,46];
const ageSquared = ageMap.map(age => Math.sqrt(age));
console.log(ageSquared);
//Diferencie entre foreach y map, map te crea una variable a diferencia de map