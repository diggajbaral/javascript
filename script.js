// print sum of array. 

function sumArray(arr) {

    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;

}

console.log(sumArray([5, 5, 5]));