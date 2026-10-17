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

const resize = document.querySelector(".resize-button");

resize.addEventListener("click", () => {
    const answer = prompt("Enter a number to change the grid size (1–100):");
    const input = Number(answer);
    if (Number.isInteger(input) && input >= 1 && input <= 100){
        console.log("Validation success! The number is:", input);
    } else {
        console.log("Error: Input is not a valid number!");
    }
});