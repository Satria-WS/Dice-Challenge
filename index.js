//Changlenge - project bangsat
/* 
function anak_bangsat() {
    for (var i = 0; i < document.querySelectorAll(".Hello-1").length; i++) {
        document.querySelectorAll(".Hello-1")[i].innerHTML = "anak bangsat";
    }
};
var value = Math.floor(Math.random() * 2);
let anak;
if(value === 0) {
   anak = false;
} else {
    anak = anak_bangsat();
}

 */

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function setAttribute() {
    /*     if (randomNumber1 === 1) {
          document.querySelectorAll(".img1")[0].src = "images/dice1.png";
      } else if (randomNumber1 === 2) {
          document.querySelectorAll(".img1")[0].src = "images/dice2.png";
      } else if (randomNumber1 === 3) {
          document.querySelectorAll(".img1")[0].src = "images/dice3.png";
      } else if (randomNumber1 === 4) {
          document.querySelectorAll(".img1")[0].src = "images/dice4.png";
      } else if (randomNumber1 === 5) {
          document.querySelectorAll(".img1")[0].src = "images/dice5.png";
      } else {
          document.querySelectorAll(".img1")[0].src = "images/dice6.png";
      } */

    document.querySelectorAll(".img1")[0].src = `images/dice${randomNumber1}.png`;
    document.querySelectorAll(".img2")[0].src = "images/dice" + randomNumber2 + ".png";

    //let player1 = (document.querySelector(".value1").innerHTML = randomNumber1);
    let player1 = randomNumber1;
    console.log(player1);
    //let player2 = (document.querySelector(".value2").innerHTML = randomNumber2);
    let player2 = randomNumber2;
    console.log(player2);
    
    let picture = "images/red-flag.png";

    if (player1 === player2) {
        document
            .getElementsByClassName("container")[0]
            .querySelector("h1").innerHTML = "Draw!";
        console.log(" You draw");
    } else if (player1 > player2) {
        document
          .getElementsByClassName("container")[0]
          .querySelector("h1").innerHTML = "🚩 player 1 wins! ";
        console.log("player1 win");
    } else if (player1 < player2) {
        document
          .getElementsByClassName("container")[0]
          .querySelector("h1").innerHTML = "player 2 wins! 🚩";
        console.log("player2 win");
    }
}

setAttribute();