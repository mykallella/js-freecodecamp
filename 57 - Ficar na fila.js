function nextInLine(arr, item) {
  arr.push(item); // Adiciona item na última posição do array
  item = arr.shift(); // Remove primeiro item do array e var item recebe
  return item; // Retorno
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log("Item Removido: " + nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
  Observação:
  Variável quando é PARÂMETRO não precisa ser declarada.
  Variável "item" foi utilizada para DUAS COISAS na mesma função.
  (Adicionar valor no array e receber item removido)
*/

