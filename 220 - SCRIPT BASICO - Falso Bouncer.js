// Remove valores falsos (false, null, 0, "", undefined e NaN)
function bouncer(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) { // Percorre array
    if (arr[i]) newArray.push(arr[i]); // Se array for true, então no newArray insere o arr[i] (elemento)
  }

  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]))

//-----------------------------------------------------------------------------

// Remove valores falsos (false, null, 0, "", undefined e NaN)
function bouncer1(arr) {
  return arr.filter(Boolean); 
  // Verifica se valores do array não são falsos e retorna o valor
}

console.log(bouncer1([7, "ate", "", false, 9]))

