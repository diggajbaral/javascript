let arr = [3, 7, 2, 1, 9, 5, 5, 1, 3, 2, 6, 7];
const givenElement = 7;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === givenElement) {
        count++;
    }
}

console.log(count);