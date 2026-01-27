let num = 9801309237;
let sumDigits = 0;

for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    sumDigits += temp % 10;
}

console.log(sumDigits);