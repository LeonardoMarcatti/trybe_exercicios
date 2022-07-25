/**
 * *Objetos
 */

let car = {
  brand: 'FIAT',
  model: '500',
  color: 'branco',
  origem: {
    cidade: 'Betim',
    estado: 'MG'
  },
  'car-code': '123',
  acelerar: function () { 
    return 'VRUMMM';
   }
};

console.log(`O carro da marca ${car.brand}, modelo ${car.model} é da cor ${car.color} e faz ${car.acelerar()}. Foi fabricado em ${car.origem.cidade} - ${car.origem.estado}. Código: ${car["car-code"]}`);

/**
 * @Adicionando atributos e métodos
 */

car['motor'] = '1.6T';
car['freiar'] = function () { return 'Riiiiii!!!' };

console.log(`Esse carro tem um motor ${car.motor} e freia assim: ${car.freiar()}`);

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

/**
 * !Assim não funciona diasDaSemana.3
 */

console.log(diasDaSemana[3]);

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por  vezes em: ${player.bestInTheWorld}`);

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} de prata.`);