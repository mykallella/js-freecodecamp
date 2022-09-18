// Divide array em grupos por tamanho
function divideArrayPorTamanho(arr, tamanho) {

  let pedacos = [];

  for (let i = 0; i < arr.length; i += tamanho) { // Percorre array por tamanho até tamanho do array
    pedacos.push(arr.slice(i, i + tamanho)); 
    // slice() - Divide array (início(i), fim(i + tamanho))
    // push() - Insere valor no array 'pedacos'
  }

  return pedacos;
}

console.log(divideArrayPorTamanho(["a", "b", "c", "d"], 2))


// Divide array em grupos por tamanho
function divideArrayPorTamanho1(arr, tamanho) {

  let pedacos = [];

  while (arr.length > 0) {
    pedacos.push(arr.splice(0, tamanho));
    // slice() - Divide array (início(0), fim(tamanho))
    // push() - Insere valor no array 'pedacos'
  }

  return pedacos;
}

console.log(divideArrayPorTamanho1(["a", "b", "c", "d"], 2))

