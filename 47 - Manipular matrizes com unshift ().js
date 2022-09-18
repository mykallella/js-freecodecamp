const myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // Remove primeiro elemento do array

myArray.unshift(["Paul", 35]); // Adiciona elemento no início do array

// Imprime todo array
for(let index in myArray) {
    console.log(myArray[index])
}

/*
.unshift() adiciona o elemento no início do array.
*/

