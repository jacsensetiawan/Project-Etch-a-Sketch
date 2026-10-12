const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
container.classList.add("grid-square");
const newDiv = document.createElement("div");
container.appendChild(newDiv);

}