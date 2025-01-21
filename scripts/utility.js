function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getRandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
    const alphabets = alphabetString.split("");
    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400")
}