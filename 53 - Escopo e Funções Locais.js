// Função myLocalScope
function myLocalScope() {  
  const myVar = 'VARIÁVEL LOCAL myVar' // Declaração da variável myVar
  console.log('Dentro da função myLocalScope', myVar);
}
// Fim da função

myLocalScope(); // Chama a função

console.log('outside myLocalScope', myVar); // ERRO 
// Variável myVar é LOCAL (NÃO ESTÁ DEFINIDO fora da função)

