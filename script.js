const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rst = numbers.map(num => {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
});

console.log(rst);