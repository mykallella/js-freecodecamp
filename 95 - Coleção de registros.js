const colecaoDiscos = {
  2548: {
    album: 'O Violeiro Canta',
    artista: 'Almir Sater',
    faixas: ['Um violeiro toca', 'Tocando em frente', 'Chalana']
  },
  2468: {
    album: 'Baque Solto',
    artista: 'Lenine',
    faixas: ['Maracatu silêncio', 'Essa alegria']
  },
  1245: {
    artista: 'Cícero',
    faixas: []
  },
  5439: {
    album: 'Batidas do meu coração'
  }
};

/*
    ESTRUTURA DO OBJETO:
    ---------------------
    OBJETO[PROPRIEDADE][PROPRIEDADE][VALOR]
    discos[    id     ][propriedade][valor] (PARÂMETROS DA FUNÇÃO)
*/


function updateDiscos(discos, id, propriedade, valor) {

    if (propriedade !== 'faixas' && valor !== "") {
        // Se (propriedade) não for 'faixas' e (valor) não for uma string vazia, 
        // atualize ou defina o álbum (propriedade) como (valor).
        discos[id][propriedade] = valor;
    } else if (propriedade === "faixas" && discos[id].hasOwnProperty("faixas") === false) {
        // Se (propriedade) for 'faixas', mas o álbum não tiver uma 'faixas' propriedade, 
        // crie um array vazio e adicione (valor) a ele.
        discos[id][propriedade] = [valor];
    } else if (propriedade === "faixas" && valor !== "") {
        // Se (propriedade) for 'faixas' e (valor) não for uma string vazia, 
        // adicione (valor) ao final da 'faixas' matriz existente do álbum.
        discos[id][propriedade].push(valor);
    } else if (valor === "") {
        // Se (valor) for uma string vazia, 
        // exclua a propriedade (propriedade) fornecida do álbum.
        delete discos[id][propriedade];
    }
    return discos;
    // Retorna coleção de discos.
}

console.log(updateDiscos(colecaoDiscos, 5439, 'artista', 'Rael'));
// ----------------------  discos   , [id], [propriedade], [valor]

/*

OUTRA FORMA:

function updateDiscos(discos, id, propriedade, valor) {
    if (valor === '') {
        delete discos[id][propriedade];
    } else if (propriedade === 'tracks') {
        discos[id][propriedade] = discos[id][propriedade] || []; 
        discos[id][propriedade].push(valor);
    } else {
        discos[id][propriedade] = valor;
    }
    return discos;
}

*/





