const x = new Date();
console.log(x);

// - - - Propertise of Date & Time - - - //

x.setFullYear(2030);
x.setMonth(0);
x.setDate(1);
x.setHours(12);
x.setMinutes(10);
x.setSeconds(59);

console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDate());
console.log(x.getDay());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());
console.log(x.getTime());
console.log(x.getTimezoneOffset());



// - - - String Conversion - - - //

const createdDate = new Date();

console.log(createdDate.toString());
console.log(createdDate.toDateString());
console.log(createdDate.toTimeString());
console.log(createdDate.toISOString());
console.log(createdDate.toLocaleString());
console.log(createdDate.toLocaleDateString());