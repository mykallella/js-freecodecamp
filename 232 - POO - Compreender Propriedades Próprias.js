// Função Construtora
function Bird(name) {
  this.name = name; // Propriedade Própria
  this.numLegs = 2; // Propriedade Própria
}

let canary = new Bird("Tweety"); // Cria objeto 'canary' de Bird
let ownProps = []; // Array

// Verifica cada propriedade existente em 'canary' e adiciona no array ownProps
for (let propriedade in canary) { // Percorre cada propriedade em 'canary'
  if(canary.hasOwnProperty(propriedade)) { // Se em 'canary' a propriedade existir
    ownProps.push(propriedade) // No array 'ownProps' é adicionada a propriedade
  }
}

console.log(ownProps)


