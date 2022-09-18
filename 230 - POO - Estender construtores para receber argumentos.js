// Função Construtora
function Dog(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

let terrier = new Dog("Marley", "Marrom") // Cria objeto 'terrier' de Dog

console.log(terrier.name)
console.log(terrier.color)
console.log(terrier.numLegs)


