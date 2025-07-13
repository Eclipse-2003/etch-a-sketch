console.log("hello world!");
const containerSize = 800;
const container = document.querySelector("#container");


for (let i = 0; i < 256; i ++) {
    const div = document.createElement("div");
    div.classList.add("squares");
    const squareSize = containerSize / 16;
    div.style.cssText = "background: red; height: " + squareSize + "px; width: " + squareSize + "px;";
    container.appendChild(div);
}
const squares = document.getElementById("container");
squares.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
    setTimeout(() => {
        event.target.style.backgroundColor = "";
    }, 500);
}, false,
);