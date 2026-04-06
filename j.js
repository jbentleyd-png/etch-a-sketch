const container = document.querySelector(".container");

function generateGrid(dimension) {
  container.replaceChildren(); //removes all previous children.
  let boxLength = 960 / dimension;
  for (let hDim = 0; hDim < dimension; hDim++) {
    for (let lDim = 0; lDim < dimension; lDim++) {
      const cell = document.createElement("div");
      cell.style.backgroundColor = "black";
      cell.style.boxSizing = "border-box";
      cell.style.border = "1px solid white";
      cell.style.borderColor = "white";
      cell.style.width = `${boxLength}px`;
      cell.style.height = `${boxLength}px`;
      container.appendChild(cell);
    }
  }
}
generateGrid(16); //initial size

const sizePromptButton = document.querySelector("#sizePromptButton");
sizePromptButton.addEventListener("click", () => {
  generateGrid(prompt("Enter a number 1 through 100"));
});
