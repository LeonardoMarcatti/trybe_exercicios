let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const key in names) {
  console.log(`Olá ${names[key]}`);
};

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
  console.log(key + ':', `${car[key]}`);
};

/**
 * !Apagar atributo ou método de um objeto
 */

delete car.year;

console.log('Carro deletado:', car);