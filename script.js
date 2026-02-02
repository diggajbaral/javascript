const string = "gaming laptop";
const vowels = "aeiou";
let counter = 0;

for(let i = 0; i < string.length; i++) {

    if (vowels.includes(string[i])){
        counter++;
    }

}

console.log(counter);