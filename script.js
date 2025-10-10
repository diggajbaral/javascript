const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    price: 15
};

delete book.price;
console.log(book)

const checker = ("author" in book);

if (checker == true) {
    console.log('Author is Paulo Coelho');
} else {
    console.log('Author not found');
}

console.log(book)