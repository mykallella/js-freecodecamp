const criaSolicitacaoServidor = new Promise((resolve, reject) => {
  
  let respostaDoServidor = true; // Determinei como true

  if(respostaDoServidor) {
    resolve("Conseguimos os dados."); // Chama o método 'resolve'
  } else {	
    reject("Dados não recebidos."); // Chama o método 'reject'
  }
});

// Promessa cumprida
criaSolicitacaoServidor.then(result => { // 'result' vem do 'resolve'
  console.log(result);
});

