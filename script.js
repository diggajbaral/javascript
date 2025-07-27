// fild the longest word

function lngword (sentence) {
    const words = sentence.split(' ');
    let longest = '';
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
}

console.log((lngword("The quick brownn fox.")));