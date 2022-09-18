const criaSolicitacaoServidor = new Promise((resolve, reject) => {
  
  let respostaDoServidor = true; // Determinei como true

  if(respostaDoServidor) {
    resolve("Conseguimos os dados."); // Chama o método 'resolve'
  } else {	
    reject("Dados não recebidos."); // Chama o método 'reject'
  }
});


// As promessas são mais úteis quando se tem um processo que leva um tempo desconhecido em seu código

/*
    PROMISE:
    Uma promessa para fazer algo. 
    Quando a tarefa for concluída, cumprirá a promessa ou deixará de fazê-la. 
*/

