let arr = [1, 2, 2, 3, 4, 4, 5];
let result = [];

for (let item of arr) {
    if (!result.includes(item)){
        result.push(item);
    }
}

console.log(result);

// 5th line - "If result does NOT contain the current item, then proceed inside the if block"