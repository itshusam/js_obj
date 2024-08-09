function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};


const books = [];


function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    books.push(book);
}

function searchBooksByTitle(title) {
    return books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchBooksByAuthor(author) {
    return books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}


function filterBooksWithMoreThan100Pages() {
    return books.filter(book => book.pages > 100);
}

function addPrefixToTitlesAndAuthors() {
    return books.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBook("To Kill a Mockingbird", "Harper Lee", 281);
addBook("1984", "George Orwell", 328);
addBook("The Catcher in the Rye", "J.D. Salinger", 277);

console.log("All Books:");
books.forEach(book => console.log(book.displayInfo()));

console.log("\nSearch for books with title containing 'great':");
searchBooksByTitle("great").forEach(book => console.log(book.displayInfo()));

console.log("\nSearch for books by author 'Harper Lee':");
searchBooksByAuthor("Harper Lee").forEach(book => console.log(book.displayInfo()));

console.log("\nBooks with more than 100 pages:");
filterBooksWithMoreThan100Pages().forEach(book => console.log(book.displayInfo()));

console.log("\nBooks with title and author prefixes:");
addPrefixToTitlesAndAuthors().forEach(book => console.log(`${book.title}, ${book.author}, Pages: ${book.pages}`));