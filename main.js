const gameGrid = document.querySelector(".game-grid")

//creazione griglia
function gridsize (xCells, yCells) {

    //numero di celle da creare
    const cellsNumber = xCells * yCells;

    console.log(cellsNumber);

    for (let i = 0; i < cellsNumber; i++) {
        //creo la cella da inserire in html
        const cell = document.createElement("div");
        //assegno lo stile alla cella
        cell.classList.add("cell");
    
        gameGrid.append(cell);
    }

    //creo la cella da inserire in html
    // const cell = document.createElement("div");
    //assegno lo stile alla cella
    // cell.classList.add("cell");
    
    // gameGrid.append(cell);
}

gridsize(8, 8)