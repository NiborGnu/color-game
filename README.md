# color-game

The Color Game is made to give people a chance to play a game and learn RGB values at the same time.

The site can be viewed on GitHub pages [here](https://niborgnu.github.io/color-game/)

![Responsive Mockup](documentation/all-devices-black.png)


---
---

### First Time Visitor Goals:
* As a First Time visitor, I want to easily understand the main purpose of the site, so I can learn more about the content.
* As a First Time visitor, I want to find out about how to play the game.
* As a First Time Visitor, I want to be able to easily navigate through the website.
* As a First Time Visitor, I want to be able to go to social platforms directly from the site.
* As a First Time Visitor, I want to be able to learn the rules.

### Returning Visitor Goals
* As a Returning Visitor, I want to be able to play different difficulties.

---

## Features

### Existing Features

+ #### Start Game Button
    - Positioned in the Header Below the Welcome Text
    - A button to hide the start screen and show the game
    
    ![Start Button](documentation/start-game-button.png)


+ #### Game Board
    - Title with the text Guess the Color in
    - RGB value of the color you need to find
    ![Right Answer in RGB value](documentation/right-answer.png)
    - Menu bar
        * Reset Game - Resets the game colors and the right/wrong counter
        * Easy - Easy level showing 3 cubes of color randomly generated from an array to choose from
        * Normal - Normal level showing 6 cubes of color randomly generated from an array to choose from
        * Hard - Hard  level showing 9 cubes of color randomly generated from an array to choose from
        ![Menu row](documentation/menu-row.png)
    - Right/wrong counter and a message if the player chooses the wrong color
    ![Score Counter](documentation/right-wrong-counter.png)

+ #### Color to choose from
    - 3-9 cubes of randomly generated colors to choose from
    ![Game board colors](documentation/random-colors.png)

+ #### Rules button 
    - A button to show the rules in a popup message
    ![Rules Button](documentation/rules-button.png)
    ![Rules pop up](documentation/rules-button-pop-up.png)

+ #### Footer 
    - Text: Made by Robin Ung (author). Have fun and play!
    ![Footer](documentation/footer.png)

---

### Feature Improvements
    
+ #### Impliment a HEX alternative to choose from instead of RGB

---

## Flowchart

The flowchart represents the logic of the application:

  ![Miro Page](documentation/color-game-flowchart.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/) - was used to add the styles and layout of the site.
- [JS](https://www.w3schools.com/js/) - was used to add interactivity to the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items symmetrically on the pages.
- [Miro](https://miro.com/) - was used to make a flowchart for functions.
- [Favicon](https://icons8.com/icons/set/witch) was used to add an icon in the tab.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [Photoshop](https://www.adobe.com/products/photoshop.html) was used to resize images for the README file.


---

## Design

### Color Scheme

![Color pallet](documentation/color-pallet.png) 

- Eerie Black color was used because it is often correlated with elegance, sophistication, and depth. 

- Rosewood color was used because of its association with strength, open-mindedness, and receptivity.

- Black Bean color was used because it's bold and earthy.

- White color was used to lighten the website by symbolizing purity and innocence. 

---

## Testing

## Validator testing
+ ### HTML
    - No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
    
    ![HTML Validator](documentation/html-checker.png)

+ ### CSS
    - No errors were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator. 1 warning was found 

    ![CSS Validator](documentation/css-checker.png)

+ ### JS
    - No errors were found when passing through the official [JSHint](https://jshint.com/) validator 
    - Warnings(2) that "functions declared within loops may lead to confusing semantics" but nothing that will interfere with code
    - Code was tested on different platforms and by different users, and no issues were happening

    ![JS Validator](documentation/js-checker.png)

---

### Compatibility And Responsiveness

In order to confirm the correct functionality and appearance:


+ #### The website was tested on the following browsers: Chrome, Firefox, Edge

    - Chrome I tested playing the game on different levels and made sure all buttons worked. No errors

    ![Chrome](documentation/chrome-test.png)

    - Firefox I tested playing the game on different levels and made sure all buttons worked. No errors

    ![Firefox](documentation/firefox-test.png)

    - Edge I tested playing the game on different levels and made sure all buttons worked. No errors

    ![Edge](documentation/edge-test.png)

---

+ #### Tested responsiveness with Responsive Viewer

![Responsiveness](documentation/responsiveness.png)


+ ## LightHouse report

    - Using lighthouse in dev tools I confirmed that the website is performing well, accessible, and the colors and fonts chosen are readable.

    ![Lighthouse](documentation/lighthouse.png)

---

## Bugs

+ ### Solved bugs
    1. When I tested the site I discovered the color-box was not working.
    - I discovered this was because I had put a ":" in the line "return `rgb(${r}, ${g}, ${b})`" between "b" and "(". Removing the ":" fixed the problem.

    2. Right/Wrong score did not update before alert.
    - Add a setTimeout to winOrLoseGame and now the Right/Wrong score updates before alert.

+ ### Unfixed Bugs
    - No unfixed bugs

---

## Deployment

### Deployment to GitHub Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/NiborGnu/color-game), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://niborgnu.github.io/color-game/)

### Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/NiborGnu/color-game.git`

- Alternatively, if you use Gitpod, you can [click here](https://gitpod.io/#https://github.com/NiborGnu/color-game.git), which will start the Gitpod workspace for you.

---

### Credits
+ #### Content 
    - The inspiration to make the Game comes from [Michelle Huang](https://codepen.io/itsmhuang/pen/oxaReK). However, I did do all the coding myself and did not copy any line directly.

+ #### Inspiration

    * [Code Institute](https://codeinstitute.net/) - For the training and classes in all the basics of HTML, CSS and JS
    
    * [JavaScript Mastery](https://www.youtube.com/c/javascriptmastery) - For awesome JS tutorials