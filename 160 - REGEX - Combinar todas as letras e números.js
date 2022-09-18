let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
// Procura tudo (todo o alfabeto, números e _ ) (equivale a /[A-Za-z0-9_]+/)
// g Extrai um padrão mais de uma vez
let result = quoteSample.match(alphabetRegexV2).length; // Tamanho do que obteve 

console.log(result)

