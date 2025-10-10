const student = {
    name: "Alice",
    age: 20,
    grade: "B"
};

student.grade = "A";
// console.log(student)

student.city = "london";
// console.log(student)

console.log(`${student.name} is ${student.age} years old, lives in ${student.city}, and got and ${student.grade} grade.`)