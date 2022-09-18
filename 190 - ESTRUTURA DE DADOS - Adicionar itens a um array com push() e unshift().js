function adicionaNumeros(arr) {
  
  arr.unshift(1, 2, 3) // adiciona ao INÍCIO da matriz
  arr.push(7, 8, 9) // adiciona ao FINAL da matriz
    
  return arr;
}

console.log(adicionaNumeros(['Quatro', 'Cinco', 'Seis']));

