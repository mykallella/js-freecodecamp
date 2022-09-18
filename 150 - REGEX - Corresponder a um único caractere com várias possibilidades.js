let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Procura as vogais que estão dentro do colchetes
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = quoteSample.match(vowelRegex); 

console.log(result)

