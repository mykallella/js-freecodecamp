function capturarFinal(str, alvo) {
  console.log(str.length) // 33
  console.log(alvo.length) // 5
  console.log(str.length - alvo.length) // 28
  console.log(str.slice(28)) // 'frase'
  console.log('\n')

  return str.slice(str.length - alvo.length) === alvo; 
  // str.slice(33 - 5) 
  // str.slice(28) / Retorna 'frase'  
  // 'frase' === ao alvo? / Retorna true
}

console.log(capturarFinal("Captura a última palavra da frase", "frase"))

// slice() - Copia valores do array, por índice.

//--------------------------------------------------------------------------

function capturarFinal1(str, alvo) {

  let resultadoRegex = new RegExp(alvo + "$", "i"); // Pega a última letra($) ignorando o alvo(i)
  // Objeto Regex: new RegExp(padrão + [regras específicas])

  return resultadoRegex.test(str); // Verifica se a última letra está na string
}

console.log(capturarFinal1("Bastian", "n"));

//--------------------------------------------------------------------------

function capturarFinal2(str, alvo) {
  return str.endsWith('frase') 
  // String termina com 'frase'?  
}

console.log(capturarFinal2(("Captura a última palavra da frase", "frase")))

