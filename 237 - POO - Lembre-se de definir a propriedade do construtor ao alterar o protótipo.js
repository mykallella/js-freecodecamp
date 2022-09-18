// Função construtora
function Dog(name) {
  this.name = name;
}

// Prototype de 'Dog'
// Compartilha propriedades e métodos com TODOS os objetos de 'Dog'
Dog.prototype = {
  constructor: Dog,
  pernas: 4,
  comida: function () {
    console.log("Comer");
  },
  descrição: function () {
    console.log("Meu nome é " + this.name);
  }
};

marley = new Dog("Marley")

console.log(marley)
console.log(`Propriedade prototype: ${marley.pernas} \n`)
console.log(`Função prototype: ${marley.comida()} \n`)
console.log(`Função prototype: ${marley.descrição()}`)

