/* 
    OPERADOR SPREAD [...valoresArray]
    Copia os valores do array    
*/

const arrayMeses = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2;

array2 = [...arrayMeses];  // copia o arrayMeses 

console.log(array2);


console.log('\n') //============================================


var valores1 = [6, 89, 3, 45];
var maximus1 = Math.max.apply(null, valores1); // Math.max.apply retorna o valor máximo
// Math.max(valores1) retornaria NaN. 
// Math.max() espera parâmetros separados por vírgula, mas não um array, por isso o uso do apply

console.log(maximus1)


const valores2 = [6, 89, 3, 45];
const maximus2 = Math.max(...valores2); // copia os valores do array valores2
// Math.max retorna o valor máximo
// Math.max() espera parâmetros separados por vírgula, mas não um array


console.log(maximus2)

