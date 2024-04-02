"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct answer";

document.querySelector(".number").textContent = 12;

document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;

console.log((document.querySelector(".guess").value = 23));
 
*/
// HANDLING CLICK EVENTS
var SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(" ❌ No number!");
    // document.querySelector(".message").textContent = " ❌ No number";

    // When player wins
  } else if (guess === SecretNumber) {
    // document.querySelector(".message").textContent = " 🎉 correct Number";
    displayMessage(" 🎉 correct Number");

    document.querySelector(".number").textContent = SecretNumber;
    // guess the correct number change the background
    document.querySelector("body").style.backgroundColor = "#60b347";

    // guess the correct numberadd more space in guess box
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When guess is too high
  } else if (guess !== SecretNumber) {
    if (score > 0) {
      // document.querySelector(".message").textContent =
      displayMessage(guess > SecretNumber ? "📈 To High!" : "📉 To low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lose the game!");
      // document.querySelector(".message").textContent = "💥 You lose the game!";
    }

    // When guess is too low
  }

  // else if (guess > SecretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📈 To High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lose the game!";
  //   }

  // When guess is too low
  // }
  //  else if (guess < SecretNumber) {
  // if (score > 0) {
  //   document.querySelector(".message").textContent = "📉 To low";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // } else {
  //   document.querySelector(".message").textContent = "💥 You lose the game!";
  // }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15 rem)
GOOD LUCK
*/
