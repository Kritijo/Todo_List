import "../styles.css";
import {displayMenu, disableMenu, setupMenu} from "./menu";
import {createTodo, editTodo} from "./todos";

let toggle = true;
let menuVisible = true; 

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

const checkScreenSize = () => {
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    if (isSmallScreen) {
        disableMenu();
        menuVisible = false;
    } else if(!menuVisible){
        displayMenu();
        menuVisible = true;
    }
};

window.addEventListener('resize', checkScreenSize);

displayMenu();
menuToggle.addEventListener("click",()=>{
    toggle = !toggle;
    if(toggle){
        displayMenu();
        setupMenu();
    }
    else{
        disableMenu();
    }
});

setupMenu();
export {displayBoard,todoSection};
