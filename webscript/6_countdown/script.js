const countdown = document.getElementById('countdown');
let secounds = 99;
countdown.textContent = secounds;

const timer = setInterval(() => {
    secounds--;
    countdown.textContent = secounds;
    if (secounds === 0) {
        clearInterval(timer);
        countdown.textContent = "Time's up!";
    }
}, 1000);