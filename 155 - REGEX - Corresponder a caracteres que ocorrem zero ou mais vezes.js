let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Procura 'a' até o fim do grupo de 'a'
let result = chewieQuote.match(chewieRegex);

console.log(result)


