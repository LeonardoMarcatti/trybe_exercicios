const nota = (Math.random()*100).toFixed(0);

if (nota >= 80) {
  console.log(nota, 'Aprovado!');
} else if(nota < 80 && nota >= 60){
  console.log(nota, 'Peraí');
} else{
  console.log(nota, 'Cê burro cara?');
};