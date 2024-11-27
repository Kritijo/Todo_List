import {displayBoard} from "./index.js"
import { filterTodos } from "./todos.js";

let menu = document.querySelector(".menu");

export function displayMenu(){
    menu.className = "menu";
    displayBoard.style.gridTemplateColumns = "30vw 1fr"
    let arr = ["All tasks", "Completed", "Upcoming", "Projects"];
    let classes = ["all-tasks", "completed-tasks", "incomplete-tasks"]

    for(let i=0; i<4; i++){
        let menuItems = document.createElement("div");
        menuItems.classList.add("menu-items", `${classes[i]}`);
        menuItems.textContent = arr[i];
        menu.append(menuItems);
    }
}

export function disableMenu(){
    menu.textContent = '';
    displayBoard.style.gridTemplateColumns = "1fr"
    menu.classList.remove("menu");
}

export function setupMenu() {
    const allTasksButton = document.querySelector(".all-tasks");
    const completedTasksButton = document.querySelector(".completed-tasks");
    const incompleteTasksButton = document.querySelector(".incomplete-tasks");

    allTasksButton.addEventListener("click", () => filterTodos("all"));
    completedTasksButton.addEventListener("click", () => filterTodos("completed"));
    incompleteTasksButton.addEventListener("click", () => filterTodos("incomplete"));
};