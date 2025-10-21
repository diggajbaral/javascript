const apiResponse = {
    users: [
        { id: 1, name: "Alice", age: 28 },
        { id: 2, name: "Bob", age: 34 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 31 }
    ]
};

const userMap = {};

for (const user of apiResponse.users) {
    userMap[user.id] = user.name
}

console.log(userMap);