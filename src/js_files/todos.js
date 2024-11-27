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

    todoQuery.append(button,task,date,priority);
    return [todoQuery,id,button,task,date,priority];
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


