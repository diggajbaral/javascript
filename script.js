// revrse the array

const num = [5, 10, 15, 20, 25];
const rev = [];

for (let i = num.length - 1; i >= 0; i--) {
    rev.push(num[i]);
}

console.log(rev);