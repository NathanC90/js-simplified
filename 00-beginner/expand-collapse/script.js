const expandButtons = document.querySelectorAll(".expand-button")

expandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let currentButton = e.target
        if(currentButton.innerHTML === "Expand") {
            currentButton.innerHTML = "Collapse"
        } else {
            currentButton.innerHTML = "Expand"
        }
        const currentHeader = e.target.closest(".card-header")
        const currentBody = currentHeader.nextElementSibling
        currentBody.classList.toggle("show")
    })
})