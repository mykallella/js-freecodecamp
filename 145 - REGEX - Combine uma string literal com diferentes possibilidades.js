// Regex (Expressões Regulares)

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Procura dog OU cat OU bird OU fish
let result = petRegex.test(petString);
// A string de petRegex é procurada na string entre parênteses
// Se achar retorna 'true', se não 'false'

console.log(result)

/*
    REGEX.test(STRING)
*/


