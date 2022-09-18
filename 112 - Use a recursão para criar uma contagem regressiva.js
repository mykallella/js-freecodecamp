// RECURSÃO - SEMPRE FAZ AO CONTRÁRIO DA ORDEM QUE SE QUER
// Parâmetro 5 => Fará de BAIXO pra CIMA [1, 2, 3, 4, 5]
function countdown1(n) {
  if (n < 1) {
      return [];
  } else {
      const countArray = countdown1(n - 1);
      countArray.push(n);
      return countArray;
  }
}
console.log(countdown1(5));


console.log('\n') // ====================================

// RECURSÃO - (ORDEM CORRETA)
// Parâmetro 5 => Fará de CIMA pra BAIXO [5, 4, 3, 2, 1]
function countdown2(n) {
  if (n < 1) {
      // PARA          
      return [];
  } else {
      // CONTINUA
      const countArray = countdown2(n - 1);
      countArray.unshift(n);
      return countArray;
  }
}
console.log(countdown2(5));


console.log('\n') // ====================================


// RECURSÃO - TERNÁRIO (ORDEM CORRETA)
// Parâmetro 5 => Fará de CIMA pra BAIXO [5, 4, 3, 2, 1]
function countdown3(n) {
  return n < 1 ? [] : [n, ...countdown3(n - 1)];
  // n < 1 ? Se sim PARA, retorna array vazio, senão CONTINUA recursão
}

console.log(countdown3(5));

