const dropdownMenus = document.querySelectorAll(".dropdownButton");
for (let i = 0; i < dropdownMenus.length; i++){
    dropdownMenus[i].addEventListener("click", (e)=>{
        dropdownToggle(e.target.id);
    });
}

function dropdownToggle(menuID) {
    let contentID = menuID + "Items";
    document.getElementById(contentID).classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropdownButton')) {
        let dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
