let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda: ${info.personagem}`);

info['recorrente'] = 'sim';

console.log(`Bem-vinda: ${info.recorrente}`);

for (const key in info) {
  console.log(key);
};

for (const key in info) {
  console.log(info[key]);
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

for (const key in info, info2) {
  if (info['recorrente'] == info2['recorrente']) {
    console.log('Ambos recorrentes');
  };
  console.log(info[key] + ' e ' + info2[key]);
};

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'.`);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

function getLivrosFavoritos(leitor) {
  let livros = '';
  for (let index = 0; index < leitor.livrosFavoritos.length; index++) {
    if (index == leitor.livrosFavoritos.length - 1) {
      livros += leitor.livrosFavoritos[index].titulo;
    } else {
      livros += leitor.livrosFavoritos[index].titulo + ' e ';
    };
  };

  return livros;
};

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos e eles são: ` + getLivrosFavoritos(leitor));