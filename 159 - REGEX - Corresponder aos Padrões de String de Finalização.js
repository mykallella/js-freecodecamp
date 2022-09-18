let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
// Procura 'caboose' no final da string (se não estiver no final, retorna false)
let result = lastRegex.test(caboose);

console.log(result)

