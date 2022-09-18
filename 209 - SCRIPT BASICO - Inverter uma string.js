// Reverte String
function reverteString(str) {
 let stringRevertida = "";
  for (let i = str.length - 1; i >= 0; i--) { // Percorre string do final para o começo
    stringRevertida += str[i]; // Soma na var 'stringRevertida' cada índice da string
  }
  return stringRevertida;
}

console.log(reverteString("hello"))


// Reverte String
function reverteString1(str) {
  return str
    .split("") // Divide string por caracteres e transforma em array
    .reverse() // Reverte caracteres do array
    .join(""); // Junta os caracteres novamente em uma string
}

console.log(reverteString1("Marley"))

