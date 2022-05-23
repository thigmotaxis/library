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
  let libraryBook = new Book();
  return libraryBook;
};

// creates event listener to create new books and add them to the library array

function createButtonListener() {
  const btn = document.querySelector("#btn");
  btn.onclick = () => {
    // calls createBook which creates a libraryBook object which is passed to addBookToLibrary, which pushes the object to the myLibrary array
    let libraryBook = createBook()
    // lines 28-29 check the object created in 26 for empty properties and only pushes it to the myLibrary array if all properties have values
    for (let key in libraryBook) {
      if (libraryBook[key] === "") return;
    };
    addBookToLibrary(libraryBook)
    console.log(myLibrary)
  }
}

createButtonListener()
