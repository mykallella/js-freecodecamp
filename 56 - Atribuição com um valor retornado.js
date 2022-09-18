let processed = 0; // Declaração da variável GLOBAL "processed"

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); // Chama a função e variável "processed" recebe RETURN

console.log(processed) // Imprime valor da variável "processed"


