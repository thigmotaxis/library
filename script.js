// Function definitions

// Book constructor
function Book () {
  this.title = document.querySelector("#title").value
  this.author = document.querySelector("#author").value
  this.pages = document.querySelector("#pages").value
  this.read = document.querySelector("#read").value
}

// creates a new book and appends it to the library[] array
function addBookToLibrary() {
  const libraryBook = new Book();
  myLibrary.push(libraryBook)
  return myLibrary
}
// iterates through myLibrary creating a .card div with textContent = array index for each item and appending it to cardHolder
function createCards(array) {
  let cardHolder = document.querySelector(".cardHolder")
  for (let item in array){
    const card = document.createElement("div")
    card.textContent = `Card #${item}`;
    cardHolder.appendChild(card)
  }
  // console.log(card.textContent)
}

// global variable instantiations
let myLibrary = [{"hi": 4}, {"hello": 3}];

// function invocations
console.log(myLibrary);
let newBook = addBookToLibrary();
addBookToLibrary()
createCards(newBook)
