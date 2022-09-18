// Função de SETA com PARÂMETRO
const sum1 = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0); // .reduce() reduz array
}

console.log(sum1(10, 10, 10));


// Função de SETA com PARÂMETRO REST (...args)
const sum2 = (...args) => {  
  return args.reduce((a, b) => a + b, 0); // .reduce() reduz array
}

console.log(sum2(10, 10, 10));


console.log('\n') //=======================================


// Função com PARÂMETRO REST (...args)
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));


/*
  Usando parâmetro REST a função é capaz de receber qualquer número de argumentos
*/

