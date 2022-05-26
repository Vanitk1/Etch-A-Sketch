const container = document.querySelector(".grid")
const clearButton = document.querySelector('.clear');
const rainbowButton = document.querySelector('.rainbow');
const activate = document.querySelector('.activate');
let active = false;

function createGrid (gridSize = 16) {
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let fill = document.createElement("div");
    fill.classList.add('colour');
    fill.addEventListener('mouseover', () => colorGrid(fill));
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, 2fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, 2fr)`);
    container.appendChild(fill);
}
}

createGrid(16,16);

function clear(amount = 16) {
  container.innerHTML = '';
  amount = Number(prompt('How many squares would you like? (1 -100)', ''));
  if(amount > 100) {
    alert('Too Many Squares! Try Again.');
  } else if (amount <= 0) {
    amount = 16;
  }
  createGrid(amount, amount)
}

function colorGrid(fill) {
  let colour1 = Math.floor(Math.random() * 256);
  let colour2 = Math.floor(Math.random() * 256);
  let colour3 = Math.floor(Math.random() * 256);
  if(active) {
    fill.classList.remove('black');
    fill.style.setProperty('background-color', `rgb(${colour1},${colour2},${colour3})`);
  } else {
    fill.classList.add('black');
  }
}

function rainbow() {
  activate.classList.toggle('green');
  active = !active;
  console.log(activate);
}

clearButton.addEventListener('click', clear);
rainbowButton.addEventListener('click', rainbow);

