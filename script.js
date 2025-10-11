const users = [
    {name: "alice", age: 22, country: "USA"},
    {name: "bob", age: 28, country: "UK"},
    {name: "charlie", age: 25, country: "Canada"}
]

for (let user of users) {
    console.log(`${user.name} is ${user.age} years old and lives in ${user.country}`)
}