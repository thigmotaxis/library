let myLibrary = [];

// constructor
function Book (name, author, pageCount, hasRead) {
  this.name = name
  this.author = author
  this.pageCount = pageCount
  this.hasRead = hasRead
}

const bookOne = new Book ("Dune", "Frank Herbert", "591", true)

// appends the parameter book to the library[] array
function addBookToLibrary(book) {
  myLibrary.push(book)
}

addBookToLibrary(bookOne)

console.log(myLibrary)
