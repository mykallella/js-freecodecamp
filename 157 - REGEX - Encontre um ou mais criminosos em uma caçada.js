let text = "CCCCCCCCCCCCCCaeiou123456789";
let reCriminals = /C+/; // Procura 'C' ou grupo de 'C'
let result = text.match(reCriminals);

console.log(result)

 