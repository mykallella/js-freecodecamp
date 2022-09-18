function convertToInteger(str, radix) {
  const convertidoInteiro = parseInt(str, 2); 
  // Converte string em inteiro, considerando a "base" numérica do que veio (base 2 = binário)
  return convertidoInteiro;
}

console.log("Número inteiro: " + convertToInteger("10011"));

