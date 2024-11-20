let menu = document.querySelector(".menu");

export function displayMenu(){
    menu.className = "menu";
    let arr = ["All tasks", "Completed", "Upcoming", "Projects"];

    for(let i=0; i<4; i++){
        let menuItems = document.createElement("div");
        menuItems.className = "menu-items";
        menuItems.textContent = arr[i];
        menu.append(menuItems);
    }
}

export function disableMenu(){
    menu.textContent = '';
    menu.classList.remove("menu");
}