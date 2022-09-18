const outerWear = 'Variável GLOBAL outerWear'; // Variável GLOBAL outerWear

function myOutfit() {  
  const outerWear = 'Variável LOCAL outerWear' // Variável LOCAL outerWear 
  return outerWear; // Retorno
}

console.log(myOutfit()); // Imprime retorno da função

console.log(outerWear) // Imprime valor da variável GLOBAL outerWear

