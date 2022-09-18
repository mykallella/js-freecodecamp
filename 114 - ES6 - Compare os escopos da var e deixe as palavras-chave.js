function checkScope() {
  let i = 'variável i LOCAL DA FUNÇÃO'; // i LOCAL (DA FUNÇÃO)
  if (true) {
    let i = 'variável i LOCAL DO IF'; // i LOCAL (DO IF)
    console.log('Escopo do bloco IF: ', i);
  }
  console.log('Escopo da FUNÇÃO: ', i);  
  return i;
}
// AS VARIÁVEIS i ACIMA SÃO DIFERENTES ENTRE SI (POIS COM LET ESTÃO EM ESCOPOS DIFERENTES)

checkScope()


/*

VAR
-> GLOBAL
-> LOCAL (DENTRO DE FUNÇÃO)
PROBLEMA: var i usada, por exemplo, dentro de FOR (instrução) com VAR será considerada GLOBAL 
e se já usada em outro FOR já terá valores dentro de si.

LET
-> GLOBAL
-> LOCAL (DENTRO DE FUNÇÃO, BLOCO, INSTRUÇÃO OU EXPRESSÃO (FOR, IF, WHILE, SWITCH, ...))

*/


