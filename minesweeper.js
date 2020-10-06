document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true 
    }, 
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true  
    }, 
    {
      row: 0,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true 
    }, 
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true 
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true 
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true 
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true 
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true 
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true 
    }
  ]
}

function startGame() {
  
  for (var i = 0; i < board.cells.length; i++) {
    
    var currentCell = board.cells[i]
    
    currentCell.surroundingMines = countSurroundingMines(currentCell)

    document.addEventListener("click", checkForWin)
    document.addEventListener("contextmenu", checkForWin) 

  }
  console.log(currentCell) 

  lib.initBoard()
}


function checkForWin () {

  var currentCell = board.cells

  for (var i = 0; i < currentCell.length; i++) {

    if (currentCell[i].isMine == true && currentCell[i].isMarked == false) {

      return;
    }
    else if (currentCell[i].isMine == false && currentCell[i].isMarked == true) {

      return;
    }
    
  }
    lib.displayMessage('You win!')
}

function countSurroundingMines (cell) {

  var surroundingCells = getSurroundingCells(cell.row, cell.col)
  var count = 0

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++
    } 
  }
  return count
    
  
}
