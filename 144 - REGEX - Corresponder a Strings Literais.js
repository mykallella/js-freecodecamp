// Regex (Expressões Regulares)

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Procura Waldo
let result = waldoRegex.test(waldoIsHiding);
// A string de waldoRegex é procurada na string entre parênteses
// Se achar retorna 'true', se não 'false'

console.log(result)

/*
    REGEX.test(STRING)
*/

