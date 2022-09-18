/* 
    DESESTRUTURAÇÃO DE PARÂMETRO (PARA PASSAR OBJETO COMO PARÂMETRO)
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Função de SETA COM PARÂMETRO
// OBJETO É RECEBIDO COMO PARÂMETRO E DESESTRUTURADO
const half = ({max, min}) => (max + min) / 2.0; 
// SÃO PEGADOS SOMENTE VALORES DAS PROPRIEDADES ({max, min}) DO OBJETO recebido
// LOGO EM SEGUIDA FAZ-SE OS CÁLCULOS => (max + min) / 2.0

console.log('Cálculo: ' + half(stats)) // Passado objeto "stats" como parâmetro para a função


console.log('\n') //=====================================================


const profileMyrela = {
  name: 'Myrela',
  age: 31,
  nationality: 'Brasil',
  location: 'Pindamonhangaba',  
};


// Função de SETA COM PARÂMETRO
// OBJETO É RECEBIDO COMO PARÂMETRO
const profileUpdate1 = (profileData) => {
  const { name, age, nationality, location } = profileData;
  return (`${name} tem ${age} anos, nasceu em ${nationality} e mora em ${location}`)
}
// Cria as variáveis e traz os valores das PROPRIEDADES { name, age, nationality, location } do OBJETO profileData

console.log(profileUpdate1(profileMyrela)) // Passado objeto "profile" como parâmetro para a função


console.log('\n') //=====================================================


// Função de SETA COM PARÂMETRO
// OBJETO É RECEBIDO COMO PARÂMETRO E DESESTRUTURADO
const profileUpdate2 = ({ name, age, nationality, location }) => {
  return (`${name} tem ${age} anos, nasceu em ${nationality} e mora em ${location}`)
}
// SÃO PEGADOS SOMENTE VALORES DAS PROPRIEDADES ({ name, age, nationality, location }) DO OBJETO recebido
// LOGO EM SEGUIDA FAZ-SE ALGO => 

console.log(profileUpdate2(profileMyrela)) // Passado objeto "profile" como parâmetro para a função



