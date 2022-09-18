const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
removidoNumeros = arrayNumeros.splice(0, 2); // (Remove 1, 2)
// Parâmetros: (Índice do Array, Número de elementos que serão excluídos)
console.log(`Removidos: ${removidoNumeros}`);
console.log(`Array Números: ${arrayNumeros} \n`)

let arrayString = ['I', ' am', ' feeling', ' really', ' happy'];
let removidoString = arrayString.splice(3, 2); // (Remove 'really', 'happy')
// Parâmetros: (Índice do Array, Número de elementos que serão excluídos)
console.log(`Removidos: ${removidoString}`);
console.log(`Array String: ${arrayString}`)
