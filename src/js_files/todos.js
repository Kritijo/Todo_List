import { todoSection } from "./index.js";
import {projectList} from "./menu.js"

const completedList = [];
let defaultList = [];
let list;

function useList(li=null){
    if(li) list = li;
    else list = defaultList;
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains('project-items')){
        projectList.forEach(item=>{
            if(item.name === e.target.textContent){
                useList(item.todo);
                displayTodo(item.todo);
            }
        });
    }
})
useList();

function createElement(type, classes = [], attributes = {}) {
    const element = document.createElement(type);
    classes.forEach(cls => element.classList.add(cls));
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
}

function generateTodoQeury(id){
    const todoQuery = createElement("div", ["todoQuery"], { "data-id": id});
    const button = createElement("input", ["bttn", "todoElem"], { type: "checkbox", "data-id": id });
    const task = createElement("input", ["task", "todoElem"], { "data-id": id });
    const date = createElement("input", ["date", "todoElem"], { type: "date", "data-id": id });
    const priority = createElement("input", ["priority", "todoElem"], { type: "color", "data-id": id });
    const del = createElement("input", ["delBox", "todoElem"], { type: "checkbox", "data-id": id, id:id});
    const label = createElement("label", ["del"], {for:id});

    todoQuery.append(button,task,date,priority,del,label);
    return [todoQuery,button,task,date,priority];
}

function createTodo() {
    const id = Date.now();
    let [todoQuery,button,task,date,priority] = generateTodoQeury(id);
    todoSection.append(todoQuery);
    task.focus();
    list.push(new Todo(id, button.checked, task.value, date.value, priority.value));
}

function displayTodo(list){
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

function editTodo(e){
    const todoId = e.getAttribute("data-id");
    const todo = list.find(todo => todo.id == todoId);
    const id = list.findIndex(obj=>obj.id == todoId)
    
    if (!todo) return;

    if (e.classList.contains("task")) {
        todo.task = e.value;
    } else if (e.classList.contains("date")) {
        todo.date = e.value;
    } else if (e.classList.contains("priority")) {
        todo.priority = e.value;
    } else if (e.classList.contains("bttn")) {
        todo.check = e.checked;
        setTimeout(() => {
            list.splice(id, 1);
            completedList.push(todo);
            displayTodo(list);
        }, 300);
    } else if (e.classList.contains("delBox")) {
        list.splice(id, 1);
    }

    displayTodo(list);
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

function filterTodos(filter) {
    switch (filter) {
        case "all":
            displayTodo(list);
            break;
        case "completed":
            displayTodo(completedList);
            break;
        case "incomplete":
            displayTodo(list.filter(todo => !todo.check && Date.parse(todo.date) > Date.now()));
            break;
        default:
            displayTodo(list);
            break;
    }
}

export {createTodo, editTodo, filterTodos}