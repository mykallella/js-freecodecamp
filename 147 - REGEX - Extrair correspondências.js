// Regex (Expressões Regulares)

let extractStr = "Extraindo a palavra 'coding' desta string.";
let codingRegex = /coding/; // Procura coding
let result = extractStr.match(codingRegex); 
// Da string extractStr é extraída a string entre parênteses
// Se achar retorna 'true', se não 'false'

console.log(result)

/*
    STRING.match(REGEX)
*/

