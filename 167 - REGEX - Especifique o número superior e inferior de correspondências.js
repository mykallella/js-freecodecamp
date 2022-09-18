let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Procura na string se há a letra 'h' entre 3 e 6 vezes
let result = ohRegex.test(ohStr);

console.log(result)

