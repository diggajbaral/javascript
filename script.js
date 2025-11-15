const x = new Date();
console.log(x); // 2025-11-15T13:04:49.524Z

// - - - Propertise of Date & Time - - - //

x.setFullYear(2030);
x.setMonth(0);
x.setDate(1);
x.setHours(12);
x.setMinutes(10);
x.setSeconds(59);

console.log(x.getFullYear()); // 2023
console.log(x.getMonth()); // 0
console.log(x.getDate()); // 1
console.log(x.getDay()); // 2
console.log(x.getHours()); // 12
console.log(x.getMinutes()); // 10
console.log(x.getSeconds()); // 59
console.log(x.getMilliseconds()); // 542
console.log(x.getTime()); // 1893480059524
console.log(x.getTimezoneOffset()); // -330



// - - - String Conversion - - - //

const createdDate = new Date();

console.log(createdDate.toString()); // Sat Nov 15 2025 18:34:49 GMT+0530 (India Standard Time)
console.log(createdDate.toDateString()); // Sat Nov 15 2025
console.log(createdDate.toTimeString()); // 18:34:49 GMT+0530 (India Standard Time)
console.log(createdDate.toISOString()); // 2025-11-15T13:04:49.538Z
console.log(createdDate.toLocaleString()); // 11/15/2025, 6:34:49 PM
console.log(createdDate.toLocaleDateString()); // 11/15/2025