let animals = ["dog", "cat", "cow"];
let newAnimals = [];

for (let animal of animals) {
    newAnimals.push(animal.toUpperCase());
}

console.log(animals);
console.log(newAnimals);