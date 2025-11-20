const nums = [3, 10, 6, 15, 2, 20];
let newNums = [];

for (let num of nums) {
    if (num >= 5 && num % 2 == 0) {
        newNums.push(num);
    }
}

console.log(newNums);