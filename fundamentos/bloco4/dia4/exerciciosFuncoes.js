function palindromo(palavra) {
  let reverse = '';

  for (let index = palavra.length-1; index >= 0; index--) {
    reverse+= palavra.charAt(index);
  };

  if (palavra == reverse) {
    return true;
  };

  return false;
};

console.log(palindromo('ovo'));

let arrayMax = [2, 3, 6, 7, 10, 1];
let max = Object.keys(arrayMax).reduce((a, b) => arrayMax[a] > arrayMax[b] ? a : b);
console.log('Max: ', max);

let arrayMin = [2, 4, 6, 7, 10, 0, -3];
let min = Object.keys(arrayMin).reduce((a, b) => arrayMin[a] < arrayMin[b] ? a : b);
console.log('Min: ', min);

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {

  let maiorNome = nomes[0];

  for (let index = 0; index < nomes.length; index++) {
    if (maiorNome.length < nomes[index].length) {
      maiorNome = nomes[index];
    };
  };

  return maiorNome;
};

console.log('Maior nome: ', maiorNome(nomes));

let arrayRepete = [2, 3, 2, 5, 8, 2, 3];

let numero, qte, freq, valor;
qte = 0;
freq = 0;
valor = 0;
let i = [];

for (let index = 0; index < arrayRepete.length; index++) {
  numero = arrayRepete[index];
  for (let index2 = 0; index2 < arrayRepete.length; index2++) {
    if (numero == arrayRepete[index2]) {
      qte++;
      if (qte > freq) {
        freq = qte;
        valor = arrayRepete[index2];
      };
    };
  };
  qte = 0;
};

console.log('Número: ' + valor, 'Frequencia: ' + freq);

for (let index = 0; index < arrayRepete.length; index++) {
  if (arrayRepete[index] == valor) {
    i.push(index);
  };
};

console.log('Seus índex são: ', i);

function somatorio(num) {
  let soma = 0;
  for (let index = 1; index <= num; index++) {
    soma+=index;
  };

  return soma;
};

console.log('Somatório: ', somatorio(5));

function checkFinal(word, end) {
  return word.endsWith(end);
};

let palavra  = 'Maluco';
let fim = 'uco';
console.log('A palavra ' + palavra + ' termina em ' + fim + '?', checkFinal(palavra, fim));

let table = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

const romanNumber = "MCMLXXXIX";


function romanToInt(val) {
  let acc = 0;
  for (let index = 0; index < val.length; index++) {
    let chave = '';
    if (index < val.length-1) {
      chave = val[index] + val[index+1];
      if (table[chave] > 0) {
        acc += table[chave];
        index++;
        console.log('Dupla:', chave, table[chave]);
      } else {
        chave = chave.slice(0, -1);
        acc += table[chave];
        console.log('Única:', chave, table[chave]);
      };
    } else {
      chave = val[index];
      acc += table[chave];
      console.log('Única:', chave, table[chave]);
    };
  }
  return acc;
};

console.log(romanToInt(romanNumber));