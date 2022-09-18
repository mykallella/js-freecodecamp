const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

/*
  Acessando propriedades do objeto:
  - Ponto (.) para nomes sem espaço 
  - Colchetes [] para nomes com espaço
*/

