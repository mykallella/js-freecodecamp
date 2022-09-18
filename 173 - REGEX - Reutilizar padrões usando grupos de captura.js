// Grupos de Captura - localiza substrings repetidas

let numeroRepetido = "42 42 42";
let regex1 = /^(\d+)\s\1\s\1$/; 
// Pesquisa uma palavra que ocorre três vezes separada por espaços
let resultado1 = regex1.test(numeroRepetido);
console.log(resultado1)


let stringRepetida = "row row row your boat"
let regex2 = /(\w+) \1 \1/; 
// Pesquisa uma palavra que ocorre três vezes separada por espaços
// Explicação: \1 (barra invertida e o número do grupo de captura)
regex2.test(stringRepetida); // Retorna true
let resultado2 = stringRepetida.match(regex2); // Retorna ["row row row", "row"]
console.log(resultado2)


 
