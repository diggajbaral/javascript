
function generatePassword(length){

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghitjlmnopqrstuvwxyz";
    const digits = "0123456789";
    const symbol = "~!@#$%^&*()_+";

    const allChars = upper + lower + digits + symbol;
    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];

    }

    return password;

}

console.log(generatePassword(6));
console.log(generatePassword(8));
console.log(generatePassword(12));