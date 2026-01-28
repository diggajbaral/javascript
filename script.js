const givenNumber = 20;
let totalCount = 0;

for (let i = 1; i <= givenNumber; i++) {
    if (i % 3 === 0) {
        totalCount ++;
    }
}

console.log(totalCount);