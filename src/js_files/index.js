import "../styles.css";
import {displayMenu, disableMenu, setupMenu} from "./menu";
import {createTodo, editTodo} from "./todos";

let toggle = true;

const displayBoard = document.querySelector(".displayBoard");
const todoSection = document.querySelector(".todo-section");
let menuToggle = document.querySelector("nav div");

let bttn = document.querySelector("button");
bttn.addEventListener("click",()=>{
    createTodo();
});

document.addEventListener("change", (e)=>{
        if(e.target.classList.contains('todoElem')){
            editTodo(e.target);
        }
});

displayMenu();
menuToggle.addEventListener("click",()=>{
    toggle = !toggle;
    if(toggle){
        displayMenu();
    }
    else{
        disableMenu();
    }
});

setupMenu();
export {displayBoard,todoSection};
