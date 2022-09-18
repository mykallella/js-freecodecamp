// Sintaxe Comum
var Vegetal1 = function(nome) {  
    this.nome = nome; // Insere na propriedade {nome} o valor do parâmetro (nome)
}
const cenoura = new Vegetal1('Cenoura'); // Cria objeto 'cenoura' enviando nome 'Cenoura'
console.log(cenoura.nome); // Imprime nome do objeto 


// Sintaxe de CLASSE
class Vegetal2 {
  constructor(nome) { // Método construtor
    this.nome = nome; // Insere na propriedade {nome} o valor do parâmetro (nome)
  }
}
const batata = new Vegetal2('Batata'); // Cria objeto 'batata' enviando nome 'Batata'
console.log(batata.nome); // Imprime nome do objeto 

/*
    QUANDO CLASSE:
    INTANCIAR A CLASSE (CRIAR OBJETO DELA)
*/

