// 1. Retrieve all the elements we need
/*
list: #list
form: #new-item-form
input: #item-input
*/

const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");

// 2. Add the item to the list
// When form is submitted, the new item is added to the list
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // To add a new item to the list, we need to create a new element in the list div
  const item = document.createElement("div");
  item.innerText = input.value;
  // Use appendChild to add the new item to the list
  list.appendChild(item);
  // Add class to the new item
  item.classList.add("list-item");
  input.value = "";

  // 3. Remove the item by clicking the item itself
  item.addEventListener("click", () => {
    item.remove();
  });
});
