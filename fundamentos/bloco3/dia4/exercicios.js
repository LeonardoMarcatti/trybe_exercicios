let valor = 0;
let qte  = 0;
for (let index = 0; valor <= 45 ; index++) {
    qte ++;
    valor += index;
};

console.log(qte);

let soma = 0;
for (let index = 1; index <= 100; index++) {
  soma += index;
};

console.log('Soma: ' + soma);

let fatoral = 1;
for (let index = 10; index > 0 ; index--) {
  fatoral *= index;
};

console.log('Fatoral de 10 é: ' + fatoral);

let palavra = 'tryber';
let inverso = '';
for (let index = palavra.length; index >= 0; index--) {
  inverso += palavra.charAt(index);
};

console.log('O inverso de ' + palavra + ' é: ' + inverso);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';
let menor = '';

for (let index = 0; index < array.length; index++) {
  let length = array[index].length;
  if (length > maior.length) {
    maior = array[index];
  };
};

for (let index = 0; index < array.length; index++) {
  let length = array[index].length;
  if (menor.length == 0) {
    menor = array[index];
  };

  if (length < menor.length) {
    menor = array[index];
  };
};

console.log('Maior: ' + maior, 'Menor: ' + menor);

let max = 50;
let maior_primo = 0;
let a = new Array();

    for(var i=1; i<=max;i++){
        a[i-1]=i;
    };
    for(let i1=1; i1<=max; i1++){
        for(let i2 = 1; i2<=i; i2++){
            if(i1%i2 == 0 && (i2 != i1) && (i2 != 1)){
                let prime = a.indexOf(i1);
                if(prime > -1){
                   a.splice(prime, 1);
                };
            };
        };
    };

a.sort((a,b) => a-b);

console.log(a[a.length-1]);