// Função construtora
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
// Compartilha a propriedade 'numLegs' com TODOS os objetos de 'Dog'

let beagle = new Dog("Snoopy");
// Novo objeto de 'Dog'

let ownProps = [];
let prototypeProps = [];


for (let propriedade in beagle) { // Para cada 'propriedade' do objeto 'beagle'

  if (beagle.hasOwnProperty(propriedade)) { // Se em 'beagle' existir a 'propriedade' 
    ownProps.push(propriedade) // No array 'ownProps' adiciona a 'propriedade'
  } else {
    prototypeProps.push(propriedade) // No array 'prototypeProps' adiciona a 'propriedade'
  }

}

console.log(ownProps)
console.log(prototypeProps)


