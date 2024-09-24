let container = document.getElementById("container");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;
  let newBook = new Book(title, author, pages, read);
  
  myLibrary.push(newBook);

 displayBook(title, author, pages, read);

}
    
function displayBook(title, author, pages, read) {

  
   let square = document.querySelector(".square");
   let clone = square.cloneNode(true);  // create clone of square tag
   clone.className = "clone";
   let sqTitle = clone.querySelector("#sqTitle");
   let sqAuthor = clone.querySelector("#sqAuthor");
   let sqPages = clone.querySelector("#sqPages");
   let sqRead = clone.querySelector("#sqRead");
   sqTitle.textContent = title;
   sqAuthor.textContent =  author;
   sqPages.textContent = pages;
   sqRead.textContent = read ? "Yes" : "No";
  let readButton = clone.querySelector("#readButton");
  let deleteButton = clone.querySelector("#delete");

  deleteButton.addEventListener('click', (e) => {
    container.removeChild(clone);
    myLibrary.forEach((element, index) => {  //remove specific value from myLibrary array
      if(element.title === title &&
        element.author === author && 
        element.pages === pages) {
        myLibrary.splice(index, 1);
      }
    });
  });
 
  readButton.addEventListener("click", () => {
    sqRead.textContent = sqRead.textContent === "Yes" ? "No" : "Yes";  //ternary to toggle read status
  });

  container.appendChild(clone);
  console.log(myLibrary.length)
  myLibrary.forEach(element => {
    console.log(element);
});
}

function addInitialBook() {  // add one (or more) book(s) onload of window.
  if (myLibrary.length === 0) {
    let book1 = new Book("1984", "George Orwell", "328", true);
    myLibrary.push(book1);
    displayBook(book1.title, book1.author, book1.pages, book1.read);
  }
}
window.onload = () => {  // show books onload
  addInitialBook();
};

let addBook = document.getElementById('addBook');
let modal = document.getElementById('dialog');
let closeModal = document.getElementById('close');

addBook.addEventListener('click', () => {
      modal.showModal();
    });
  
closeModal.addEventListener('click', (e) => {
      e.preventDefault();  //stop form from being pushed to addBooktoLibrary
      modal.close();
      form.reset()
    });

  
const form = document.getElementById("form");
   
 form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    modal.close()
    form.reset()

 });
//To anyone reading this, I would love recommnedations to improve code.


