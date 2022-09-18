// Função construtora
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Verifica se existe prototype no objeto 'beagle'
console.log(Dog.prototype.isPrototypeOf(beagle))

