// Função de SETA COM PARÂMETRO PADRÃO
const increment = (number, value = 1) => number + value;
// Se não passado valor para o parâmetro (value), será inserido o valor 1 nele

console.log(increment(5)) // Chamando função e NÃO passando valor para (value)


console.log('\n') //=====================================


// Função de SETA COM PARÂMETRO PADRÃO
const greeting = (name = "Anonymous") => "Hello " + name;
// Se não passado valor para o parâmetro (name), será inserido o valor "Anonymous" nele

console.log(greeting("John")); // Chamando função e passando valor "John"
console.log(greeting()); // Chamando função e NÃO passando valor



