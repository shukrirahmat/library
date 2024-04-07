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

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLibrary();
}

function updateLibrary() {
    const table = document.querySelector('table');
    const oldtbody = document.querySelector('tbody');
    const newtbody = document.createElement('tbody');
    for (let book of myLibrary) {
        const newRow = document.createElement('tr');
        const title = document.createElement('td')
        title.textContent = book.title;
        const author = document.createElement('td')
        author.textContent = book.author;
        const pages = document.createElement('td')
        pages.textContent = book.pages;
        const read = document.createElement('td')
        read.textContent = book.read ? 'Read' : 'Not Read';
        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        newRow.appendChild(read);
        newtbody.appendChild(newRow);
    }
    table.replaceChild(newtbody, oldtbody);

}
updateLibrary();