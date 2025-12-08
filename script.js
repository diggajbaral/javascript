let num = 29;
let count = 0;

for(let k = num; k <= 1; k++) {
    count = 1;
}

for (let i = 2; i * i <= num; i++) {
    count += (num % i === 0);
}

console.log((count === 0 && "prime") || "not prime");