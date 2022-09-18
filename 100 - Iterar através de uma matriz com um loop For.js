const myArr = [2, 3, 4, 5, 6];

let total = 0;

// Soma dos valores da matriz
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log("Tamanho da matriz: " + myArr.length) // 5
console.log("Valores da matriz: " + myArr) // [2, 3, 4, 5, 6]
console.log("Soma dos valores da matriz: " + total) // 20

/*

  i = 0 (Incialização)
  i < myArr.length (i < 5) (Condição)
  i++ (Incremento)

*/


