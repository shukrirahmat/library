const myLibrary = [];
const dialog = document.querySelector('dialog');
const dialogbtn = document.querySelector('.dialogbtn');
const form = document.querySelector('form');
const addbtn = document.querySelector('.addbtn');
const closebtn = document.querySelector('.closebtn');
const booktitle = document.querySelector("#title");
const bookauthor = document.querySelector("#author");
const bookpages = document.querySelector("#pages");
const bookread = document.querySelector("#read");

dialogbtn.addEventListener("click", () => {
    dialog.showModal();
});

form.addEventListener("submit", (event) => {
    const book = new Book(booktitle.value, bookauthor.value, bookpages.value, bookread.checked);
    addBookToLibrary(book);
    event.preventDefault();
    dialog.close();
    booktitle.value = "";
    bookauthor.value = "";
    bookpages.value = "";
    bookread.checked = false;
})

closebtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if (this.read) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLibrary();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateLibrary();
}

function updateLibrary() {
    const table = document.querySelector('table');
    const oldtbody = document.querySelector('tbody');
    const newtbody = document.createElement('tbody');
    let bookIndex = 0;
    for (let book of myLibrary) {
        book.id = bookIndex;
        const newRow = document.createElement('tr');

        const title = document.createElement('td')
        title.textContent = book.title;
        title.classList.add("left-aligned");

        const author = document.createElement('td')
        author.textContent = book.author;
        author.classList.add("left-aligned");

        const pages = document.createElement('td')
        pages.textContent = book.pages;

        const read = document.createElement('td');
        const togglebtn = document.createElement('button');
        togglebtn.classList.add('togglebtn');
        togglebtn.textContent = book.read ? 'Read' : 'Not Read';
        togglebtn.addEventListener('click', () => {
            book.toggleRead();
            updateLibrary();
        });
        read.appendChild(togglebtn);
        
        const removetd = document.createElement('td');
        const removebtn = document.createElement('button')
        removebtn.classList.add('removebtn');
        removebtn.textContent = "Delete";
        removebtn.addEventListener('click', () => {
            removeBook(book.id);
        });
        removetd.appendChild(removebtn);

        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        newRow.appendChild(read);
        newRow.appendChild(removetd);
        newtbody.appendChild(newRow);

        bookIndex++;
    }
    table.replaceChild(newtbody, oldtbody);

}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
addBookToLibrary(hobbit);
updateLibrary();