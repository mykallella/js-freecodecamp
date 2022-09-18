function checkSign(num) {
  if (num > 0) {
    return "Número positivo";
  }
  else if (num < 0) {
    return "Número negativo";
  }
  else {
    return "Zero";
  }
}

console.log(checkSign(10));

// Substitui IF-ELSE IF: 

// Operador ternário (encadeamento)
function checkSign(num) {
  return (num > 0) ? "Número positivo" 
    : (num < 0) ? "Número negativo"
    : "Zero";
}

console.log(checkSign(10));


