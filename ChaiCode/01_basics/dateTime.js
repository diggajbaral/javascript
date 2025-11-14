// - - - Dates - - -

let ownDate = new Date()
console.log(ownDate);

console.log(ownDate.toString()); // Fri Nov 14 2025 14:56:09 GMT+XXXX (XXXXXX Standard Time)
console.log(ownDate.toDateString()); // Fri Nov 14 2025
console.log(ownDate.toLocaleString()); // 11/14/2025, 2:56:09 PM
console.log(typeof myDate);

let createdDate = new Date(2023, 0, 23); // undefined
console.log(createdDate.toDateString()); // Mon Jan 23 2023
console.log(createdDate.toLocaleString()); // 1/23/2023, 12:00:00 AM