const data = [1, 2, 2, 3, 4, 4];
const noDuplicate = [];

for (let item of data) {
    if (!noDuplicate.includes(item)){
        noDuplicate.push(item);
    }
}

console.log(noDuplicate);