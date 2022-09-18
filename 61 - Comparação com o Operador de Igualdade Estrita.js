function testStrict(val) {
  if (val === 7) { // Verifica se exatamente igual a 7 (verifica tipo)
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

