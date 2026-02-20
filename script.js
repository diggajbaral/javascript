const nums = [3, 0, 1];

let n = nums.length;

let expectedSum = 0;
for (let i = 0; i <= n; i++) {
  expectedSum += i;
}

let actualSum = 0;
for (let i = 0; i < nums.length; i++) {
  actualSum += nums[i];
}

let missingNumber = expectedSum - actualSum;

console.log(missingNumber);