// const expandButtons = document.querySelectorAll(".expand-button")

// expandButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         let currentButton = e.target
//         if(currentButton.innerHTML === "Expand") {
//             currentButton.innerHTML = "Collapse"
//         } else {
//             currentButton.innerHTML = "Expand"
//         }
//         const currentHeader = e.target.closest(".card-header")
//         const currentBody = currentHeader.nextElementSibling
//         currentBody.classList.toggle("show")
//     })
// })

document.addEventListener("click", e => {
    if(!e.target.matches(".expand-button")) return

    const card = e.target.closest(".card")
    const cardBody = card.querySelector(".card-body")

    cardBody.classList.toggle("show")

    if(e.target.innerText === "Expand") {
        e.target.innerText = "Collapse"
    } else {
        e.target.innerText = "Expand"
    }
})