const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve("Todo nice");
    } else {
      reject("Todo mal");
    }
  })
}

helloPromise()
  .then(Response => console.log(Response))
  .catch(error => console.log(error));


const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008
  },
  {
    id: 2,
    title: "Spiderman: Homecoming",
    year: 2017
  },
  {
    id: 3,
    title: 'Avenger: Endgame',
    year: 2019
  }
]

// 1:
// const getDatos = datos.map(item => console.log(item.title));

// 2:
// const getDatos = () => { return datos;}
// console.log(getDatos());

const url = 'https://pokeapi.co/api/v2/pokemon/1/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
