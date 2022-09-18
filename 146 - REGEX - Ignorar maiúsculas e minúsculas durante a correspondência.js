// Regex (Expressões Regulares)

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Procura freeCodeCamp (i ignora MAÚSCULA OU minúscula)
let result = fccRegex.test(myString);
// A string de fccRegex é procurada na string entre parênteses
// Se achar retorna 'true', se não 'false'

console.log(result)

/*
    REGEX.test(STRING)
*/


