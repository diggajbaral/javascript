const array = [3, 7, 2, 9, 5, 4];
let evenCount = [];
let oddCount = [];

for (let arr of array) {
    if (arr % 2 === 0) {
        evenCount.push(arr);
    } else {
        oddCount.push(arr);
    }
}

console.log(evenCount);
console.log(oddCount);