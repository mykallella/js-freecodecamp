let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Procura qualquer caractere que NÃO SEJA número de 0-9
// g Extrai um padrão mais de uma vez
let result = movieName.match(noNumRegex).length;

console.log(result)

