function remove(arr) {

  let removidoInicio = arr.shift(); // remove do INÍCIO da matriz
  let removidoFinal = arr.pop(); // remove do FINAL da matriz
  
  return [removidoInicio, removidoFinal];
}

console.log(remove(['challenge', 'is', 'not', 'complete']));

