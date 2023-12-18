/* jshint esversion:8 */
document.addEventListener('DOMContentLoaded', function () {

    const difficulty = document.getElementsByClassName('difficulty');
    const cubes = document.getElementsByClassName('color-box');
    const h1Color = document.getElementById('h1-color');
    const h1 = document.querySelector('.win-color');
    const startGameButton = document.getElementById('start-game');
    const resetButton = document.getElementById('reset');
    const message = document.getElementById('message');
    const hideGameHeader = document.getElementById('hide');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const welcomText = document.getElementById('welcome-text');

    // Initial game values
    let numCubes = 3;
    let colors = [];
    let answerCorrectColor;
    let rightCounter = 0;
    let wrongCounter = 0;

    /**
     * Hide Game
     */
    function buttonToStartGame() {
        welcomText.style.display = 'block';
        header.style.Width = "700px";
        header.style.backgroundColor = '#222';
        hideGameHeader.style.display = 'none';
        main.style.display = 'none';
    }

    /** 
     * Start Game Button 
     */
    startGameButton.addEventListener('click', function () {
        startGameButton.style.display = 'none';
        welcomText.style.display = 'none';
        header.style.backgroundColor = '#500';
        hideGameHeader.style.display = 'block';
        main.style.display = 'block';
    });

    /**
     * Initialize the game
     */
    function initializeGame() {
        h1Color.textContent = answerCorrectColor; // Show picked color in header
        setupDifficulty(); // Set up the difficulty mode buttons
        clickTheCubes(); // Set up the cubes for selection
        resetToNextRound(); // Reset to next round 
    }

    /**
     * Generate a random RGB color 
     */
    function makeAnswerColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    /** 
     * Generate an array of random colors
     */
    function generateArrayColors(num) {
        let initialArray = [];
        for (let i = 0; i < num; i++) {
            initialArray.push(makeAnswerColor());
        }
        return initialArray;
    }

    /**
     *  Choose a random color from the colors array
     */
    function chooseRandomColor() {
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    /** 
     * Change colors when correct color is selected
     */
    function changeColorsGivenCorrectAnswer(color) {
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].style.backgroundColor = color;
            h1.style.backgroundColor = color;
        }
    }

    /**
     * Set up the cubes for selection
     */
    function clickTheCubes() {
        for (let i = 0; i < cubes.length; i++) {
            cubes[i].style.backgroundColor = colors[i];
            cubes[i].addEventListener("click", function () {
                let clickedColor = this.style.backgroundColor;
                if (clickedColor === answerCorrectColor) {
                    changeColorsGivenCorrectAnswer(answerCorrectColor);
                    rightCounter++;
                    resetToNextRound();
                    if (rightCounter < 4) {
                        alert('Right Answer \nCan you get the next one too?');
                    } else if (rightCounter === 4) {
                        alert('Good job only 1 more!');
                    }
                } else {
                    this.style.backgroundColor = "#550000";
                    message.textContent = "Try Again";
                    wrongCounter++;
                }
                updateScore();
                winOrLoseGame();
            });
        }
    }

    /**
     * Uppdete the score when when guessing right/wrong
     */
    function updateScore() {
        document.getElementById('right-count').textContent = `Right: ${rightCounter}`;
        document.getElementById('wrong-count').textContent = `Wrong: ${wrongCounter}`;
    }

    function winOrLoseGame() {
        if (rightCounter === 5) {
            alert("Congratulations! You've won!");
            wrongCounter = 0;
            rightCounter = 0;
            startGameButton.style.display = 'block';
            buttonToStartGame();
            resetToNextRound();
        } else if (wrongCounter === 10) {
            alert("Game over! You've reached 10 wrong answers.");
            wrongCounter = 0;
            rightCounter = 0;
            startGameButton.style.display = 'block';
            buttonToStartGame();
            resetToNextRound();
        }
    }

    /**
     *  Reset the game
     */
    function resetToNextRound() {
        colors = generateArrayColors(numCubes);
        answerCorrectColor = chooseRandomColor();
        h1Color.textContent = answerCorrectColor;
        h1.style.backgroundColor = "#500";
        message.textContent = "";
        for (let i = 0; i < cubes.length; i++) {
            if (colors[i]) {
                cubes[i].style.display = "block";
                cubes[i].style.backgroundColor = colors[i];
            } else {
                cubes[i].style.display = "none";
            }
        }
        updateScore();
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
                message.textContent = "";
                if (this.textContent === "Easy") {
                    numCubes = 3;
                } else if (this.textContent === "Normal") {
                    numCubes = 6;
                } else {
                    numCubes = 9;
                }
                resetToNextRound();
            });
        }
    }

    /**
     * Reset Right/wrong counters and colors
     */
    function resetAll() {
        rightCounter = 0;
        wrongCounter = 0;
        resetToNextRound();
    }

    resetButton.addEventListener("click", resetAll);

    initializeGame();
    buttonToStartGame();

});

document.getElementById('rules').addEventListener('click', function rules() {
    alert("1. click 1 box to guess a color" + "\n" +
        "2. right color is displayed in header in rgb value" + "\n" +
        "3. 5 right and you win" + "\n" +
        "4. 10 fails and it's game over" + "\n" +
        "5. Reset Game will reset the right/wrong score");
});

let rules = document.getElementById('rules');
rules.addEventListener('mouseover', function rules() {
    this.style.backgroundColor = "#000";
    this.style.cursor = "pointer";
});

rules.addEventListener('mouseout', function rules() {
    this.style.backgroundColor = "";
});

let startGameButton = document.getElementById('start-game');
startGameButton.addEventListener('mouseover', function rules() {
    this.style.backgroundColor = "#000";
    this.style.cursor = "pointer";
});

startGameButton.addEventListener('mouseout', function rules() {
    this.style.backgroundColor = "";
});