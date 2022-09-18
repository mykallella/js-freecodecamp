// Classe
function Cat(name) {
  this.name = name;
}

// Compartilha somente o construtor da Classe Cat
// Não precisa repetir o 'comer' (Herdou de Animal)
Cat.prototype = {
  constructor: Cat,  
};

// Classe
function Bear(name) {
  this.name = name;
}

// Compartilha somente o construtor da Classe Bear
// Não precisa repetir o 'comer' (Herdou de Animal)
Bear.prototype = {
  constructor: Bear,  
};


// Supertype ou SuperClasse
function Animal() { } 

// Prototype - Compartilha as propriedades e funções do Supertype/SuperClasse Animal
Animal.prototype = {
  constructor: Animal,
  comer: function() {
    console.log("Função comer")
  }
};

// Conceito - Don't Repeat Yourself (DRY) 
// HERANÇA

