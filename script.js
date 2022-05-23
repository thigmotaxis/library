let myLibrary = [];

// Book constructor
function Book () {
  this.title = document.querySelector("#title").value
  this.author = document.querySelector("#author").value
  this.pageCount = document.querySelector("#pageCount").value
  this.hasRead = document.querySelector("#hasRead").value
}
// appends the parameter book to the library[] array
function addBookToLibrary(book) {
  myLibrary.push(book)
}

function createBook() {
  // add protective logic to prevent submission of items with any undefined fields
  let libraryBook = new Book()
  return libraryBook
}

// creates event listener to create new books and add them to the library array

function createButtonListeners() {
  const btn = document.querySelector("#btn");
  btn.onclick = () => {
    // calls createBook which creates a libraryBook object which is passed to addBookToLibrary, which pushes the object to the myLibrary array
    addBookToLibrary(createBook())
    console.log(myLibrary)
  }
}

createButtonListeners()
