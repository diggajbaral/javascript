const display = document.getElementById('display_counter');
const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');

let counter = 0;
display.innerText = counter;


increment.addEventListener('click', function () {
    counter++;
    display.innerText = counter;
})

decrement.addEventListener('click', function () {
    if (counter <= 0) {
        return 0;
    } else {
        counter--;
        display.innerText = counter;
    }
})

reset.addEventListener('click', function () {
    counter = 0;
    display.innerText = counter;
})