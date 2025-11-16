// - - - slice & splice - - - //

const arr = [0, 1, 2, 3, 4, 5];
console.log("A ", arr); // A  [ 0, 1, 2, 3, 4, 5 ]

const newArray = arr.slice(1, 3);
console.log(newArray); // [1, 2]

const anotherNewArray = arr.splice(1, 3);
console.log("C ", arr); // C  [ 0, 4, 5 ]

console.log(anotherNewArray); // [ 1, 2, 3 ]