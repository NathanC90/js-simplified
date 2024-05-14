const expandButtons = document.querySelectorAll(".expand-button")

expandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const currentHeader = e.target.closest(".card-header")
        const currentBody = currentHeader.nextElementSibling
        currentBody.classList.toggle("show")
    })
})