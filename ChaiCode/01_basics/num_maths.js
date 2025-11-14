const balance = new Number(100);
console.log(balance);

// - - - - Maths - - - - //

console.log(Math);
console.log(Math.abs(-4)); // 4

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1); // Added 1 to avoid 0
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 6) + 1); // X * 6 = Dice