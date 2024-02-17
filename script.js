const gridContainer = document.querySelector("#grid-container");
const resolutionBtn = document.querySelector("#resolution");
const randomColorBtn = document.querySelector("#random-color");
const clearBtn = document.querySelector("#clear-sketch");

const createGrid = (resolution) => {
  let tilesQuantity = resolution ** 2;
  const sketchapadSize = 800;
  const calcTileSize = sketchapadSize / resolution;
  const tileSize = calcTileSize + "px";

  for (let tile = 0; tile < tilesQuantity; tile++) {
      const gridTile = document.createElement("div");
      gridTile.setAttribute("class", "grid-tile");
      gridTile.style.width = tileSize;
      gridTile.style.height = tileSize;

      gridTile.addEventListener("mouseover", () => {
      gridTile.style.backgroundColor = "black";
        });

        randomColorBtn.addEventListener("click", () => {
          gridTile.addEventListener("mouseover", () => {
            gridTile.style.backgroundColor = randomRgbColor()
            //console.log(randomRgbColor())
          });
        });
        gridContainer.appendChild(gridTile);
      }
    }

    function randomInteger(max) {
      return Math.floor(Math.random()*(max + 1));
    }
  
    function randomRgbColor() {
      let r = randomInteger(255);
      let g = randomInteger(255);
      let b = randomInteger(255);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function clearSketchpad() {
      let gridTile = document.getElementById("grid-container").childNodes;
      gridTile.forEach(element => {
        element.style.backgroundColor = "white";
      });
    }

  // Immediately create the deafult grid on load
  document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
  });

//Function for grid resolution change
resolutionBtn.addEventListener("click", () => {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
    }
    const resolution = prompt("Choose desired sketchpad resolution (max size = 100)");
    createGrid(resolution);
});

clearBtn.addEventListener("click", clearSketchpad);