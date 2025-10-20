const School = [
    { id: 1, name: "Diggaj Baral", class: 9, fee_pays: 2500 },
    { id: 2, name: "Anjali Sharma", class: 10, fee_pays: 2700 },
    { id: 3, name: "Ramesh Thapa", class: 8, fee_pays: 2300 },
    { id: 4, name: "Sita Rai", class: 9, fee_pays: 2600 },
    { id: 5, name: "Kiran Gurung", class: 11, fee_pays: 2800 }
];

let sum = 0;
for (const student of School) {
    sum += student.fee_pays;
}

const average = sum / School.length;

console.log('Average fee payment', average);

for (const student of School) {
    if (student.fee_pays > average) {
        console.log(student.name);
    }
}