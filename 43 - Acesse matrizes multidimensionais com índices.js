/*

const myArray1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray1[2][1];
console.log(myData)

*/

//============================================================== 

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

console.log(myArray[3]) 
// Do array myArray, índice 3 (linha 4)
console.log(myArray[3][0]) 
// Do array myArray, índice 3 (linha 4), desta linha índice 0 (primeiro conjunto)
console.log(myArray[3][0][1]) 
// Do array myArray, índice 3 (linha 4), desta linha índice 0 (primeiro conjunto), deste conjunto índice 1

/*
Resultado:

myArray[3] => [[10, 11, 12], 13, 14]
myArray[3][0] => [10, 11, 12] 
myArray[3][0][1] => 11
*/

