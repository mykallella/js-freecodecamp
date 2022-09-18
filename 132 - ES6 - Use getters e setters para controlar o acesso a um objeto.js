// Classe
class Temperatura {
  constructor(fahrenheit) { // Cria o objeto com suas propriedades
    this.fahrenheit = fahrenheit;
  }

  // GET - Retorna
  get temperatura() {
    return (5 / 9) * (this.fahrenheit - 32); // Retorna em Celsius [ C = 5/9 * (F - 32)  ]
  }

  // SET - Modifica
  set temperatura(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32; // Transforma em Fahrenheit [ F = C * 9.0 / 5 + 32 ]
  }
}

// INSTANCIAÇÃO
const objetoTemperatura = new Temperatura(76);
// Instancia a CLASSE (cria o OBJETO) enviando o parâmetro para o CONSTRUCTOR em Fahrenheit


// GET
let getRetorno = objetoTemperatura.temperatura; // Chama GET (Obtém em Celsius)
console.log('Celsius: ' + getRetorno) // Imprime

// SET
objetoTemperatura.temperatura = 100; // Chama SET (Transforma em Fahrenheit) 
console.log(objetoTemperatura) // Imprime Objeto 
console.log('Nova Temperatura: ' + objetoTemperatura.temperatura); // Imprime


/*
    A função GET destina-se RETORNAR o valor da variável privada de um objeto 
    sem que o usuário acesse diretamente a variável privada.

    A função SET destina-se a MODIFICAR o valor da variável privada de um objeto 
    com base no valor passado como parâmetro. 
*/

console.log('\n') //---------------------------------------------------------


class Livro {
  constructor(autor) {
    this._autor = autor; // _autor (Variável Privada) (Propriedade do Objeto) 
  }

  // getter
  get escrever() {
    return this._autor; // Retorna 'autor'
  }

  // setter
  set escrever(updatedAutor) { 
    this._autor = updatedAutor; // Muda 'autor'
  }
}

// INSTANCIAÇÃO
const romance = new Livro('anônimo');
// Instancia a Classe 'Livro' (Cria objeto 'romance' com autor 'anônimo') 


// GET
console.log('Autor: ' + romance.escrever); // Chama GET (Obtém 'autor')

// SET
romance.escrever = 'Sebastião'; // Chama SET (Muda 'autor' do objeto 'romance')
console.log('Novo autor: ' + romance.escrever);
console.log(romance) // Imprime Objeto

/*
  Método construtor: Define estado inicial do objeto
  Cria novo 'Livro' com 'autor'
*/

