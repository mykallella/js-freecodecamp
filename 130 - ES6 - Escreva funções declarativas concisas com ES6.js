// Objeto
const bicicleta = {
  marcha: 2,
  inserirMarcha (novaMarcha) {
    this.marcha = novaMarcha;
  }
};

bicicleta.inserirMarcha(3); // Do objeto {bicicleta} chama função {inserirMarcha}
console.log(`Marchas: ${bicicleta.marcha}`); // Imprime valor da propriedade {marcha}

