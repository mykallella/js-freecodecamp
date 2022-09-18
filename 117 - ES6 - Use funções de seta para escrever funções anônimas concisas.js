// Função Inline (Dentro de uma variável)
const magic1 = function () {
    return new Date();
};
console.log('Data do Sistema: ' + magic1())

// Função de SETA 
// De UMA LINHA
const magic2 = () => new Date();
console.log('Data do Sistema: ' + magic2())


console.log('\n') //===============================


// Função Inline
const myFunc1 = function () {
    const myVar = "Função Inline";
    return myVar;
}
console.log(myFunc1())

// Função de Seta 
const myFunc2 = () => {
    const myVar = "Função de Seta";
    return myVar;
}
console.log(myFunc2())

// Função de Seta
// De UMA LINHA
const myFunc3 = () => "Função de Seta de UMA LINHA";
console.log(myFunc3())


