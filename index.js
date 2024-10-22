const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// console.log(inputEl.checked);

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
updateLocalStore();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}
inputEl.addEventListener("input", () => {
  updateBody();
});
function updateLocalStore() {
  localStorage.getItem("mode", JSON.stringify(inputEl.checked));
}
