let size = 16;
let sizeContainer = 960;
let sizeSquare = sizeContainer / size;

function createNewGrid() {
  const container = document.querySelector(".container");
  container.style.width = sizeContainer + "px";
  container.style.height = sizeContainer + "px";

  for (let i = 0; i < size * size; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square")
    squareDiv.style.width = sizeSquare + "px";
    squareDiv.style.height = sizeSquare + "px";
    container.appendChild(squareDiv);
  };

  const squareDivs = document.querySelectorAll(".square");
  squareDivs.forEach((squareDiv) => {
    squareDiv.addEventListener("mouseover", () => {
      let red = Math.round(Math.random() * 256);
      let green = Math.round(Math.random() * 256);
      let blue = Math.round(Math.random() * 256);
      squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

function clearGrid() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
}

const btnCreate  = document.querySelector(".createNewGrid");
btnCreate.addEventListener("click", () => {
  let userSize;
  while (true) {
    userSize = prompt("Enter the number of squares per side (e.g. 16 for a 16x16 grid, max 100):");
    
    if (userSize === null) return;
    userSize = parseInt(userSize);

    if (!isNaN(userSize) && userSize > 0 && userSize <= 100) {
      break;
    } else {
      alert("Invalid input! Please enter a number between 1 and 100.");
    }
  }

  size = userSize;
  sizeSquare = sizeContainer / size;

  clearGrid();
  createNewGrid();
});

const btnReset = document.querySelector(".resetGrid");
btnReset.addEventListener("click", () => {
  clearGrid();
  createNewGrid();
})

createNewGrid()