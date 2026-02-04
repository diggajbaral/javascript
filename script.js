const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}