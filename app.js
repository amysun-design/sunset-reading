// Hamburger menu dropdown

const hamburgerIcon = document.querySelector(".hamburger-icon")
const dropdownMenu = document.querySelector(".dropdown-menu")

hamburgerIcon.addEventListener("click", (e) => {
    dropdownMenu.classList.toggle("show")
})


// "Reviews" page

const cardsContent = document.querySelector(".cards")
const reviewsButton = document.querySelector("#reviewsButton")
const newContent = document.querySelector("#newContent")

reviewsButton.addEventListener("click", (e) => {
    cardsContent.style.display = "none"
    newContent.style.display = "block"
})


// Logo takes user back to main page

const logoImage = document.querySelector("#logo-image")

logoImage.addEventListener("click", (e) => {
    cardsContent.style.display = "flex"
    newContent.style.display = "none"
})