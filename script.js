const str = "javascript";
const vowel = "aeiou";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
        counter++;
    }
}

console.log(counter);