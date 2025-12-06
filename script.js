const array = [1, 3, 5, 7, 9, 2, 4, 6, 8];
const reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
}

console.log(reversed);
