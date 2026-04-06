const container = document.querySelector(".container");

function generateGrid(length) {
  for (let h = 0; h < length; h++) {
    for (let l = 0; l < length; l++) {
      const cell = document.createElement("div");
      cell.setAttribute(
        "style",
        "background-color: black; width: 50px; height: 50px; margin: 5px;",
      );
      container.appendChild(cell);
    }
  }
}
generateGrid(12);
