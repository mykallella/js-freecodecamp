function procurarElemento(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) { // Percorre array [1, 2, 3, 4]
    num = arr[i]; // Cada elemento do array é passado para 'num'
        
    if (func(num)) { // Chama a função (num => num % 2 === 0) passando 'num'; Se o retorno for 'true'
      return num 
      // Retorna o primeiro elemento do array que satisfaz a função fornecida 
      // Obs: Depois de qualquer 'return', sai da função
    }
  }

  return undefined;
}

console.log(`Retorno: ` + procurarElemento([1, 2, 3, 4], num => num % 2 === 0))


function procurarElemento1(arr, func) {
  return arr.find(func); 
  // find() retorna o primeiro elemento do array que satisfaz a função fornecida
  // Se nenhum elemento satisfizer, retorna 'undefined'
}

console.log(`Retorno: ` + procurarElemento1([1, 2, 3, 4], num => num % 2 === 0))



