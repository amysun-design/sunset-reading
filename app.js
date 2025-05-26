// need help with the following: email address validation, selecting logo takes you to default/home page, "Reviews" changes middle content without switching to another html, and selecting hamburger menu opens dropdown menu

const hamburgerIcon = document.querySelector("#hamburger-icon")
const dropdownMenu = document.querySelector(".dropdown-menu")

hamburgerIcon.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    }
    else {dropdownMenu.style.display ="block"}
})