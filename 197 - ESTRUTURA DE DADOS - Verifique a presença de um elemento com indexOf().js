// indexOf verifica se elemento está no array 
// (retorna índice, senão existir retorna -1) 

// Checa se elemento existe no array - IF
function quickCheck1(arr, elem) {
  if (arr.indexOf(elem) != -1) {
    return true
  }
  return false
}
console.log(quickCheck1(['squash', 'onions', 'shallots'], 'mushrooms'));


// Checa se elemento existe no array - TERNÁRIO
function quickCheck2(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck2(["squash", "onions", "shallots"], "mushrooms"));


// Checa se elemento existe no array - COMPARAÇÃO DIRETA
function quickCheck3(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck3(["squash", "onions", "shallots"], "mushrooms"));

