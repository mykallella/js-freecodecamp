// Primeira letra da palavra em maiúscula
function titleCase(str) {
  return str
    .toLowerCase() // Tudo em minúsculo
    .split(" ") // Converte em array
    .map(texto => texto.replace(texto.charAt(0), texto.charAt(0).toUpperCase()))
    // Substitui o caractere minúsculo por maiúsculo
    // map() - Faz algo com todos os valores do array (recebe a string 'texto')
    // replace() - Procura valor e troca por novo valor (procura o primeiro caractere e troca este por maiúsculo)
    .join(" "); // Converte em string novamente
}

console.log(titleCase("I'm a little tea pot"))


// Primeira letra da palavra em maiúscula
function titleCase1(str) {
  return str
    .toLowerCase() // Tudo em maiúscula
    .replace(/(^|\s)\S/g, primeiroCaractere => primeiroCaractere.toUpperCase());
    // replace() - Procura valor e troca por novo valor
    // Regex - Procure o primeiro caractere de cada palavra
    // Transforma primeiro caractere em maiúsculo
}

console.log(titleCase1("I'm a little tea pot"))

