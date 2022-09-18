function isLess1(a, b) {
  if (a < b) { // Se a menor que b
    return true; 
  } else {
    return false;
  }
}

// Pode-se substituir a função acima pela função abaixo:

function isLess2(a, b) {
  return a < b; // Retorna resultado da comparação
}

console.log(isLess1(10, 15));
console.log(isLess2(10, 15));

