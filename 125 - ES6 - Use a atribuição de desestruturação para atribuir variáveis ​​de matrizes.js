/* 
    DESESTRUTURAÇÃO DE ARRAY
*/

const [I, II] = [1, 2, 3, 4, 5, 6]
// I recebe 1, II recebe 2
console.log(`I, II: ${I}, ${II}`)

const [a, b,,, c] = [1, 2, 3, 4, 5, 6] 
// a recebe 1, b recebe 2, vírgula 3, vírgula 4, c recebe 5
console.log(`a, b, c: ${a}, ${b}, ${c}`)


console.log('\n') //=======================================


let A = 8, B = 6;

[A, B] = [B, A]
// A recebe B, B recebe A
console.log(`A, B: ${A}, ${B}`)


