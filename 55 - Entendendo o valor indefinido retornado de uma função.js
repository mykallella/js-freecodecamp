let sum = 0; // Declaração variável GLOBAL sum

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

console.log(addThree()); // Imprime retorno da função addThree
console.log(addFive()); // Imprime retorno da função addFive

console.log(sum) // Imprime valor da variável GLOBAL sum

/*
Uma função pode incluir o RETURN, mas não necessariamente. 
Caso a função não tenha o RETURN, ela processa o código interno, 
mas o valor retornado é UNDEFINED.
*/

