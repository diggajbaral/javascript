const array = [1, 2, 3, 2, 3, 4, 6];
const result = [];

for (let arr of array) {

  if (!result.includes(arr)) {
    result.push(arr)
  }

}

console.log(result);