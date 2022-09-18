// Copia String
function repetirString(str, num) {
  let acumulador = "";

  for (let i = 0; i < num; i++) { // Copia 'num' vezes
    acumulador += str; // Acumula string no 'acumulador'
  }

  return acumulador;
}

console.log(repetirString("FunçãoComum ", 2))

// Copia String - RECURSÃO
function repetirString1(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repetirString1(str, num - 1);
  }
}

console.log(repetirString1('Recursão ', 3))


// Copia String - RECURSÃO - TERNÁRIO
function repetirString2(str, num) {
  return num > 0 ? str + repetirString2(str, num - 1) : '';
}

console.log(repetirString1("RecursãoTernário ", 4 ))

