document.addEventListener('DOMContentLoaded', function () {

    let difficulty = document.getElementsByClassName('difficulty');
    let cubes = document.getElementsByClassName('color-box');
    let h1Color = document.getElementById('h1-color');
    let h1 = document.querySelector('h1');
    let right = document.getElementById('right');
    let startGameButton = document.getElementById('start-game');
    let resetButton = document.getElementById('reset');
    let gameColors = document.getElementsByClassName('game-colors');
    // let rightCounterDisplay = document.getElementById('right-count');
    // let wrongCounterDisplay = document.getElementById('wrong-count');


    // Initial game values
    let numCubes = 9;
    let colors = [];
    let pickedColor;
    let rightCounter = 0;
    let wrongCounter = 0;

    // Hide Game
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'none';

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
        h1Color.textContent = pickedColor; // Show picked color in header
        setupDifficulty(); // Set up the difficulty mode buttons
        setupCubes(); // Set up the cubes for selection
        reset(); // Reset the game state
        resetButton.addEventListener("click", reset);
    }

    /**
     * Generate a random RGB color 
     */
    function makeColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `RGB:(${r}, ${g}, ${b})`;
    }

    /** 
     * Generate an array of random colors
     */
    function genRandomColors(num) {
        let ar = [];
        for (let i = 0; i < num; i++) {
            ar.push(makeColor());
        }
        return ar;
    }

    /**
     *  Choose a random color from the colors array
     */
    function chooseColor() {
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    /** 
     * Change colors when correct color is selected
     */
    function changeColors(color) {
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].style.backgroundColor = color;
            gameColors[i].style.backgroundColor = color;
            h1.style.backgroundColor = color;
        }
    }

    /**
     * Set up the color boxes for selection
     */
    function setupCubes() {
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].style.backgroundColor = colors[i];
            cubes[i].addEventListener("click", function () {
                let clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    alert = "Right Color";
                    changeColors(pickedColor);
                    rightCounter += 1;
                    updateScore();
                } else {
                    this.style.backgroundColor = "#550000";
                    this.textContent = "Try again";
                    wrongCounter += 1;
                    updateScore();
                }
            });
        }
    }

    /**
     *  Reset the game
     */
    function reset() {
        colors = genRandomColors(numCubes);
        pickedColor = chooseColor();
        h1Color.textContent = pickedColor;
        h1.style.backgroundColor = "#500";
        right.textContent = "";
        for (let i = 0; i < cubes.length; i++) {
            if (colors[i]) {
                cubes[i].style.display = "block";
                cubes[i].style.backgroundColor = colors[i];
            } else {
                cubes[i].style.display = "none";
            }
        }
    }

    /**
     * Set up the difficulty mode buttons
     */
    function setupDifficulty() {
        for (let i = 0; i < difficulty.length; i++) {
            difficulty[i].addEventListener("click", function () {
                for (let i = 0; i < difficulty.length; i++) {
                    difficulty[i].classList.remove("selected");
                }
                this.classList.add("selected");
                if (this.textContent === "Easy") {
                    numCubes = 3;
                } else if (this.textContent === "Normal") {
                    numCubes = 6;
                } else {
                    numCubes = 9;
                }
                reset();
            });
        }
    }

    function updateScore() {
        document.getElementById('right-score').textContent = `Right: ${rightCounter}`;
        document.getElementById('wrong-score').textContent = `Wrong: ${wrongCounter}`;
    }

    initializeGame();

});

document.getElementById('rules').addEventListener('click', function rules() {
    alert("1. click 1 box to guess a color" + "\n" +
        "2. right color is displayed in header in rgb value" + "\n" +
        "3. 5 right and you win" + "\n" +
        "4. 10 fails and it's game over")
})