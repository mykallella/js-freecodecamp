// Função construtora
function Dog(name) {
  this.name = name;
}

// Novo objeto de 'Dog'
let beagle = new Dog("Snoopy");

// Verifica se existe um prototype no objeto 'beagle'
console.log(Dog.prototype.isPrototypeOf(beagle))

// Verifica se existe prototype na Classe 'Dog'
console.log(Object.prototype.isPrototypeOf(Dog.prototype))

/*

CADEIA:
  -> Object.prototype (hasOwnPrototype) ==> Supertype
  --> Bird.prototype ==> Supertype
  ---> beagle ==> Subtype

  Obs: O método .hasOwnPrototype é definido em Object.prototype, 
  então qualquer objeto pode usar o .hasOwnPrototype

*/

