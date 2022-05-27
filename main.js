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
    
        //inserisco le celle nel contenitore
        gameGrid.append(cell);
    }

    //do una dimensione al container per avere una griglia quadrata
    gameGrid.style.width = `calc(var(--cell-size) * ${xCells}`
}

gridsize(10, 10)