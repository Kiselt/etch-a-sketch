const gridContainer = document.querySelector("#grid-container");
const resolutionBtn = document.querySelector("#resolution");
const randomColorBtn = document.querySelector("#random-color");

const createGrid = (resolution) => {
  let tilesQuantity = resolution ** 2;
  const sketchapadSize = 960;
  const calcTileSize = sketchapadSize / resolution;
  const tileSize = calcTileSize + "px";

  for (let tile = 0; tile < tilesQuantity; tile++) {
      const gridTile = gridContainer.appendChild(document.createElement("div"));
      gridTile.setAttribute("class", "grid-tile");
      gridTile.style.width = tileSize;
      gridTile.style.height = tileSize;
    }
    const tilesArray = Array.from(gridContainer.childNodes);
    tilesArray.forEach(element => {
    element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black"
      });
    });

    function randomInteger(max) {
      return Math.floor(Math.random()*(max + 1));
    }

    function randomNumber() {
      return Math.random().toFixed(2);
    }
  
    function randomRgbColor() {
      let r = randomInteger(255);
      let g = randomInteger(255);
      let b = randomInteger(255);
      let a = randomNumber(1);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    
    randomColorBtn.addEventListener("click", () => {
      tilesArray.forEach(element => {
      element.addEventListener("mouseover", () => {
      element.style.backgroundColor = randomRgbColor()
      console.log(randomRgbColor())
      });
    });
  });

//Function for grid resolution change
resolutionBtn.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
    }
    const resolution = prompt("Choose desired sketchpad resolution (max size = 100)");
    createGrid(resolution);
});
}
createGrid(16);