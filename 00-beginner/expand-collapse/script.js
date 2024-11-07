const init = document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (!e.target.matches(".expand-button")) return;
    const card = e.target.closest(".card");
    const cardBody = card.querySelector(".card-body");
    cardBody.classList.toggle("show");
    if (e.target.innerHTML === "Expand") {
      e.target.innerHTML = "Collapse";
    } else {
      e.target.innerHTML = "Expand";
    }
  });
});
