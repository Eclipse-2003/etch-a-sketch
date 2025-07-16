console.log("hello world!");
const containerSize = 800;
const container = document.querySelector("#container");

const resizeButton = document.querySelector("button")

resizeButton.addEventListener("click", () => {
    let gridValue = prompt("Enter a number for the amount of squares for both sides. (Max 100)", "ex. 16")
    if (Number.isInteger(gridValue) && gridValue >= 1 || gridValue <= 100) {
        removeGrid();
        createGrid(gridValue);
    }
    else {
        alert("Invalid Number, Please enter a valid number from 1-100");
    }
})

function createGrid (size) {
    for (let i = 0; i < (size*size); i ++) {
        const div = document.createElement("div");
        div.classList.add("squares");
        const squareSize = containerSize / size;
        div.style.cssText = "height: " + squareSize + "px; width: " + squareSize + "px;";
        container.appendChild(div);
    }
}

function removeGrid () {
    const sqaureRemoval = document.getElementById("container")
    while (sqaureRemoval.firstChild) {
        sqaureRemoval.removeChild(sqaureRemoval.firstChild);
    }

}

const squares = document.getElementById("container");
squares.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
    setTimeout(() => {
        // remove 500 delay commit once removed.
        event.target.style.backgroundColor = "";
    }, 500);
}, false,
);

createGrid(16);