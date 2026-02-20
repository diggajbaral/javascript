const theme = document.getElementById('theme');

theme.addEventListener('click', function () {

    if (document.body.style.background === 'black') {
        document.body.style.background = 'white';
        document.body.style.color = 'black';

    } else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }

})