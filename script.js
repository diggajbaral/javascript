const students = [
    {
        name: "Alice",
        age: 20,
        grades: { math: 90, english: 85, science: 95 }
    },
    {
        name: "Bob",
        age: 22,
        grades: { math: 75, english: 80, science: 70 }
    },
    {
        name: "Charlie",
        age: 21,
        grades: { math: 88, english: 92, science: 84 }
    }
];

let topStudent = "";
let highestAverage = 0;

for (let student of students) {

    let total = 0;
    let count = 0;

    for (let subject in student.grades) {

        total += student.grades[subject];
        count++;

    }

    let average = total / count;

    console.log(`${student.name} - Average : ${average}`);

    if (average > highestAverage) {


        highestAverage = average;
        topStudent = student.name;

    }

}

console.log(`Top student: ${topStudent} with average = ${highestAverage}`);