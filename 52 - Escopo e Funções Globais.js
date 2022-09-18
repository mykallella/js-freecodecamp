let myGlobal = 10; // Variável GLOBAL (Declarada FORA DE UM BLOCO será GLOBAL)

function fun1() {  
oopsGlobal = 5; // Variável GLOBAL (Declarada SEM PALAVRA-CHAVE será GLOBAL)
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") { // Verifica o tipo da variável (Se diferente de "undefined")
    output += "myGlobal: " + myGlobal + "\n";
  }
  if (typeof oopsGlobal != "undefined") { // Verifica o tipo da variável (Se diferente de "undefined")
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output); // Imprime variável "output"
}

fun1() // Chama a função fun1
fun2() // Chama a função fun2

/*

::: ESCOPO :::
--------------

VARIÁVEL GLOBAL:
---------------- 
Declarada FORA DE UM BLOCO => GLOBAL 
Declarada SEM PALAVRA-CHAVE => GLOBAL
(PODE SER VISTA EM TODO LUGAR DO CÓDIGO) (POSSÍVEL PROBLEMA)

VARIÁVEL LET OU CONST:
---------------------
Sempre declarar variáveis com LET ou CONST (GLOBAL OU NÃO)

*/

