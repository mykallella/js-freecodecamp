function testStrictNotEqual(val) {
  if (val !== 17) { // Verifica se estritamente diferente (verifica tipo)
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

