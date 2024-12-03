import {displayBoard} from "./index.js"
import {filterTodos} from "./todos.js";

const menu = document.querySelector(".menu");
let projectList = [];

function displayMenu(){
    menu.className = "menu";
    displayBoard.style.gridTemplateColumns = "30vw 1fr"
    let arr = ["All tasks", "Completed", "Upcoming", "Projects"];
    let classes = ["all-tasks", "completed-tasks", "incomplete-tasks", "project"]

    for(let i=0; i<4; i++){
        let menuItems = document.createElement("div");
        menuItems.classList.add("menu-items", `${classes[i]}`);
        menuItems.textContent = arr[i];
        menu.append(menuItems);
    }

    if(projectList.length != 0){
            displayProjects();
    }
}

function displayProjects(){
    const existingProjects = document.querySelectorAll(".project-items");
    existingProjects.forEach(project => project.remove());

    projectList.forEach(project=>{
        let projects = document.createElement("div");
        projects.classList.add("menu-items","project-items");
        projects.textContent = project.name;
        menu.append(projects);
    })
}

function disableMenu(){
    menu.textContent = '';
    displayBoard.style.gridTemplateColumns = "1fr"
    menu.classList.remove("menu");
}

function setupMenu() {
    const allTasksButton = document.querySelector(".all-tasks");
    const completedTasksButton = document.querySelector(".completed-tasks");
    const incompleteTasksButton = document.querySelector(".incomplete-tasks");
    const newProject = document.querySelector(".project");

    allTasksButton.addEventListener("click", () => filterTodos("all"));
    completedTasksButton.addEventListener("click", () => filterTodos("completed"));
    incompleteTasksButton.addEventListener("click", () => filterTodos("incomplete"));
    newProject.addEventListener("click", ()=>{
        let projectName = document.createElement("input");
        projectName.classList.add("menu-items","project-items");
        menu.append(projectName);
        projectName.focus();
        projectName.onchange = ()=> {
            projectList.push({"name" : projectName.value, "todo" : []});
            displayProjects();
        }
    });
};

export {setupMenu,disableMenu,displayMenu,projectList};