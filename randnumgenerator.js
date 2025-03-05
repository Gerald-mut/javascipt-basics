const myButton = document.getElementById("myButton"); 
const myLabel = document.getElementById("myLabel"); 
const max = 10;
const min = 5;

let randomNum;

myButton.onclick = function () {
    randomNum = (Math.floor(Math.random() * max) + min);
    myLabel.textContent = randomNum;
}
