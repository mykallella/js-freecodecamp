let usuarios = {
  Alan: {
    idade: 27,
    online: true
  },
  Mercedes: {
    idade: 32,
    online: true
  },
  Sarah: {
    idade: 48,
    online: true
  },
  Ryan: {
    idade: 19,
    online: true
  }
};


// Procura se os usuários estão no objeto - IF
function procuraUsuarios(objeto) {
  if (
    objeto.hasOwnProperty("Alan") &&
    objeto.hasOwnProperty("Mercedes") &&
    objeto.hasOwnProperty("Sarah") &&
    objeto.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

console.log(procuraUsuarios(usuarios));


// Procura se os usuários estão no objeto - TERNÁRIO (hasOwnProperty)
function procuraUsuarios1(objeto) {
  return objeto.hasOwnProperty("Alan") &&
    objeto.hasOwnProperty("Mercedes") &&
    objeto.hasOwnProperty("Sarah") &&
    objeto.hasOwnProperty("Ryan")
    ? true
    : false
}

console.log(procuraUsuarios1(usuarios))


// Procura se os usuários estão no objeto - TERNÁRIO (in)
function procuraUsuarios2(objeto) {
  return 'Alan' in objeto &&
    'Mercedes'in objeto &&
    'Sarah' in objeto &&
    'Ryan' in objeto
    ? true
    : false
}

console.log(procuraUsuarios2(usuarios))

let nomes = ["Alan", "Mercedes", "Sarah", "Ryan"]
console.log(nomes)

// Procura se os usuários estão no objeto - EVERY()
function procuraUsuarios3(objeto) {
  return [...nomes].every(nome =>
    objeto.hasOwnProperty(nome)
  );
}
// every() verifica se os valores do array passam no teste da função a seguir

console.log(procuraUsuarios3(usuarios))

