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

function getRandomIntUpTo255() {
    // 256 is multiplied since math.floor always rounds down, this will end up including 255.
    return Math.floor(Math.random() * 256);
}

function returnRGBValue () {
    return "rgb(" + getRandomIntUpTo255() + ", " + getRandomIntUpTo255() + ", " + getRandomIntUpTo255() + ")";
}

const squares = document.getElementById("container");
squares.addEventListener("mouseover", (event) => {
    event.target.style.background = returnRGBValue();
    }, false,
);

createGrid(16);