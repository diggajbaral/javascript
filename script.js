const char = "JavaScript";

// String Length
console.log(char.length); // 10


// Character Acess
console.log(char[1]); // a
console.log(char.charAt(1)); // a


// Case Conversion
console.log(char.toUpperCase()); // JAVASCRIPT
console.log(char.toLowerCase()); // javascript


// Search Methods
console.log(char.includes("ava")); // true
console.log(char.indexOf("s")); // -1
console.log(char.indexOf("S")); // 4
console.log(char.startsWith("Ja")); // true
console.log(char.endsWith("pt")); // true


// Exxtracting Substrings
console.log(char.slice(1, 4)); // ava
console.log(char.substring(0, 5)); // JavaS


// Replace
console.log(char.replace("J", "P")); // PavaScript
console.log(char.replaceAll("a", "o")); // JovoScript


// Trim or Clean
console.log("   Fruits   "); // "   Fruits   "
console.log("   Apple   ".trim()); // "Apple"
console.log("   Banana".trimStart()); // "Banana"
console.log("Coconut   ".trimEnd()); // "Coconut"


// Split
console.log("a, b, c".split(",")); // [ 'a', ' b', ' c' ]


// Repeat
console.log("O".repeat(3)); // OOO


// Match/Search with Regex
console.log("abc123".match(/\d+/)); // [ '123', index: 3, input: 'abc123', groups: undefined ]
console.log("abc123".search(/\d/)); // 3