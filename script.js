let container = document.getElementById("container");

const myLibrary = [];

let book1 = new Book("1984", 'George Orwell', 'read');
let book2 = new Book("1984", 'George Orwell', 'read'); 

myLibrary.push(book1, book2);

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {

}
    

  for (let i = 0; i < myLibrary.length; i += 3) {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for (let j = i; j < i + 3  && j < myLibrary.length; j++) {
      
      const book = myLibrary[j];

      // Create a square for each book
      const square = document.createElement('div');
      square.className = 'square';
      
      // Add book info to the square
      square.textContent = `${book.title} by ${book.author} (${book.read})`;

      // Append the square to the row
      row.appendChild(square);
    }
  }

let addBook = document.getElementById('addBook');
let modal = document.getElementById('dialog');
let closeModal = document.getElementById('close');

addBook.addEventListener('click', () => {
      modal.showModal();
    });
  
closeModal.addEventListener('click', () => {
      modal.close();
    })

  

