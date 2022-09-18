// LOOKAHEADS - Verifica dois ou mais padrões em uma string

// // Verificador de senhas 
let senha1 = "astronaut"
let checaSenha1 =  /(?=\w{6})(?=\w*\d{2})/
// Procura senha com mais de 5 caracteres e com dois dígitos consecutivos
console.log(checaSenha1.test(senha1))


// Verificador de senhas
let senha2 = "abc123"
let checaSenha2 = /(?=\w{3,6})(?=\D*\d)/ 
// Procura senha entre 3 e 6 caracteres e pelo menos um número
console.log(checaSenha2.test(senha2))


/* 

Lookahead Positivo:
Verificará se o padrão ESTÁ na string.
Sintaxe:
(?=...) (... é o padrão que QUER que esteja na string)


Lookahead Negativo:
Verificará se o padrão NÃO ESTÁ na string.
Sintaxe: 
(?!...) (... é o padrão que NÃO QUER que esteja na string)

*/


