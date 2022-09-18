// Função
const criarPessoa1 = (nome, idade, genero) => { // Parâmetros
    return {
      nome: nome, // Valor do parâmetro (nome) vai para propriedade {nome}
      idade: idade,
      genero: genero
    };  
  };
console.log(criarPessoa1('Myrela', 31, 'feminino'))


// Função ABREVIADA:
const criarPessoa2 = (nome, idade, genero) => ({nome, idade, genero})
// Os valores dos PARÂMETROS (nome, idade, genero) vão para PROPRIEDADES de mesmo nome ({nome, idade, genero})
console.log(criarPessoa2('Myrela', 31, 'feminino'))

