let usuarios = {
  Alan: {
    idade: 27,
    online: false
  },
  Mercedes: {
    idade: 32,
    online: true
  },
  Sarah: {
    idade: 48,
    online: false
  },
  Ryan: {
    idade: 19,
    online: true
  }
};

function capturarPropriedades(objeto) {  
  return Object.keys(objeto) // Captura as propriedades principais do Objeto
}

console.log(capturarPropriedades(usuarios));

