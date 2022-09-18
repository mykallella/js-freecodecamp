let usuario = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    },
  }
};


// Adiciona amigo no objeto
function addAmigo(objeto, amigo) {

  objeto.data.friends.push(amigo)
  return objeto.data.friends;
}

console.log(addAmigo(usuario, 'Pete'));




