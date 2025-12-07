let str = "banana";
let count = 0;

for (let char of str) {
    count += (char === "a")
}

console.log(count);