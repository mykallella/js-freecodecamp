let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
// g Extrai um padrão mais de uma vez
// i não diferencia maiúscula de minúscula
let result = twinkleStar.match(starRegex); 

console.log(result)


