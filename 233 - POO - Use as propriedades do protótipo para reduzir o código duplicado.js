// Função construtora
function Dog(name) {
  this.name = name;  
}

Dog.prototype.numLegs = 2
// Compartilha a propriedade 'numLegs' com TODOS os objetos de 'Dog'

let beagle = new Dog("Snoopy")
// Novo objeto de 'Dog'

console.log(beagle)
console.log(beagle.numLegs)

