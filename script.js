let nums = [3, 8, 12, 5, 7, 20, 1];
let count = 0;

for (let num of nums) {
    if (num % 2 == 0) {
        count = count + 1
    }
}

console.log(count);