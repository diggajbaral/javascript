const form = document.getElementById('form');
const input = document.getElementById('input');
const lists = document.getElementById('lists');
const note = document.getElementById('note');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = input.value.trim();

    if (data === '') return;

    const li = document.createElement('li');
    li.innerText = data;

    li.addEventListener('click', function () {
        li.remove();
    })

    if (lists.children.length = 1) {
        note.style.display = 'block';
    }

    lists.appendChild(li);

    input.value = '';

})