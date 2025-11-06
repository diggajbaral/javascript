let age = "23yrs";

console.log(typeof age); // string
console.log(typeof(age)); // string

let valueInNumber = Number(age);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// "23yrs" -> NaN
// true -> 1 | false -> 0 

let hasJoined = "elon musk";

let booleanHasJoined = Boolean(hasJoined);
console.log(booleanHasJoined); // true

// true -> 1 | false -> 0
// "" -> false
// "elon musk" -> true

// ----------------- Part Two -------------------- //

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 ?
console.log(1 + 2 + "2"); // 32 ?