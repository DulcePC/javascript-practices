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
console.log(groupKation.join(" "));
console.log("");
groupKation.push("Ninoska");
console.log(groupKation[4]);
console.log(animales[1].acuaticos);
console.log("");
for (let i = 0; i < groupKation.length; i++) {
    console.log(groupKation[i]);
}
console.log("");
let numberOfRun = 0;
groupKation.forEach(function(groupKation, index){
    console.log(index, groupKation);
    numberOfRun++;
    console.log(numberOfRun);
}) 