// Função pesquisa valor da propriedade(parâmetro) no objeto
function phoneticLookup(val) {
  let result = ''

  // Objeto
  const lookup = {
    'alpha': "Adams",
    'bravo': "Boston",
    'charlie': "Chicago",
    'delta': "Denver",
    'echo': "Easy",
    'foxtrot': "Frank"
  }
  result = lookup[val] // Pesquisa o valor da propriedade 'charlie' do objeto
  return result
  
}

console.log(phoneticLookup("charlie")); // Imprime retorno da função 


