let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Procura o intervalo todo que está dentro do colchetes
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = quoteSample.match(alphabetRegex); 

console.log(result)

