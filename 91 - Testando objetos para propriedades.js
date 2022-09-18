// Função checa se propriedade existe no objeto
function checkObj(obj, checkProp) { 

  if (obj.hasOwnProperty(checkProp)) { // Verifica se propriedade existe no objeto
    return obj[checkProp]; // Retorna valor da propriedade
  }
  return "Not Found";
}
// Fim da função

//Objeto (Global)
const myObj = {
  gift: "Pony", 
  pet: "Kitten", 
  bed: "Sleigh",
  city: "Seattle"
  };

console.log(checkObj(myObj, 'gift')); // Imprime retorno da função. 
console.log(checkObj(myObj, 'pet'));
console.log(checkObj(myObj, 'bed'));
console.log(checkObj(myObj, 'city'));

/*
.hasOwnProperty(propriedade) => método verifica se existe a propriedade no objeto 
(retorna true ou false)
*/


