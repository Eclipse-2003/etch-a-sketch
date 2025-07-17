// set containerSize to match px width
const containerSize = 800;
const container = document.querySelector("#container");

const resizeButton = document.querySelector("button")

resizeButton.addEventListener("click", () => {
    let gridValue = prompt("Enter a number for the amount of squares for both sides. (Max 100)", "ex. 16")
    if (gridValue != null) {
        if (gridValue >= 1 && gridValue <= 100) {
            removeGrid();
            createGrid(gridValue);
        }
        else {
            alert("Invalid Number, Please enter a valid number from 1-100");
        }
    }
})

function createGrid (size) {
    // multiple size by size to get total amount of squares for grid
    for (let i = 0; i < (size*size); i ++) {
        const div = document.createElement("div");
        div.classList.add("squares");
        // divide grid window by size input, this ensures the sqaures exactly fit on one row and flex wrap does the rest
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
    // on rare occasion touching edge of container causes it to apply random rainbow RGB, set to solid white each time.
    squares.style.cssText = "background: rgb(255,255,255);"
    }, false,
);

// create a grid to start with default value of 16
createGrid(16);