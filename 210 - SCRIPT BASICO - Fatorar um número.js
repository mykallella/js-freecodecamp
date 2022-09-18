// Fatorial - FOR
function fatorial(num) {
  let produto = 1;
  for (let i = 2; i <= num; i++) {
    produto *= i;
  }
  return produto;
}

console.log(fatorial(5));


// Fatorial - RECURSÃO
function fatorial1(num) {
  if (num === 0) {
    return 1;
  }
  return num * fatorial(num - 1);
}

console.log(fatorial(5));

