const usuarios = {
  Alan: {
    online: false
  },
  Mercedes: {
    online: true
  },
  Sarah: {
    online: true
  }
}

// Conta quantos usuários estão com propriedade 'online' em true
function contarOnline(objeto) {
  
  let numeroUsuarios = 0;

  for (let usuario in objeto) { // Percorre objeto 'usuarios'
    // Para cada 'usuario' do 'objetoUsuarios'
    
    if (objeto[usuario].online === true) { // Se propriedade 'online' igual a 'true'
      numeroUsuarios++; // Incrementa 1
    }
  }
  return numeroUsuarios;  
}

console.log(contarOnline(usuarios))

