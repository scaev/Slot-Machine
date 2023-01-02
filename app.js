let reels = ["", "", ""], // array to hold the symbols for each reel
  symbols = ["🍌", "🍕", "🍾"], // array to hold the possible symbols
  playerMoney = 1000, // starting money for the player
  playerBet = 0, // current bet for the player
  winnings = 0, // current winnings for the player
  jackpot = 5000, // current jackpot amount
  spinResult; // result of the current spin

function init() {
  for (let i = 0; i < reels.length; i++) {
    reels[i] = "blank";
  }
  for (let i = 0; i < symbols.length; i++) {
    symbols[i] = symbols[i];
  }
}

function spin() {
  for (let i = 0; i < reels.length; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    reels[i] = symbols[randomIndex];
  }
  // Update the symbols on the reels in the HTML page
  document.getElementById("reel1").innerHTML = reels[0];
  document.getElementById("reel2").innerHTML = reels[1];
  document.getElementById("reel3").innerHTML = reels[2];
}

function determineWinnings() {
  if (reels[1] == reels[2] && reels[2] == reels[3]) {
    winnings = playerBet * 5;
  } else {
    winnings = 0;
  }
  playerMoney += winnings;
}

document.getElementById("spinButton").addEventListener("click", function () {
  playerBet = document.getElementById("betAmount");
  if (playerBet > playerMoney) {
    alert(
      "You do not have enough money to place that bet. Please enter a smaller amount."
    );
    return;
  }
  spin();
  determineWinnings();
  updateStatistics();
  alert("You won: $" + winnings);
  if (playerMoney == 0) {
    alert("You have run out of money!");
  }
});
