let hello = "   Hello, World!  ";
let regex = /^\s+|\s+$/g; // Pesquisa espaço em branco
let resultado = hello.replace(regex, ""); 
// Substitui regex por 'sem espaço'
console.log(resultado)


