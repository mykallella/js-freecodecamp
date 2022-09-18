/*
    ATRIBUIÇÃO DE DESESTRUTURAÇÃO
*/

// OBJETO
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES; // Substitui as duas linhas acima
// Cria as variáveis e traz os valores das PROPRIEDADES "today" e "tomorrow" do OBJETO HIGH_TEMPERATURES

console.log(today)
console.log(tomorrow)


console.log('\n') //==================================


// OBJETO
const user = { 
  name: 'John Doe', 
  age: 34 
}; 

// const name = user.name;
// const age = user.age;

const { name, age } = user; // Substitui as duas linhas acima
// Cria as variáveis e traz os valores da PROPRIEDADE "name" e "age" do OBJETO user

console.log(name)
console.log(age)

