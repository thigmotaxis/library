const container = document.querySelector(".formContainer")
const btn = document.querySelector(".newBook")
let i = 0
btn.onclick = () => {
  while (i < 5) {                               // prevents more than 5 input/label pairs from being generated
  const list = createList()
  const listItem = createListItem(list)
    createLabels(listItem)
    createInputs(listItem)
  i ++
  }
}

function createList() {
  const list = document.createElement("ul")
  container.appendChild(list)
  return list;
}

function createListItem(parent) {
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
    label.setAttribute("for", "#pageCount")
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
    input.setAttribute("id", "#author")
    input.setAttribute("required", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "1") {
    input.setAttribute("type", "text")
    input.setAttribute("id", "#title")
    input.setAttribute("required", "")
    parent.appendChild(input)
  }
  if (parent.dataset.index === "2") {
    input.setAttribute("type", "number")
    input.setAttribute("id", "#pageCount")
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
