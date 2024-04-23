//Create the grid
const container = document.querySelector('#container');

let n = 16;
const grid = n * n;

for (let i = 0; i < grid; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
    
}






