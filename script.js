const employee = {
    name: "Sarah",
    age: 28,
    department: "Marketing",
    skills: {
        primary: "SEO",
        secondary: "content writing"
    }
}

for (let k in employee) {
    console.log(k, employee[k])
}