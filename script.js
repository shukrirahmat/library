const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function updateLibrary() {
    const tbody = document.querySelector('tbody');
    for (let book of myLibrary) {
        const newRow = document.createElement('tr');
        const title = document.createElement('td')
        title.textContent = book.title;
        const author = document.createElement('td')
        author.textContent = book.author;
        const pages = document.createElement('td')
        pages.textContent = book.pages;
        const read = document.createElement('td')
        read.textContent = book.read? 'Read' : 'Not Read';
        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        newRow.appendChild(read);
        tbody.appendChild(newRow);
    }
}

const disclosure = new Book("Disclosure", "Michael Crichton", 440, true)
const wayofkings = new Book("The Way of Kings", "Brandon Sanderson", 1200, false)
addBookToLibrary(disclosure);
addBookToLibrary(wayofkings);
updateLibrary();