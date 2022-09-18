let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Procura o que NÃO é espaços em branco
let result = sample.match(countNonWhiteSpace);

console.log(result)

