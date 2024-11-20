import "../styles.css";
import {displayMenu, disableMenu} from "./menu";
let toggle = true;

const displayBoard = document.querySelector(".displayBoard");
const todoSection = document.querySelector(".todo-section");
let menuToggle = document.querySelector("nav div");

// let bttn = document.querySelector("button");

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

export {displayBoard,todoSection};
