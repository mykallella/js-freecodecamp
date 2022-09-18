let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Procura qualquer número de 0-9
// g Extrai um padrão mais de uma vez
let result = movieName.match(numRegex).length;

console.log(result)

