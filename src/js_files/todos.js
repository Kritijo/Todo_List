import { todoSection } from "./index.js";

const defaultList = []
const completedList = [];

function createElement(type, classes = [], attributes = {}) {
    const element = document.createElement(type);
    classes.forEach(cls => element.classList.add(cls));
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
}

function generateTodoQeury(id){
    const todoQuery = createElement("div", ["todoQuery"], { "data-id": id });
    const button = createElement("input", ["bttn", "todoElem"], { type: "checkbox", "data-id": id });
    const task = createElement("input", ["task", "todoElem"], { "data-id": id });
    const date = createElement("input", ["date", "todoElem"], { type: "date", "data-id": id });
    const priority = createElement("input", ["priority", "todoElem"], { type: "color", "data-id": id });
    const del = createElement("input", ["del", "todoElem"], { type: "checkbox", "data-id": id });

    todoQuery.append(button,task,date,priority,del);
    return [todoQuery,button,task,date,priority];
}

export function createTodo() {
    const id = Date.now();
    let [todoQuery,button,task,date,priority] = generateTodoQeury(id);
    todoSection.append(todoQuery);
    task.focus();
    defaultList.push(new Todo(id, button.checked, task.value, date.value, priority.value));
}

function displayTodo(list=defaultList){
    todoSection.innerHTML = '';

    list.forEach(todo => {
        let [todoQuery,button,task,date,priority] = generateTodoQeury(todo.id);
        button.checked = todo.check;
        task.value = todo.task;
        date.value = todo.date;
        priority.value = todo.priority;
        todoSection.append(todoQuery);
    });
}

export function editTodo(e){
    const todoId = e.getAttribute("data-id");
    const todo = defaultList.find(todo => todo.id == todoId);
    const id = defaultList.findIndex(obj=>obj.id == todoId)
    
    if(todo){
        if(e.classList.contains("task")){
            todo.task = e.value;
        } else if(e.classList.contains("date")){
            todo.date = e.value;
        } else if(e.classList.contains("priority")){
            todo.priority = e.value;
        } else if(e.classList.contains("bttn")){
            todo.check = e.checked;
            if (todo.check === true){
                setTimeout(() => {
                    defaultList.splice(id,1);
                    completedList.push(todo);
                    displayTodo(defaultList);
                }, 300);
            }
        } else if(e.classList.contains("del")){
            defaultList.splice(id,1);
            displayTodo(defaultList);
        }
    }
    displayTodo(defaultList);
}

class Todo{
    constructor(id, checked, task, date, priority){
        this.id = id;
        this.check = checked;
        this.task = task;
        this.date = date;
        this.priority = priority;
    }
}

export function filterTodos(filter) {
    switch (filter) {
        case "all":
            displayTodo(defaultList);
            break;
        case "completed":
            displayTodo(completedList);
            break;
        case "incomplete":
            displayTodo(defaultList.filter(todo => !todo.check));
            break;
        default:
            displayTodo(defaultList);
            break;
    }
}
