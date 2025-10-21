const apiResponse = {
    users: [
        { id: 1, name: "Alice", age: 28 },
        { id: 2, name: "Bob", age: 34 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 31 },
        { id: 5, name: "Eve", age: 28 },
        { id: 6, name: "Frank", age: 22 }
    ]
};

let totalAge = {};

for (user of apiResponse.users) {

    const age = user.age;

    if (totalAge[age]) {
        totalAge[age]++;
    } else {
        totalAge[age] = 1;
    }

}

console.log(totalAge);