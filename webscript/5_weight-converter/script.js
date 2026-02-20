const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result')

form.addEventListener('click', function (event) {
    event.preventDefault();

    if (input.value === "") return;

    const data = input.value * 2.20462;
    result.innerText = Math.floor(data) + " lbs";
})