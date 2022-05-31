let myLibrary = [];
let libraryCounter = 0;
let readCounter = 0;
let unreadCounter = 0;
const counters = document.querySelectorAll(".counter")
createNewBookListener()
setCounters()

// Function definitions

function setCounters() {
  counters.forEach((counter) => {
    if (counter.id === "total") {
      counter.textContent = `Books in Library: ${libraryCounter}`;
    }
    if (counter.id === "booksRead") {
      counter.textContent = `Books Read: ${readCounter}`;
    }
    if (counter.id === "booksUnread") {
      counter.textContent = `Books to Read: ${unreadCounter}`;
    }
  })
}
function incrementCounter() {
  libraryCounter ++;
  if(myLibrary[myLibrary.length-1].read === "Yes") {
    readCounter ++;
  }
  else unreadCounter ++
  setCounters()
}

function decrementCounter(targetCard) {
  libraryCounter --;
  if(targetCard.dataset.read === "Yes") readCounter --;
  else unreadCounter --;
  setCounters()
}

// creates newBook event listener
function createNewBookListener() {
  const btn = document.querySelector("#addBook")
  btn.onclick = () => {
    addBookToLibrary()
    const obj = createCard(myLibrary)
    createCardContent(obj)
    incrementCounter()
  }
}

// Book constructor
function Book () {
  this.title = document.querySelector("#title").value
  this.author = document.querySelector("#author").value
  this.pages = document.querySelector("#pages").value
  this.read = document.querySelector("#read").checked === true ? "Yes" : "No"
}

// creates a new book and appends it to the library[] array
function addBookToLibrary() {
  const libraryBook = new Book();
  myLibrary.push(libraryBook)
  return myLibrary
}
// creates a .card div with textContent = Card #array.length -1 and appends it to cardHolder
function createCard(array) {
  const cardHolder = document.querySelector(".cardHolder")
  const card = document.createElement("div")
  card.setAttribute("data-index", `${array.length-1}`)
  card.setAttribute("data-read", `${array[array.length-1].read}`)
  card.classList.add("card")
  cardHolder.appendChild(card)
  return array[array.length-1]
}

// loops through each property in the Book object, creating a div for each containing it's value
function createCardContent(obj) {
  const targetCard = document.querySelector(`[data-index="${myLibrary.length-1}"]`)
  for (const property in obj) {
    let cardContent = document.createElement("div");
    cardContent.textContent = `${property[0].toUpperCase() + property.slice(1)}: ${obj[property]}`
    cardContent.classList.add("property")
    targetCard.appendChild(cardContent)
  }
  // creates removal button and event listener to delete the card on click
  const cardHolder = document.querySelector(".cardHolder")
  const removeButton = document.createElement("button")
  removeButton.setAttribute("id", "removeButton")
  removeButton.textContent = "Remove"
  targetCard.appendChild(removeButton)
  removeButton.onclick = () => {
    cardHolder.removeChild(targetCard)
    decrementCounter(targetCard)
  }
}
