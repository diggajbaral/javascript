const form = document.getElementById('form');
const usd = document.getElementById('usd');
const npr = document.getElementById('npr');
const result = document.getElementById('result');

form.addEventListener('click', function(event) {
    event.preventDefault();

    usd_data = usd.value.trim();
    npr_data = npr.value.trim();

    const result_data = usd_data * npr_data;
    result.innerText = result_data;

})