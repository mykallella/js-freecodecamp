// Copia array 1 no array 2 em determinada posição (n)
function frankenSplice(arr1, arr2, n) {

  let localArray = arr2.slice(); // Copia 'arr2' e 'localArray' recebe

  for (let i = 0; i < arr1.length; i++) { // Percorre 'arr1'
    localArray.splice(n, 0, arr1[i]); // (Inicia no índice 1, Remove 0 e Insere arr1[i]) (n recebido por parâmetro)    
    // Parâmetros: (Índice do Array, Número de elementos que serão excluídos, Insere elemento no lugar(quantos forem))
    n++; // incrementa 1 ao n (garante que será inserido em ordem nas devidas posições seguintes)
  }
  return localArray; // Retorna [4, 1, 2, 3]
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

//-----------------------------------------------------------------------------------

// Copia array 1 no array 2 em determinada posição (n)
function frankenSplice1(arr1, arr2, n) {
  
  let localArr = arr2.slice(); // Copia 'arr2' e 'localArray' recebe
  localArr.splice(n, 0, ...arr1); // (Inicia no índice 1, Remove 0 e Insere valores do arr1) (n recebido por parâmetro)   
  // Parâmetros: (Índice do Array, Número de elementos que serão excluídos, Insere elemento no lugar(quantos forem))
  return localArr;
}

console.log(frankenSplice1([1, 2, 3], [4, 5, 6], 1))

