const school = [
    { id: 1, name: "Diggaj Baral", class: 9, fee_pays: 2500 },
    { id: 2, name: "Anjali Sharma", class: 10, fee_pays: 2700 },
    { id: 3, name: "Ramesh Thapa", class: 8, fee_pays: 2300 },
    { id: 4, name: "Sita Rai", class: 9, fee_pays: 2600 },
    { id: 5, name: "Kiran Gurung", class: 11, fee_pays: 2800 }
];

let highestFeeStudent = school[0];

for (student of school) {

    if (student.fee_pays > highestFeeStudent.fee_pays) {
        highestFeeStudent = student
    }

}

console.log(highestFeeStudent);