// Verifica se todos os valores da segunda string existem na primeira string
function verificarTodasLetrasExistem(arr) {
  let segundaString = arr[1].toLowerCase(); // Segunda string em minúscula
  let primeiraString = arr[0].toLowerCase(); // Primeira string em minúscula

  for (let i = 0; i < segundaString.length; i++) { // Percorre segunda string
    if (primeiraString.indexOf(segundaString[i]) === -1) 
    // Se elemento da segunda string NÃO existir na primeira string
      return false;
  }
  return true;
}

console.log(verificarTodasLetrasExistem(["hello", "hey"]))


// Verifica se todos os valores da segunda string existem na primeira string
function verificarTodasLetrasExistem1(arr) {
  return arr[1] // Retorna segunda string
    .toLowerCase() // Transforma em minúscula
    .split("") // Transforma em array
    .every(function(letra) { // Compara letra por letra
      return arr[0].toLowerCase().indexOf(letra) !== -1; 
      // Retorna primeira string toda minúscula se letra existir no array
    });
}

console.log(verificarTodasLetrasExistem(["hello", "hey"]))


// O every() método executa uma função para cada elemento do array.



