import {todoSection} from "./index.js";
import { displayProjects } from "./menu.js";

const completedList = [];
let projectList = [{"name":"Default", "todo":[]}];
let list;

function useList(li=null){
    if(li) list = li;
    else list = projectList[0].todo;
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains('project-items')){
        projectList.forEach(item=>{
            if(item.name === e.target.textContent){
                useList(item.todo);
                displayTodo(item.todo, `${item.name} Project`);
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

function displayTodo(list,name="Default Project"){
    todoSection.innerHTML = '';
    displayHeading(name);

    list.forEach(todo => {
        let [todoQuery,button,task,date,priority] = generateTodoQeury(todo.id);
        button.checked = todo.check;
        task.value = todo.task;
        date.value = todo.date;
        priority.value = todo.priority;
        todoSection.append(todoQuery);
    });
}

function displayHeading(name){
    let headingDiv = createElement("div",["heading-div"])
    let heading = createElement("div",["project-heading"]);
    heading.textContent = `${name}`;

    const pattern = /Project$/;
    if(pattern.test(name) && name != "Default Project"){
        const del = createElement("input", ["delBox", "projectElem"], { type: "checkbox", id:name});
        const label = createElement("label", ["del"], {for:name});
        headingDiv.append(heading,del,label);
        todoSection.append(headingDiv);
        return;
    }
    headingDiv.append(heading);
    todoSection.append(headingDiv);
}

function editProject(e){
    let name = e.getAttribute("id");
    name = name.split("Project")[0].trim();
    if(name==="Default") return;
    projectList.forEach((project,idx)=>{
        if(project.name===name){
            projectList.splice(idx,1);
            useList();
            displayProjects();
            displayTodo(list);
        }
    })
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
            let li = [];
            projectList.forEach(project=>project.todo.forEach(item=>li.push(item)));
            displayTodo(li, "All Tasks");
            break;
        case "completed":
            displayTodo(completedList, "Completed Tasks");
            break;
        case "incomplete":
            displayTodo(list.filter(todo => !todo.check && Date.parse(todo.date) > Date.now()), "Upcoming Tasks");
            break;
        default:
            displayTodo(list);
            break;
    }
}

export {createTodo, editTodo, filterTodos, projectList, editProject}