// Grab HTML elements:

const inputTodoEl = document.getElementById("input-todo-text")
const addTodoButtonEl = document.getElementById("add-todo-button")
const todoItemsContainer = document.getElementById("todo-items")
const errorEl = document.getElementById("error")

let tasks = [];

const saveTaskToStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks))


// add event to the "form" 

addTodoButtonEl.addEventListener("click", addTodoHandler)

function addTodoHandler () {
    // Read input value
    let todoText = inputTodoEl.value
    // check if unput is valid
    if (todoText == "") {
        let errorMessage = "Todo item cannot be empty!"
        errorEl.textContent = errorMessage
        
        return // if there is errors, return will prevent execution of code
    } else if (todoText.length < 3) {
        let errorMessage = "Todo item cannot be less than 3 characters!"
        errorEl.textContent = errorMessage
        
        return 
    }

    // clear the error message
    errorEl.textContent = ""

    // clear the input field
    inputTodoEl.value = ""
    // Do something with the input text...
    console.log(todoText)

    createTodoElement(todoText)

}

// Creates a todo element and sets its text
function createTodoElement(todoText) {

    const todoItemEl = document.createElement("li")
    todoItemEl.innerText = todoText

    const todoItemRemoveButton = document.createElement("button")
    todoItemRemoveButton.textContent = "Remove"

    todoItemEl.append(todoItemRemoveButton)

    todoItemsContainer.append(todoItemEl)

    // add remove todo event handler
    todoItemRemoveButton.addEventListener("click", function() {
        // console.warn("I want to remove " + todoItemEl.textContent)

        todoItemEl.remove() // remove only this todoitem
    })

}