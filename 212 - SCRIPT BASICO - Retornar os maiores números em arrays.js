function maiorDeQuatro(arr) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) { // Percorre array externo
    let maiorNumero = arr[i][0]; // 'maiorNumero' recebe primeiro numero

    for (let j = 1; j < arr[i].length; j++) { // Percorre array interno (sub-arrays)
      if (arr[i][j] > maiorNumero) { // Se elemento do sub-array é maior que o 'maiorNumero'
        maiorNumero = arr[i][j]; // Elemento vai para 'maiorNumero'
      }
    } // Fim do array interno

    resultado[i] = maiorNumero; // Salva o 'maiorNumero' no array resultado
  }

  return resultado;
}

console.log(maiorDeQuatro([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

//------------------------------------------------------------------------

function maiorDeQuatro1(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log(maiorDeQuatro1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// map() => Pega os valores do array e faz algo (Retorna um array)
// (Function.apply.bind()) => Pega os números dos sub-arrays
// (Math.max, null) => Pega o número máximo de cada sub-array


