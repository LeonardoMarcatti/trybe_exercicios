// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.

let total = 0;

for (let index = 1; index <= 50; index++) {
  total += index;
};

console.log('A soma de 1 a 50 é: ' + total);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let qte = 0;

for (let index = 2; index <= 150; index++) {
  if (index%3 == 0) {
    qte++;
  };
};

if (qte == 50) {
  console.log('Mensagem secreta!');
};

console.log('A quentidade de ítens divisíveis por 3 é: ' + qte);

//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.

let nat = 27;
let renan = 25;
let sincero = 20;

if (nat < renan && nat < sincero) {
  console.log('Nat é a pessoa mais jovem!');
} else if(renan < nat && renan < sincero){
  console.log('Renan é a pessoa mais jovem!');
} else{
  console.log('Sincero é a pessoa mais jovem!');
};
