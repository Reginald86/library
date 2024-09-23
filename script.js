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
   let clone = square.cloneNode(true);
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

  deleteButton.addEventListener('click', () => {
    container.removeChild(clone);
  });
 
  readButton.addEventListener("click", () => {
    sqRead.textContent = sqRead.textContent === "Yes" ? "No" : "Yes";
  });

  container.appendChild(clone);
}



let addBook = document.getElementById('addBook');
let modal = document.getElementById('dialog');
let closeModal = document.getElementById('close');

addBook.addEventListener('click', () => {
      modal.showModal();
    });
  
closeModal.addEventListener('click', (e) => {
      e.preventDefault();
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




