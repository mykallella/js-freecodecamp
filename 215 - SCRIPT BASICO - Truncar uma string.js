function stringTruncada(str, num) {
  
  if (str.length > num) { // Se tamanho da string for maior que 'num':
    return str.slice(0, num) + "..."; 
    // Retorna um pedaço da string (começa no índice 0 e termina em 'num') + '...'
  } else {
    return str; // Retorna string inteira
  }
}

console.log(stringTruncada("Uma cesta verde e amarela", 9))


// TERNÁRIO
function stringTruncada1(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(stringTruncada("Uma cesta verde e amarela", 9))

