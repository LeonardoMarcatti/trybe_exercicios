/**
 * *Serve para objetos e arrays
 */

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};

for (const key in player) {
  console.log(key + ':',player[key]);
};

let pizzasDoces = ['chocolate', 'morango', 'baunilha'];

for (const key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
};

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
};

let food = ['hamburguer', 'bife', 'acarajé'];

for (let value of player) {
  console.log(value);
};