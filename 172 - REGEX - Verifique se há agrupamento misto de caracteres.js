// Pesquisa um OU mais agrupamentos de caracteres 

let myString1 = "Eleanor Roosevelt";
let myRegex1 = /(Franklin|Eleanor).*Roosevelt/; 
// Pesquisa Franklin Roosevelt ou Eleanor Roosevelt
console.log(myRegex1.test(myString1))


let myString2 = "Pumpkin";
let myRegex2 = /P(engu|umpk)in/; 
// Pesquisa Penguin ou Pumpkin
console.log(myRegex2.test(myString2))

