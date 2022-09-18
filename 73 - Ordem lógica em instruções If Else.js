function orderMyLogic1(val) {
  if (val < 5) { // Se menor que 5
    return "Less than 5";
  } else if (val < 10) { // Se menor que 10
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

function orderMyLogic2(val) {
  if (val < 10) { // Se menor que 10
    return "Less than 10";
  } else if (val < 5) { // Se menor que 5
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic1(4)); // Imprime retorno da função 1
console.log(orderMyLogic2(4)); // Imprime retorno da função 2

/*
  A ordem dos IFs e suas verificações FAZ DIFERENÇA.
*/

