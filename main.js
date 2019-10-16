window.onload = () => startPics();

document.querySelector("button").addEventListener("click", choosePic);
let imagePlaceholderList = document.querySelector(".raw");

const startPics = () => {
    let diceOne = getRandomIntInclusive(1,6);
    let diceTwo = getRandomIntInclusive(1,6);
    imagePlaceholderList.innerHTML = `<img src=${myPic[diceOne]} />`;
    imagePlaceholderList.innerHTML += `<img src=${myPic[diceTwo]} />`;
  }





const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
    return numberToGuess;
  };


let myPic = [
    "",
    "./pictures/dice-1.svg",
    "./pictures/dice-2.svg",
    "./pictures/dice-3.svg",
    "./pictures/dice-4.svg",
    "./pictures/dice-5.svg",
    "./pictures/dice-6.svg"
];

function choosePic() {
    startPics();
    
}




  