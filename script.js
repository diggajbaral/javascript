let x = 5;

for (let i = 1; i <= x; i++) {

    let spaces = " ".repeat(x - i);
    let stars = "*".repeat(2 * i - 1);

    console.log(spaces + stars);

}