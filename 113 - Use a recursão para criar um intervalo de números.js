// RECURSÃO
// RETORNA ARRAY ENTRE UM NÚMERO E OUTRO
function rangeOfNumbers1(startNum, endNum) {
  if (endNum - startNum === 0) {  
    // PARA  
    return [startNum];
  } else {
    // CONTINUA
    var numbers = rangeOfNumbers1(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers1(4, 8))


console.log('\n') // ====================================


// RECURSÃO - TERNÁRIO 
// RETORNA ARRAY ENTRE UM NÚMERO E OUTRO
function rangeOfNumbers2(startNum, endNum) {
  return startNum === endNum
    ? [startNum] // PARA
    : [...rangeOfNumbers2(startNum, endNum - 1), endNum ]; // CONTINUA
}

console.log(rangeOfNumbers2(4, 8))


