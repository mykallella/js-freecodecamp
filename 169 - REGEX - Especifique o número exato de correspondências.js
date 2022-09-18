let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Procura na string se há a letra 'm' 4 vezes
let result = timRegex.test(timStr);

console.log(result)

