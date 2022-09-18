let username1 = "JackOfAllTrades";
let userCheck1 = /^ [a-z] [a-z]+ \d*$ | ^[a-z] \d\d+ $/i;
let result1 = userCheck1.test(username1);

console.log(result1)

/*

1. ^      ==> início da entrada
2. [a-z]  ==> o primeiro caractere é uma letra
3. [a-z]+ ==> os seguintes caracteres são letras
4. \d*$   ==> entrada termina com 0 ou mais dígitos
5. |      ==> ou
6. ^[a-z] ==> o primeiro caractere é uma letra
7. \d\d+  ==> os seguintes caracteres são 2 ou mais dígitos
8. $      ==> fim da entrada
9. i          ==> ignora maiúsculas e minúsculas de entrada

*/

let username2 = "JackOfAllTrades";
const userCheck2 = /^ [a-z] ([0-9]{2,} | [a-z]+ \d*) $/i;
let result2 = userCheck2.test(username2);

console.log(result2)

/*

1. ^          ==> início da entrada
2. [a-z]      ==> o primeiro caractere é uma letra
3. [0-9]{2,0} ==> termina com dois ou mais números
4. |          ==> ou
5. [a-z]+     ==> tem uma ou mais letras ao lado
6. \d*        ==> e termina com zero ou mais números
7. $          ==> fim da entrada
8. i          ==> ignora maiúsculas e minúsculas de entrada

*/


/*

1. Os nomes de usuário só podem usar caracteres alfanuméricos.
2. Os únicos números no nome de usuário devem estar no final. 
Pode haver zero ou mais deles no final. O nome de usuário não pode começar com o número.
3. As letras do nome de usuário podem ser minúsculas e maiúsculas.
4. Os nomes de usuário devem ter pelo menos dois caracteres. 
Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.

*/

