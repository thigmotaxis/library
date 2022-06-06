// counter handling functions

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

// form and widget creation functions

function createList() {
  const list = document.createElement("ul")
  container.appendChild(list)
  return list;
}

function createListItem(parent, i) {
  const listItem = document.createElement("li")
  listItem.setAttribute("data-index", i)
  parent.appendChild(listItem)
  return listItem
}

function createLabels(parent) {
  const label = document.createElement("label")
  if (parent.dataset.index === "0") {
    label.setAttribute("for", "#author")
    label.textContent = "Author: "
    parent.appendChild(label)
  }
  if (parent.dataset.index === "1") {
    label.setAttribute("for", "#title")
    label.textContent = "Title: "
    parent.appendChild(label)
  }
  if (parent.dataset.index === "2") {
    label.setAttribute("for", "#pages")
    label.textContent = "Page Count: "
    parent.appendChild(label)
  }
  if (parent.dataset.index === "3") {
    label.setAttribute("for", "read")
    label.textContent = "Read: "
    parent.appendChild(label)
  }
}

function createInputs(parent) {
  const input = document.createElement("input")
  if (parent.dataset.index === "0") {
    input.setAttribute("type", "text")
    input.setAttribute("id", "author")
    input.setAttribute("required", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "1") {
    input.setAttribute("type", "text")
    input.setAttribute("id", "title")
    input.setAttribute("required", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "2") {
    input.setAttribute("type", "number")
    input.setAttribute("id", "pages")
    input.setAttribute("required", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "3") {
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", "read")
    input.setAttribute("checked", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "4") {
    input.setAttribute("type", "submit")
    input.setAttribute("id", "submit")
    input.setAttribute("value", "Submit")
    parent.appendChild(input)
  }
}
// create form and widgets

let myLibrary = []
let libraryCounter = 0;
let readCounter = 0;
let unreadCounter = 0;
const counters = document.querySelectorAll(".counter")
setCounters()
const container = document.querySelector(".formContainer")
const btn = document.querySelector(".newBook")
btn.onclick = () => {
  if (container.firstChild) {
    alert("Please fill out the form before adding another book")
    return                                      // prevents multiple forms from being generated
  }
  let i = 0
  while (i < 5) {                               // prevents more than 5 input/label pairs from being generated
  const list = createList()
  const listItem = createListItem(list, i)
    createLabels(listItem)
    createInputs(listItem)
  i ++
  }
  addBookToLibrary()
}
// adds a listener to the form submit button to create a new object
document.querySelector('form').onsubmit = function(e) {
   e.preventDefault();
 }

function addBookToLibrary() {
  const subButton = document.querySelector("#submit")
  subButton.onclick = () => {
    const libraryBook = new Book()
    const allFieldsFilled = checkPropertiesHaveValues(libraryBook)
    if(allFieldsFilled === true) {
      myLibrary.push(libraryBook)
      const card = makeCard(libraryBook)
      populateCard(card, libraryBook)
      removeForm()
    }
  }
}

function Book () {
  this.author = document.querySelector("#author").value
  this.title = document.querySelector("#title").value
  this.pages = document.querySelector("#pages").value
  this.read = document.querySelector("#read").checked === true ? "Yes" : "No"
}

function checkPropertiesHaveValues(object) {
  for(property in object) {
    if (object[property] === "") {
    return false
    }
  }
  return true
}

function makeCard(object) {
  const parent = document.querySelector(".cardContainer")
  const card = document.createElement("div")
  card.classList.add("card")
  card.setAttribute("data-index", `${myLibrary.length-1}`)
  card.setAttribute("data-read", `${myLibrary[myLibrary.length-1].read}`)
  parent.appendChild(card)
  return card
}

function populateCard(card, object) {
  for (property in object) {
    prop = document.createElement("div")
    prop.classList.add("property")
    prop.textContent = `${property[0].toUpperCase() + property.slice(1)}: ${object[property]}`
    card.appendChild(prop)
  }

  const removeButton = document.createElement("button")
  const parent = document.querySelector(".cardContainer")
  removeButton.textContent = "Remove"
  removeButton.setAttribute("id", "removeButton")
  card.appendChild(removeButton)
  removeButton.onclick = () => {
    parent.removeChild(card)
    // decrementCounter(card)
  }
}

function removeForm() {
  let child = container.firstElementChild
  while (child) {
    child.remove()
    child = container.firstElementChild
  }
}
