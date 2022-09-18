let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Procura os caracteres que NÃO são a,e,i,o,u e o intervalo 0-9 
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = quoteSample.match(myRegex); 

console.log(result)

