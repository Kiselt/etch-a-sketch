const gridContainer = document.querySelector("#grid-container");
const resolutionBtn = document.querySelector("#resolution");

const createGrid = (resolution) => {
  let tilesQuantity = resolution * resolution;
  const sketchapadSize = 960;
  const calcTileSize = sketchapadSize / resolution;
  const tileSize = calcTileSize + "px";

  for (let tile = 0; tile < tilesQuantity; tile++) {
      const gridTile = gridContainer.appendChild(document.createElement("div"));
      gridTile.setAttribute("class", "grid-tile");
      gridTile.style.width = tileSize;
      gridTile.style.height = tileSize;
      
    }
  }

//Function for resolution change
resolutionBtn.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
    }
    const resolution = prompt("Choose desired sketchpad resolution (max size = 100)");
    createGrid(resolution);
});

createGrid(16);

  