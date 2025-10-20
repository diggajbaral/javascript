let i = 10;

const countdown = setInterval(() => {

    console.log(i);
    i--;

    if (i < 0) {
        clearInterval(countdown);
    }

}, 1000)