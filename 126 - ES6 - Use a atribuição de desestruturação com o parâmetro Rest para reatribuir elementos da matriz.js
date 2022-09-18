/* 
    DESESTRUTURAÇÃO DE ARRAY COM PARÂMETRO REST (...arr)
*/

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(arrayNumeros) {
  
  const [a, b, ...arr] = arrayNumeros; 
  // a e b recebem os dois primeiros elementos do array 
  // arr obtém o restante dos valores na forma de um array
  
  return arr;
}

const arr = removeFirstTwo(arrayNumeros); // Chama função e var arr recebe resultado

console.log(arr)

