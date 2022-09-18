// Função construtora
function Dog(name) {
  this.name = name;
}

// Verifica se objeto é do construtor 'Dog'
function objectIsDog(candidate) {
  if (candidate.constructor === Dog) {
    return true
  } else {
    return false
  }
}

let myDogMarley = new Dog('marley') // Objeto

console.log(objectIsDog(myDogMarley))


