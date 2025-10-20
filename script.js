const school = [
    { id: 1, name: "Diggaj Baral", class: 9, fee_pays: 2500 },
    { id: 2, name: "Anjali Sharma", class: 10, fee_pays: 2700 },
    { id: 3, name: "Ramesh Thapa", class: 8, fee_pays: 2300 },
    { id: 4, name: "Sita Rai", class: 9, fee_pays: 2600 },
    { id: 5, name: "Kiran Gurung", class: 11, fee_pays: 2800 }
];

const names = [];

for (const student of school) {
    names.push(student.name);
}

console.log(names);