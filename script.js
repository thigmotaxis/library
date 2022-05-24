let myLibrary = [];

// Book constructor
function Book () {
  this.title = document.querySelector("#title").value
  this.author = document.querySelector("#author").value
  this.pages = document.querySelector("#pages").value
  this.read = document.querySelector("#read").value
}

// appends the parameter book to the library[] array
function addBookToLibrary(book) {
  myLibrary.push(book)
}

const libraryBook = new Book();
addBookToLibrary(libraryBook)

function createCard() {
  // loop to iterate through library array creating a card for each - will be saved as
  const cardHolder = document.querySelector(".cardHolder")    // selects cardHolder div to use as a parent for divs created by the for loop
  // lines 23 - 28 create cards and assign them a data-index property which we'll later use to reference them for the delete button
  for (let i in myLibrary) {
    let card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute("data-index", i)
    cardHolder.appendChild(card)
    createCardContent(myLibrary[i])
    // console.log(myLibrary[i])
  }
}

// loops through each property in the Book object, creating a div for each containing it's
function createCardContent(obj) {
  const newCard = document.querySelector(".card")
  for (const property in obj) {
    let cardContent = document.createElement("div");
    cardContent.textContent = `${property[0].toUpperCase() + property.slice(1)}: ${obj[property]}`
    cardContent.classList.add("property")
    newCard.appendChild(cardContent)
    // console.log(cardContent)
  }
}

createCard()
