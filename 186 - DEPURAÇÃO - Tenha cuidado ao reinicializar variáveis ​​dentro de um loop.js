function arrayZeros(quantidadeLinhas, quantidadeColunas) {

  let novoArray = [];
  
  for (let i = 0; i < quantidadeLinhas; i++) { // LINHAS
    
    let linha = []; // Declarado dentro do loop. 
    // Assim, uma nova linha será iniciada a cada loop, formando a matriz corretamente.

    for (let j = 0; j < quantidadeColunas; j++) { // COLUNAS      
      linha.push(0); // Coloca n zeros na linha atual para criar as colunas
    }
    
    novoArray.push(linha); // Envia a linha atual, que agora tem n zeros, para a matriz
  }

  return novoArray;
}

let matrix = arrayZeros(3, 2);
console.log(matrix);


