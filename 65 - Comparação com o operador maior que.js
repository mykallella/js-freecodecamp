function testGreaterThan(val) {
  if (val > 100) {  // Verifica se maior que 100
    return "Over 100";
  }

  if (val > 10) {  // Verifica se maior que 10
    return "Over 10";
  }

  return "10 or Under"; // Senão (10 ou menor)
}

console.log(testGreaterThan(10)); // Imprime retorno da função

