let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let qte_impares = 0
for (let index = 0; index < numbers.length; index++) {
  console.log(index, ' --> ' + numbers[index]);
  soma += numbers[index];
  if (numbers[index]%2 == 1) {
    qte_impares++;
  };
};

let media = (soma/numbers.length).toFixed(2);

console.log('Soma: ' + soma);
console.log('Média: ' + media);

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
};

let ordenados = numbers.sort((a, b) => a - b);

console.log('Maior valor: ' + ordenados[ordenados.length-1]);

if (qte_impares) {
    console.log('Quantidade de ímpares: ' + qte_impares);
} else {
  console.log('Nenhum valor ímpar encontrado');
};

console.log('Menor valor: ' + ordenados[0]);

let newNumbers = [];
let half = [];

for (let index = 0; index <= 24; index++) {
  newNumbers[index] = index+1;
  half[index] = newNumbers[index]/2;
};

console.log('New Array: ', newNumbers);
console.log('metade: ', half);

