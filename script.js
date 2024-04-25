const container = document.querySelector('#container');
const sizeButton = document.querySelector('#size');


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

/*const square = document.querySelector('.square');
container.appendChild(square);        
*/

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


sizeButton.addEventListener("click", chooseSize);




