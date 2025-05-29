const hamburgerIcon = document.querySelector(".hamburger-icon")
const dropdownMenu = document.querySelector(".dropdown-menu")

hamburgerIcon.addEventListener("click", (e) => {
    dropdownMenu.classList.toggle("show")
})


const cardsContent = document.querySelector(".cards")
const reviewsButton = document.querySelector("#reviewsButton")
const newContent = document.querySelector("#newContent")

reviewsButton.addEventListener("click", (e) => {
    cardsContent.style.display = "none"
    newContent.style.display = "block"
})


const logoImage = document.querySelector("#logo-image")

logoImage.addEventListener("click", (e) => {
    cardsContent.style.display = "block"
    newContent.style.display = "none"
})