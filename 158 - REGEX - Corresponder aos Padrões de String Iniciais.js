let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
// Procura 'Cal' no início da string (se não estiver no início, retorna false)
let result = calRegex.test(rickyAndCal);

console.log(result)


