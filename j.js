const container = document.querySelector(".container");

function generateGrid(length) {
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.setAttribute(
      "style",
      "background-color: black; width: 50px; height: 50px; margin: 5px;",
    );
    container.appendChild(cell);
  }
}

generateGrid(16);
