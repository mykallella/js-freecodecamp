// Pesquisar e Substituir texto em uma string usando .replace()

let string1 = "one two three";
let regex1 = /(\w+)\s(\w+)\s(\w+)/; // Pesquisa
let replace1 = "$3 $2 $1"; // Substitui por Grupos de Captura ($)
let resultado1 = string1.replace(regex1, replace1);  
// Parâmetros: regex1 será substituída por replace1
console.log(resultado1)


let string2 = "The sky is silver";
let regex2 = /silver/;
let resultado2 = string2.replace(regex2, "blue"); 
// Parâmetros: regex2 'silver' será substituída por 'blue'
console.log(resultado2)


let resultado3 = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(resultado3)

