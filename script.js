const arr = [10, 5, 20, 8, 15];
let reversedArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i])
}

console.log(reversedArray);