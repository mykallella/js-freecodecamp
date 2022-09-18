let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
// Procura qualquer caractere(.) até o fim (*) que termine já no primeiro '>' (?) (não estende para o último '>' )
let result = text.match(myRegex);

console.log(result)

let text1 = "titanic";
let myRegex1 = /t[a-z]*i/; // Procura intervalo a-z, tudo(*), que começa com t, termina com i
let result1 = text1.match(myRegex1);

console.log(result1)

let text2 = "titanic";
let myRegex2 = /t[a-z]*?i/; // Procura intervalo a-z, tudo(*), que começa com t, termina com i. 
// (?) Termina já no primeiro 'i' (não estende para o último 'i' )
let result2 = text2.match(myRegex2);

console.log(result2)


