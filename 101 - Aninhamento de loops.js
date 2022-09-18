function multiplyAll(arr) {
  let product = 1;
  
  for (let i = 0; i < arr.length; i++) { // LINHAS
    for (let j = 0; j < arr[i].length; j++) { // COLUNAS
    console.log(arr[i][j]); // Imprime valores
    product *= arr[i][j]; // Multiplicação dos valores
  }
} 

  return product;
}

resultado = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // ARRAY MULTIDIMENSIONAL
console.log(resultado)


