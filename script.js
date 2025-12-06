const array = [1, 2, 3, 3, 2, 1, 1, 1];
const target = 1;
let count = 0;

for (let arr of array) {
    if (arr === target)
        count++;
}

console.log(count);