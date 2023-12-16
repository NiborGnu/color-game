// Setting up all class/id 
// Header
let h1Color = document.getElementById('h1-color');

// Menu
let reset = document.getElementById('reset');
let easy = document.getElementsByClassName('easy');
let normal = document.getElementsByClassName('normal');
let hard = document.getElementsByClassName('hard');
let difficulty = document.getElementsByClassName('difficulty');

// Game-color
let gameColors = document.getElementsByClassName('game-colors');
let colorBox = document.getElementsByClassName('color-box');

// Start Game button
let startGameButton = document.getElementById('start-game');

// Hide Game
document.querySelector('header').style.display = 'none';
document.querySelector('main').style.display = 'none';

//** Function Start GameButton */ 
startGameButton.addEventListener('click', function () {
    startGameButton.style.display = 'none';

    document.querySelector('header').style.display = 'block';
    document.querySelector('main').style.display = 'block';
});