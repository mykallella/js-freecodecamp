// Função Construtora
function House(numQuartos) {
  this.numQuartos = numQuartos;
}

let myHouse = new House(4) // Cria objeto 'myHouse' de House
console.log(myHouse instanceof House) // Retorna 'true' ou 'false'
// Verifica se 'myHouse' é uma instância de House


