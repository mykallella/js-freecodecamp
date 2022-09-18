const s = [5, 7, 2];

function editInPlace() {
  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  return s;
}

console.log(editInPlace());

/*

CONST:
const não permite a alteração dos valores das variáveis,
MAS se for array ou objeto sim, pode-se alterar.

Obs: mas assim como o let não se pode usar o mesmo nome para declarar outra variável, array ou objeto

*/


