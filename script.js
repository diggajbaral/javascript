const nums = [10, 25, 31, 34, 14, 56];

const sorted = nums.sort((a, b) => b - a);
const secondLargest = sorted[1];

console.log(secondLargest);