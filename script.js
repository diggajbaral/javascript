const array = [1, 2, 3];

let ascending = true;
let decending = true;

for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1])
        ascending = false;
    if (array[i] < array[i - 1])
        decending = false;
}

let isSorted = ascending || decending;
console.log(isSorted);