// Author: Daniel Morua
// Source: https://github.com/DaanMoura/game-of-life/blob/main/sketch.js

const WIDTH = 1200;
const HEIGHT = 800;
const SIZE = 20;
const X = WIDTH/SIZE;
const Y = HEIGHT/SIZE;
let board = [];
let playButton;
let clearButton;

function setup() {
    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas-container');
    noLoop()
    
    playButton = createButton('play');
    playButton.mousePressed(toggle);
    playButton.parent('buttons');
    
    clearButton = createButton('clear');
    clearButton.mousePressed(clearBoard);
    clearButton.parent('buttons');

    frameRate(5);

    clearBoard();
}

function getNeighbors(x,y) {
    let count = 0;
    if (board[X*(y-1) + (x-1)]) { count++; }
    if (board[X*(y-1) + (x  )]) { count++; }
    if (board[X*(y-1) + (x+1)]) { count++; }
    if (board[X*(y  ) + (x-1)]) { count++; }
    if (board[X*(y  ) + (x+1)]) { count++; }
    if (board[X*(y+1) + (x-1)]) { count++; }
    if (board[X*(y+1) + (x  )]) { count++; }
    if (board[X*(y+1) + (x+1)]) { count++; }
    return count
}

function draw() {
    stroke(100);
    for (let x = 0; x < X; x++) {
        for (let y = 0; y < Y; y++) {
            c = board[X*y + x] ? color(255, 255, 255) : color(0,0,0);
            square(SIZE * x, SIZE * (y - 1), SIZE);
            fill(c);
        }
    }

    if (isLooping()) {
        const nextBoard = [...board]
        for (let x = 0; x < X; x++) {
            for (let y = 0; y < Y; y++) {
                const neighbors = getNeighbors(x,y)
                if (board[X*y + x]) {
                    if (neighbors < 2) { nextBoard[X*y + x] = 0 }
                    else if (neighbors > 3) { nextBoard[X*y + x] = 0 }
                } else {
                    if (neighbors === 3) { nextBoard[X*y + x] = 1 }
                }
            }
        }
        board = [...nextBoard]
    }
}

function toggle() {
    if (isLooping()) {
        playButton.html('play')
        noLoop()
    }  else {
        playButton.html('stop')
        loop()
    }
}

function clearBoard() {
    for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
            board[X*y + x] = 0;
        }
    }
}

function mouseClicked () {
    const x = Math.floor(mouseX / SIZE);
    const y = Math.floor(mouseY / SIZE);
    board[X*y + x] = !board[X*y + x];
    redraw() ;
}
