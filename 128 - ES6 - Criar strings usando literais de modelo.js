const alimento = {
  frutas: ["Jaca", "Banana", "Melão"],
  legumes: ["Chuchu", "Batata", "Chicória"],
  naoPerecivel: ["Arroz", "Feijão"]
};

// Função - Cria lista HTML
function criarLista(arr) {

  const itensLista = []; // Array "itensLista"

  for (let i = 0; i < arr.length; i++) {
    itensLista.push(`<li class="text-warning">${arr[i]}</li>`); // Adiciona itens no final do array 
    // arr[i] == alimento.legumes[i]
  }
  return itensLista;
}

const legumesLista = criarLista(alimento.legumes); // Chama função criarLista
// Envia como parâmetro valores da PROPRIEDADE "legumes" do OBJETO "alimento"

console.log(legumesLista)


