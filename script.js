let container = document.getElementById("container");
let addBook = document.getElementById("button");

for(let i = 0; i < 1; i++){
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for(let i = 0; i < 3; i++) {
        let square = document.createElement("div");
        square.className = "square";
        row.appendChild(square);
    }
}

addBook.addEventListener('click', () => {
    dialog.showModal();

});