function freezeObj() {
  const MATH_CONSTANTS = { // Objeto
    PI: 3.14
  };
  
  Object.freeze(MATH_CONSTANTS); // Impede alteração de valores do objeto (freeze => congela)
  
  try {
    MATH_CONSTANTS.PI = 99; // Tenta alterar valor do objeto
  } catch(erro) {
    console.log(erro);
  }

  return MATH_CONSTANTS.PI; // Retorna valor da propriedade PI
}

console.log(freezeObj());




