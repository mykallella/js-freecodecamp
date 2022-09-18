const criaSolicitacaoServidor = new Promise((resolve, reject) => {
  
  let respostaDoServidor = false; // Determinei como false

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

// Promessa rejeitada
criaSolicitacaoServidor.catch(error => { // 'error' vem do 'reject'
  console.log(error);
});


