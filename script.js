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
    createCard(libraryBook)
  }
}

// create book card element
function createCard(libraryBook) {
  // loops through the items in the libraryBook object and creates a div with textContent = submitted values appended below cardHolder

  const cardHolder = document.querySelector(".cardHolder")
  const card = document.createElement("div")
  card.classList.add("card")
  cardHolder.appendChild(card)

  for (key in libraryBook) {
    console.log(libraryBook[key])
    property = document.createElement("div")
    property.textContent = libraryBook[key]
    card.appendChild(property)
  }
}


createButtonListener()
