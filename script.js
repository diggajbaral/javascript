const user = {
    name: "jhon",
    age: 30,
    contact: {
        email: "jhon@gmail.com",
        phone: "213-456-789",
        address: {
            city: "new york",
            zip: "10001"
        }
    }
};

console.log(user.contact.email);
console.log(user.contact.address.city);
user.contact.address.country = "USA";

console.log(`${user.name} lives in ${user.contact.address.city}, ${user.contact.address.country}. Contact: ${user.contact.email}`)