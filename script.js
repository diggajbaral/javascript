const arr = ["a", "b", "a", "c", "b", "a"];
const freq = {};

for (let item of arr) {
    if (freq[item]) {
        freq[item] += 1;
    } else {
        freq[item] = 1;
    }
}

console.log(freq);