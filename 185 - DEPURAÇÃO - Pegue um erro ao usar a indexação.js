function contaAteCinco() {
  let numeros = "12345"; // 5 índices (0 a 4)
  let tamanhoNumeros = numeros.length; // Tamanho da variável 'numeros' = 5
  
  for (let i = 0; i < tamanhoNumeros; i++) { 
    // i deve começar com 0 (i = 0) e i deve ser MENOR que 'tamanhoNumeros' (i < tamanhoNumeros)
    // Explicação: 
    // 'numeros' tem 5 índices, mas começa no 0 e vai até 4, não 5, por isso i MENOR que 'tamanhoNumeros'
  
    console.log(numeros[i]);
  }
}

contaAteCinco();

/*

Atenção a quantidade de índices do valor ao percorrer os valorres com for

*/