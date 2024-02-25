var allDice = document.querySelectorAll(".dice img");
var winner = document.querySelector(".container h1");
var footerDate =document.getElementById("date");


var random = Math.floor(Math.random() * 6) ;
var firstDice;
if(random === 0){
     firstDice = allDice[0].setAttribute("src","./images/dice1.png");
}else if(random === 1) {
     firstDice = allDice[0].setAttribute("src","./images/dice2.png");
}else if(random === 2){
    firstDice = allDice[0].setAttribute("src","./images/dice3.png");
}else if(random === 3){
    firstDice = allDice[0].setAttribute("src","./images/dice4.png");
}else if(random === 4){
     firstDice = allDice[0].setAttribute("src","./images/dice5.png");
}else if(random === 5){
    firstDice = allDice[0].setAttribute("src","./images/dice6.png");
}

var random2 = Math.floor(Math.random() * 6) ;
var secondDice;
if(random2 === 0){
    secondDice = allDice[1].setAttribute("src","./images/dice1.png");
}else if(random2 === 1) {
     secondDice = allDice[1].setAttribute("src","./images/dice2.png");
}else if(random2 === 2){
    secondDice = allDice[1].setAttribute("src","./images/dice3.png");
}else if(random2 === 3){
    secondDice = allDice[1].setAttribute("src","./images/dice4.png");
}else if(random2 === 4){
    secondDice = allDice[1].setAttribute("src","./images/dice5.png");
}else if(random2 === 5){
     secondDice = allDice[1].setAttribute("src","./images/dice6.png");
}


if(random >  random2){
    winner.textContent = "🚩 Player One Wins!";
} else if (random < random2) {
    winner.textContent = "Player Two Wins! 🚩"
} else if (random === random2) {
    winner.textContent = "🚩 It's a Draw! 🚩";
}

function updatedYear (){
let date = new Date();
let year = date.getFullYear() + " ";
return document.getElementById("date").innerHTML = year;
}





