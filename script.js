
function palindrome(quote){

    const rev = quote.split('').reverse().join('');

    if (quote === rev) {
        console.log(true);
    } else {
        console.log(false);
    }

}

palindrome("sita")

// JavaScript