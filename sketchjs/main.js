let board = document.querySelector('.board');
let chooseGrid = document.querySelector('.sizeBtn')
let resetBtn = document.querySelector('.resetBtn')
let changeClr = document.querySelector('.changeClr')
board.style.backgroundColor = "blue";
let userSize = 16
let squares = []

board.style.height = "500px"
board.style.width = "500px"

const generateGrid = () => {
  for (let i = 0; i < userSize * userSize; i++) {
    board.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
    let square = document.createElement('div');
    square.style.backgroundColor = "white";
    squares.push(square)
    board.appendChild(square);
    chooseClr(square)
    
  }
}

const chooseClr = (square, color = "blue") => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = color;
  });
}

chooseGrid.addEventListener('click', () => {
  let changeSize = prompt('How many squares per row')
  userSize = parseInt(changeSize)
  generateGrid();
})

resetBtn.addEventListener('click', () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
    
  });
})

changeClr.addEventListener('click', () => {
let userChoice = prompt("change color")
  squares.forEach((square) => {
    square.addEventListener('mouseover', () =>{
    square.style.backgroundColor = userChoice
    }
    )
    
    
  });
})

generateGrid();
