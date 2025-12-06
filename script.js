const array = [1, 2, 3, 1, 2, 3, 4, 5];
const result = [];

for (arr of array) {
    if (!result.includes(arr)){
        result.push(arr);
    }
}

console.log(result);