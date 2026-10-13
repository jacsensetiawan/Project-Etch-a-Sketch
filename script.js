const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
const newDiv = document.createElement("div");
newDiv.classList.add("grid-square");
container.appendChild(newDiv);
}

const squares = document.querySelectorAll(".grid-square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("hovered"); 
    });
});