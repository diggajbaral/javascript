const nums = [3, 10, 6, 15, 2, 20];

const newNums = nums
    .filter(num => num > 5)
    .map(num => num * 2);

console.log(newNums);