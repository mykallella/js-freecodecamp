// Retorna o índice mais próximo do valor (O mais baixo)
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); // Ordena array do menor para o maior
  // .sort(callbackFunction)

  // Compara os itens na matriz a partir do menor
  for (let i = 0; i < arr.length; i++) { // Percorre array
    if (arr[i] >= num) // Se arr[i] (elemento) >= 'num'
      return i; // Retorna o índice deste número
  }

  return arr.length; // Senão retorna tamanho do array
}

console.log(getIndexToIns([40, 60], 50))


// Retorna o índice mais próximo do valor (O mais baixo)
function getIndexToIns1(arr, num) {
  return arr.filter(val => num > val).length;
  // .filter() - Verifica se valores do array passam no teste
  // Declara 'val' => 'num' é maior que novo valor(val)? 
  // 
}

console.log(getIndexToIns1([40, 60], 50))


// Retorna o índice mais próximo do valor (O mais baixo)
function getIndexToIns2(arr, num) {
  return arr
    .concat(num) // Concatena valores do array com o 'num'
    .sort((a, b) => a - b) // Ordena array do menor para o maior
    .indexOf(num); // Verifica se 'num' está no array
}

console.log(getIndexToIns2([1, 3, 4], 2))


