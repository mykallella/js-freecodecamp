let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Procura os intervalos h-s e 2-6 
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = quoteSample.match(myRegex); 

console.log(result)

