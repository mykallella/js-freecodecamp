// Mudando propriedade do objeto
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"; // Mudando valor da propriedade
console.log(myDog) // Imprime array myDog
console.log("\n")

//=========================================================

// Mudando propriedade do objeto com função
const someObj = {
  propName: "John" // Propriedade "propName"
};

// Função retorna união de string
function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const stringConcatenada = propPrefix("Name"); // Função "propPrefix" retorna "propName" e var "stringConcatenada" recebe
console.log(someObj[stringConcatenada]); // someObj[stringConcatenada] == someObj[propName]
console.log("\n")

