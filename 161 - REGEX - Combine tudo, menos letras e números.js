let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
// Procura tudo que NÃO for alfabeto, números e _ (equivale a /[^A-Za-z0-9_]/)
// g Extrai um padrão mais de uma vez
let result = quoteSample.match(nonAlphabetRegex).length; // Tamanho do que obteve 

console.log(result)

