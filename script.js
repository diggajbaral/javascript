const apiResponse = {
    users: [
        { id: 1, name: "Alice", age: 28 },
        { id: 2, name: "Bob", age: 34 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 31 }
    ]
};

const age = {
    under30: [],
    above30: []
};

for (const user of apiResponse.users) {
    if (user.age < 30) {
        age.under30.push(user.name);
    } else {
        age.above30.push(user.name);
    }
}

console.log(age);