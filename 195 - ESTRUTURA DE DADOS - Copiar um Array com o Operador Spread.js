// Copia array 2 vezes (array capturado por parâmetro)
function copiar(arr, num) {

  let novoArray = [];

  while (num >= 1) {    
    // Operador Spread (...) (Copia valores do array)
    novoArray.push([...arr]); 
    // adiciona ao FINAL do 'novoArray' a cópia do array 'arr'        
    num--;
  }

  return novoArray;
}

console.log(copiar([true, false, true], 2)); // Imprime retorno da função

