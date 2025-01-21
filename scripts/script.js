// function play(){
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");
    setTextElementValueById("current-life", 10);
    setTextElementValueById("current-score", 0);
    continueGame("");
}
document.addEventListener("keyup", handleKeyupEvent);

function handleKeyupEvent(event){
    const playerPressed = event.key;
    if(playerPressed === "Escape"){
        gameOver();
    }
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


if(playerPressed === expectedAlphabet){

    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    currentScore = getTextelementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    const currentLife = getTextelementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    if(newLife === 0){
        gameOver();
    }
    // if (currentLife => 0){
    //     const currenrLifeElement = document.getElementById("current-life");
    //     const currentLifeText = currenrLifeElement.innerText;
    //     const currentLife = parseInt(currentLifeText);
    //     const newLife = currentLife - 1;
    //     currenrLifeElement.innerText = newLife;
    //     }
    //     else{
    //         console.log("Game Over");
    //     }
}
}

function gameOver(){
    hideElementById("play-ground");
    showElementById("final-score");
    lastScore = getTextelementValueById("current-score");
    setTextElementValueById("last-score", lastScore);
    const currentAlphabet = getElementTextById("current-alphabet");
    removeBackgroundColorById(currentAlphabet);
}
