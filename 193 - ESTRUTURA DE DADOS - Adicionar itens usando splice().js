function htmlColorNames(arr) {
  
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond') 
  // (Remove 'DarkGoldenRod' e 'WhiteSmoke', Insere 'DarkSalmon', 'BlanchedAlmond')
  // Parâmetros: (Índice do Array, Número de elementos que serão excluídos, Insere elemento no lugar(quantos forem))
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

