const array = [3, 7, 2, 9, 5, 4];
let evenCount = [];
let oddCount = [];

for (let arr of array) {
    if (arr % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(evenCount);
console.log(oddCount);