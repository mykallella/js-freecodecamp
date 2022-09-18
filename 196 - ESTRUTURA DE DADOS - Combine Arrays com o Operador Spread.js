function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; 
  // Operador Spread (...) (Copia valores do array)
  return sentence;
}

console.log(spreadOut());


