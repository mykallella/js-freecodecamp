const contatos = [
  {
    primeiroNome: "Akira",
    ultimoNome: "Laine",
    numero: "0543236543",
    gostos: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    primeiroNome: "Harry",
    ultimoNome: "Potter",
    numero: "0994372684",
    gostos: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    primeiroNome: "Sherlock",
    ultimoNome: "Holmes",
    numero: "0487345643",
    gostos: ["Intriguing Cases", "Violin"],
  },
  {
    primeiroNome: "Kristian",
    ultimoNome: "Vos",
    numero: "unknown",
    gostos: ["JavaScript", "Gaming", "Foxes"],
  },
];

function pesquisarContato(nome, propriedade) { 
  for (let x = 0; x < contatos.length; x++) { // Pesquisa no objeto inteiro (todos os índices => subObjetos)
    if (contatos[x].primeiroNome === nome) { // Se (nome) existe em (primeiroNome) do subObjeto
      if (contatos[x].hasOwnProperty(propriedade)) { // e se (propriedade) é uma propriedade desse contato
        return contatos[x][propriedade]; // Se ambos forem verdadeiros, retorna o valor dessa propriedade
      } else {
        return "Propriedade não encontrada"; 
      }
    }
  } // Fim do FOR
  return "Nome do contato não encontrado"; 
}

console.log(pesquisarContato("Akira", "gostos"));


/*
Estrutura do Objeto:
  objeto[propriedade][valor] 

Função (Parâmetros):
  Parâmetro (nome) == [valor] do Objeto
  Parâmetro (propriedade) == [propriedade] do Objeto
*/


