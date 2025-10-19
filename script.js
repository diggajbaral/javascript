const sentence = 'microsoft';
const rev = sentence.split('').reverse().join('');

if (sentence == rev) {
    console.log('it is palindrome');
} else {
    console.log("it's not palindrome");
}