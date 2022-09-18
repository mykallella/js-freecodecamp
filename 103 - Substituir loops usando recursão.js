valores = [10, 5]

function somaValores(arr, tamanhoArray) {
  let soma = 0;
  for (let i = 0; i < tamanhoArray; i++) {
    soma += arr[i]; // Soma todos os valores do array
  }
  return soma;
}

console.log(somaValores(valores, valores.length))

//====================================================================

valores = [10, 5]

// Substituindo por recursividade:
function somaValores(arr, tamanhoArray) {  
  if (tamanhoArray <= 0) { 
    // Para    
    return 0;
  } else { 
    // Continua
    return somaValores(arr, tamanhoArray - 1) + arr[tamanhoArray - 1];
  }
}

//console.log(somaValores(valores, valores.length))


