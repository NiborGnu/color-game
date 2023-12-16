document.addEventListener('DOMContentLoaded', function () {

    let difficulty = document.getElementsByClassName('difficulty');
    let colorBoxes = document.getElementsByClassName('color-box');
    let h1Color = document.getElementById('h1-color');
    let right = document.getElementById('right');
    let startGameButton = document.getElementById('start-game');
    let header = document.querySelector('header');
    let resetButton = document.getElementById('reset');
    let gameColors = document.getElementsByClassName('game-colors');
    let rightCounterDisplay = document.getElementById('right-count');
    let wrongCounterDisplay = document.getElementById('wrong-count');


    // Initial game values
    let numColorBoxes = 9;
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
        setupDifficulty(); // Set up the difficulty mode buttons
        setupColorBoxes(); // Set up the color boxes for selection
        reset(); // Reset the game state
        resetButton.addEventListener("click", reset); // Add event listener for reset
    }

    /**
     * Generate a random RGB color 
     */
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    /**
     *  Choose a random color from the colors array
     */
    function chooseColor() {
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    /** 
     * Generate an array of random colors
     */
    function generateRandomColors(num) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    /** 
     * Change colors when correct color is selected
     */
    function changeColors(color) {
        Array.from(gameColors.children).forEach(function (colorBox) {
            colorBox.style.backgroundColor = color;
            header.style.backgroundColor = color;
        });
    }

    /**
     * Set up the color boxes for selection
     */
    function setupColorBoxes() {
        for (let i = 0; i < numColorBoxes; i++) {
            colorBoxes.addEventListener("click", function () {
                let clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    this.textContent = "Right Color"
                    rightCounterDisplay.textContent = "Right Answer";
                    changeColors(pickedColor);
                    rightCounter++;
                } else {
                    this.style.backgroundColor = "#550000";
                    this.textContent = "Try again";
                    wrongCounter++;
                }
            });
        }
    }

    /**
     *  Reset the game
     */
    function reset() {
        colors = generateRandomColors(numColorBoxes);
        pickedColor = chooseColor();
        console.log(pickedColor);
        h1Color.textContent = pickedColor;
        header.style.backgroundColor = "#500";
        resetButton.textContent = "New Colors";
        right.textContent = "";
        Array.from(gameColors.children).forEach(function (colorBox, index) {
            colorBox.style.backgroundColor = colors[index];
        });
    }

    /**
     * Set up the difficulty mode buttons
     */
    function setupDifficulty() {
        let difficultyButtons = document.getElementsByClassName('difficulty');
        Array.from(difficultyButtons).forEach(function (button) {
            button.addEventListener("click", function () {
                difficultyButtons.forEach(function (btn) {
                    btn.classList.remove("selected");
                });
                this.classList.add("selected");

                if (this.id === "easy") {
                    numColorBoxes = 3;
                } else if (this.id === "normal") {
                    numColorBoxes = 6;
                } else {
                    numColorBoxes = 9;
                }
                reset();
            });
        });
    }

    initializeGame();

});