let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Procura na string se há a letra 'z' 4 ou mais vezes
let result = haRegex.test(haStr);

console.log(result)

