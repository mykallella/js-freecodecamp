let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Procura o 's' ou um grupo de 's'
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = difficultSpelling.match(myRegex);

console.log(result)


