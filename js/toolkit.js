// Grab HTML elements:

const inputTodoEl = document.getElementById("input-todo-text")
const addTodoButtonEl = document.getElementById("add-todo-button")
const todoItemsContainer = document.getElementById("todo-items")

// add event to the "form" 

addTodoButtonEl.addEventListener("click", addTodoHandler)

function addTodoHandler () {
    // Read input value
    let todoText = inputTodoEl.value
    // clear the input field
    inputTodoEl.value = ""
    // Do something with the input text...
    console.log(todoText)

    // todoItemsContainer.innerHTML += todoText
    // Manually create the element and put text in it tp prevent xss-attacks

    createTodoElement(todoText)

}


function createTodoElement(todoText) {
    const myElement = document.createElement("h1")
    myElement.innerText = todoText

    todoItemsContainer.append(myElement)
}