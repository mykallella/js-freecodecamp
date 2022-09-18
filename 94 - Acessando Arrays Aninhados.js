const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]; // Pesquisa com colchetes []
// Do array myPlants, 
// [índice 1 (segundo objeto)] . propriedade list, [índice 1 (segundo item)]

console.log(secondTree)


