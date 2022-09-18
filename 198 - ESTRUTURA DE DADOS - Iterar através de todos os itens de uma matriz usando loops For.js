// Verifica se existe elemento no array, senão existir retorna -1
function filteredArray(arr, elem) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) { // Percorre array
    if (arr[i].indexOf(elem) == -1) { // Se NÃO existe o elemento no índice tal (no subArray), então:
      newArr.push(arr[i]) // Adiciona no 'newArr' o índice tal (o subArray)
    }
  }
  
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // Parâmetros: (arr, elem(3))
// Obs: Não adicionou nenhum subArray, porque o 3 EXISTE em todos os subArrays

