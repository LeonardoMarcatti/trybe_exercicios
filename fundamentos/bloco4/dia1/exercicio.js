let a = 15;
let b = 10;
let c = 12;

function calcular(num1, num2, operacao) {
	switch (operacao) {
		case '+':
			return a+b;
			break;
		case '-':
			return a-b;
			break;
		case '*':
			return a*b;
			break;
		case '/':
			return a/b;
			break;
		default:
			return a%b;
			break;
	}
};

console.log('Soma: ' + calcular(a,b, '+'));
console.log('Subtração: ' + calcular(a,b, '-'));
console.log('Multiplicação: ' + calcular(a,b, '*'));
console.log('Divisão: ' + calcular(a,b, '/'));
console.log('Resto: ' + calcular(a,b, '%'));

if (a > b) {
    console.log('O maior número é: ' + a);
} else {
    console.log('O maior número é: ' + b);
};

if (a > b && a > c) {
	console.log('O maior número é: ' + a);
} else if(b > a && b > c){
	console.log('O maior número é: ' + b);
} else{
	console.log('O maior número é: ' + c);
};

function analizar(p) {
	if (p > 0) {
		return 'Positive';
	} else if( p < 0){
		return 'Negative';
	} else{
		return 'Zero';
	};
};

console.log(analizar(0));


function checkAngulos(a1, a2, a3){
	if ((a1 > 0 && a1 < 180) && (a2 > 0 && a2 < 180) && (a3 > 0 && a3 < 180)) {
		return true;
	} else {
		return false;
	};
};

function checkSoma(a1, a2, a3) {
	if ((a1 + a2 + a3) == 180) {
		return true;
	} else {
		return false;
	};
};

function triangulo(a1, a2, a3) {
	if (checkAngulos(a1, a2, a3)) {
		if (checkSoma(a1, a2, a3)) {
			return 'É um triângulo!'
		} else {
			return 'A soma dos ângulos é diferente de 180°';
		};
	} else {
		return 'Um de seus ângulos é maior que 180° ou menor/igual a zero';
	};
};

console.log(triangulo(60, 60, 60));


function normalizaNome(peca){
	let nome_peca = peca.toLowerCase();
	if (nome_peca == 'peão') {
		return 'peao'
	};

	return nome_peca;
};

function getMovimento(peca) {
	switch (peca) {
		case 'rei':
				console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez.'); 
			break;
		case 'dama':
				console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres'); 
			break;
		case 'torre':
				console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.'); 
			break;
		case 'bispo':
				console.log('Move-se na diagonal, quantas casas quiser.');
			break;
		case 'cavalo':
				console.log('Movimento em L. Sendo que a primeira parte do L anda-se duas casas e a segunda parte do L anda-se apenas uma.'); 
			break;
		case 'peao':
				console.log('Move-se sempre uma casa para frente.'); 
			break;
		default:
			console.log('Peça inexistente.'); 
			break;
	};
}

function movimentoPeca(peca) {
	let nome_peca = normalizaNome(peca);
	getMovimento(nome_peca);
};

movimentoPeca('bispo');


function minhaNota(nota) {
	if (nota >= 90) {
		return 'A';
	} else if(nota >= 80 && nota < 90){
		return 'B';
	} else if(nota >= 70 && nota < 80) {
		return 'C';
	}else if(nota >= 60 && nota < 70) {
		return 'D';
	}else if(nota >= 50 && nota < 60) {
		return 'E';
	}else {
		return 'Cê burro mano?';
	};
};

console.log(minhaNota(50));
console.log(minhaNota(60));
console.log(minhaNota(70));
console.log(minhaNota(80));
console.log(minhaNota(90));

function temPar(p1, p2, p3) {
	if (p1%2 == 0 || p2%2 == 0 || p3%2 == 0) {
		return true;
	};

	return false;
};

console.log(temPar(3,8,9));

function temImar(p1, p2, p3) {
	if (p1%2 != 0 || p2%2 != 0 || p3%2 != 0) {
		return true;
	};

	return false;
};

console.log(temImar(3,8,9));

const produto = 35;
const custo = 15;
const taxa = 0.20;
const qte = 1000;

function checkValores(p1, p2) {
	if (p1 <= 0 || p2 <= 0) {
		return false;
	};

	return true;
};

function calculaLucro(qte, produto, custo, taxa) {
	if (checkValores(produto, custo)) {
		let custoTotal = custo + (custo * taxa);
		let lucro = qte * (produto - custoTotal);
		return lucro;
	} else {
		return 'O valor do produto ou o custo está incorreto!';
	};
};

console.log(calculaLucro(qte, produto, custo, taxa));

function calculaINSS(salario) {
		if (salario <= 1556.94) {
			return salario *  0.08;
		} else if(salario >= 1556.95 && salario <= 2594.92){
			return salario *  0.09;
		} else if(salario >= 2594.93 && salario <= 5189.82){
			return salario *  0.11;
		}else if(salario > 5189.82){
			return 570,88;
		};
};

function calculaIR(salario) {
	if (salario >= 1903.99 && salario <= 2826.65) {
		return (salario * 0.075) - 142.80;
	} else if(salario >= 2826.66 && salario <= 3751.05){
		return (salario * 0.15) - 354.8;
	}else if(salario >= 3751.06 && salario <= 4664.68){
		return (salario * 0.225) - 636.13;
	}else {
		return (salario * 0.275) - 869.36;
	};
};

function calculaSalarioLiquido(salario) {
	let INSS = calculaINSS(salario);
	let salarioDiscontadoINSS = salario - INSS;
	let valorIR = calculaIR(salarioDiscontadoINSS);
	let liquido = salarioDiscontadoINSS - valorIR; 
	return liquido;
};

console.log(calculaSalarioLiquido(3000));

let situacao = null;
let valor = 1;

switch (valor) {
	case 1:
		situacao = 'Aprovada'
		break;
		case 2:
		situacao = 'Lista'
		break;
		case 3:
		situacao = 'Repovada'
		break;
	default:
		situacao = 'Não se aplica';
		break;
};

console.log(situacao);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordem crescente numbers.sort((a, b) => a-b);
//Ordem decrescente numbers.sort((a, b) => b-a);

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if (i == 9) {
		newNumbers[i] = numbers[i]*2;
	} else {
		newNumbers[i] = numbers[i] * numbers[i+1]; 
	};	
};

console.log(newNumbers);