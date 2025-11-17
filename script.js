let items = ["a", "b", "c", "d"];
let reversed = [];

for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
}

console.log(reversed);