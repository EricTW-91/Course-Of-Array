let animal = "Penguins are cool";

console.log(animal.length);

//Split to Array
let animalArray = animal.split('');

console.log(animalArray);

animalArray = animal.split(' ');

console.log(animalArray);

//Joined Array
let animalJoined = animalArray.join('@');

console.log(animalJoined);