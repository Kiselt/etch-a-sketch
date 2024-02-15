const gridContainer = document.querySelector("#grid-container");
// const gridTile = gridContainer.appendChild(document.createElement("div"));
// gridTile.setAttribute("class", "grid-tile");

const createGrid = () => {
  let resolution = prompt("Choose desired sketchpad resolution (max size = 100)", 16)
  let tilesQuantity = resolution * resolution;
  const sketchapadSize = 960;
  const calcTileSize = sketchapadSize / resolution;
  const tileSize = calcTileSize + "px"

  for (let tile = 0; tile < tilesQuantity; tile++) {
      const gridTile = gridContainer.appendChild(document.createElement("div"));
      gridTile.setAttribute("class", "grid-tile");
      gridTile.style.width = tileSize;
      gridTile.style.height = tileSize;
      
    }
  }

  createGrid()