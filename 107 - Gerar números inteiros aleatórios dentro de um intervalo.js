function randomRange(myMin, myMax) {
  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Gera randômico arredondado entre um número mínimo e máximo

  // Math.random() => Gera fração aleatória entre 0 e 1 
  // Math.floor() => Arredonda para número inteiro
}

console.log(randomRange(5, 15));

/*

myMin = 5
myMax = 15

EXPLICAÇÃO:
Math.random() = 0.8244326990411024 (A)
(myMax - myMin + 1) = 15 - 5 + 1 -> 11 (B)
(A) * (B) = 9.068759689452126 (C) 
(C) + myMin = 14.06875968945213
Math.floor(14.06875968945213) = 14

COM ESSES INTERVALOS, (C) SERÁ SEMPRE MENOR QUE 11
EXPLICAÇÃO: Se 1 * 11 = 11, então (Qualquer número menor que 1) * 11, resulta em um número menor que 11
E NUNCA SERÁ MENOR QUE O MÍNIMO, POIS (C) + myMin SERÁ SEMPRE MAIOR QUE O MÍNIMO

*/

