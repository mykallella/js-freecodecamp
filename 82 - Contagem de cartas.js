let count = 0;

function cc(card) {  
  
  if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
    count ++; // Se (2, 3, 4, 5, 6) incrementa 1 ao count 
  } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A'){
    count --; // Se (	10, 'J', 'Q', 'K', 'A') decrementa 1 ao count
  } else { 
    // senão faça nada (Se 7, 8, 9 ou qq outra letra)

  }

  if (count > 0){
    return count + " Bet"; 
  } else if (count == 0 || count < 0){
    return count + " Hold"; 
  }
    
}

// Imprime retorno da função
console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K'));
console.log(cc('A')); 

