// Header
let h1Color = document.getElementById('h1-color');

// Menu
let reset = document.getElementById('reset');
let easy = document.getElementsByClassName('easy');
let normal = document.getElementsByClassName('normal');
let hard = document.getElementsByClassName('hard');
let difficulty = document.getElementsByClassName('difficulty');

// Initial game values
const numColorBoxes = 9;
let colors = [];
let pickedColor;

// Game-color
let gameColors = document.getElementsByClassName('game-colors');
let colorBoxes = document.getElementsByClassName('color-box');

// Hide Game
document.querySelector('header').style.display = 'none';
document.querySelector('main').style.display = 'none';

let startGameButton = document.getElementById('start-game');
/** 
 * Start Game Button 
 */
startGameButton.addEventListener('click', function () {
    startGameButton.style.display = 'none';

    document.querySelector('header').style.display = 'block';
    document.querySelector('main').style.display = 'block';
});

/**
 * Initialize the game
 */
function initializeGame() {
    setupdifficulty(); // Set up the difficulty mode buttons
    setupColorBoxes(); // Set up the color boxes for selection
    reset(); // Reset the game state
    reset.addEventListener("click", reset); // Add event listener for reset
}

/**
 *  Choose a random color from the colors array
 */
function chooseColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

/** 
 * Generate an array of random colors
 */
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

/**
 * Generate a random RGB color 
 */
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}