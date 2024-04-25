const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size');
const text = document.querySelector('.text');


//Create the grid
let n = 16;
let grid = n;
for (let i = 0; i < grid; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for (let j = 0; j < grid; j++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        row.appendChild(square);
    }        
}

const square = document.getElementsByClassName('square');

function chooseSize(){
    num = prompt("Please enter a number between 1 to 100:");
    n = Number(num);  
    modificateSize();
    return n;
}

function modificateSize(){
    grid = n;
    removeChildren();
    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let j = 0; j < grid; j++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            row.appendChild(square);
        }        
    }
    updateText();
}

function removeChildren(){
    let rows = document.getElementsByClassName('row');
    let squares = document.getElementsByClassName('square');
    for (let j = rows.length-1; j >= 0; j--) {
        let square = squares[j];
        square.remove();
        let row = rows[j];
        row.remove();
    }
}

//Update the text below the grid:
function updateText(){
 text.textContent = `Grid size: ${n} x ${n} `;
}

//Change color and increasing opacity:
function changeColor(e){
        e.target.style.backgroundColor = 'black';
}

function increaseOpacity(e){
    let currentOpacity = e.target.style.opacity;
    if(currentOpacity <= 1){
        if(currentOpacity){
            e.target.style.opacity = Number(currentOpacity)+.1;
        }else{
            e.target.style.opacity = .1;
        }
    }
    
}

sizeButton.addEventListener("click", chooseSize);
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", changeColor);
    square[i].addEventListener("mouseenter", increaseOpacity);
    
}




