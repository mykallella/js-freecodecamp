function abTest(a, b) {  
  if (a < 0 || b < 0) {
   return undefined;
   console.log("Fim da função") // Nunca será exibido
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); // Senão - Cáculos
}

console.log(abTest(2,2));

/*
A string "Fim da função" nunca será exibida no console, porque a função sai no RETURN
*/

