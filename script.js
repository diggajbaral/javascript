const items = [
    { name: "Pen" },
    { name: "Notebook" },
    { name: "Eraser" }
];


let newProperty = [];

for (const item of items) {
    newProperty.push({ ...item, inStock: true });
}

console.log(newProperty);