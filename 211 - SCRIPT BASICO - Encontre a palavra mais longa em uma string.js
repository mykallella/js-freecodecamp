function encontrarPalavraMaisLonga(str) {
  let palavras = str.split(' '); // Divide string em array de palavras
  let palavraMaisLonga = 0;

  for (let i = 0; i < palavras.length; i++) { // Percorre array 'palavras'
    if (palavras[i].length > palavraMaisLonga) { // Se palavra tal for maior que 'palavraMaisLonga'
      palavraMaisLonga = palavras[i].length; // 'palavraMaisLonga' recebe tamanho da palavra tal
    }
  }

  return palavraMaisLonga;
}

console.log(encontrarPalavraMaisLonga("Marley e Dolly são meus amores do reino animal"))

//------------------------------------------------------------------------------------

function encontrarPalavraMaisLonga1(str) {
  return Math.max(...str.split(" ").map(palavra => palavra.length));
}

console.log(encontrarPalavraMaisLonga1("Marley e Dolly são meus amores do reino animal"))

// .split(" ") => Divide string por espaços e transforma em array 
// Retorna [Marley, e, Dolly, são, meus, amores, do, reino, animal]

// .map(palavra => palavra.length) => Pega cada valor do array e faz algo (Verifica tamanho de cada valor) 
// Retorna [3, 5, 5, 3, 6, 4, 3, 4, 3]

// Math.max(...) => Retorna valor máximo do array (Obs: ... Pega valores do array)
// Retorna 6

