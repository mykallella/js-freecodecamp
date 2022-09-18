let favWord = "favorite";
let favRegex = /favou?rite/; 
// Procura a palavra (? Diz que elemento anterior (u) é OPCIONAL)
let result = favRegex.test(favWord);

console.log(result)

