const menuOne = document.querySelector(".dropdownButton");
menuOne.addEventListener("click", dropdownToggle);

function dropdownToggle() {
    document.getElementById("menuOne").classList.toggle("show");
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
