let reels = ["", "", ""], // array to hold the symbols for each reel
  symbols = ["🍌", "🍕", "🍾", "👻"], // array to hold the possible symbols
  playerMoney = 1000, // starting money for the player
  playerBet = 0, // current bet for the player
  winnings = 0, // current winnings for the player
  spinResult; // result of the current spin

function init() {
  for (let i = 0; i < reels.length; i++) {
    reels[i] = "";
  }
}
// Spin the reels and determine the result
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
// Check if the player has won and update the winnings and player money accordingly
function determineWinnings() {
  let betInput = document.getElementById("betInput");
  let playerBet = betInput.valueAsNumber;
  if (reels[0] == reels[1] && reels[1] == reels[2]) {
    winnings = playerBet * 10;
    playerMoney = playerMoney + winnings;
    document.getElementById("result").innerHTML = "YOU WON";
    document.getElementById("money").innerHTML = `Money: $${playerMoney}`;
    document.getElementById("winnings").innerHTML = `Winnings: $${winnings}`;
  } else {
    winnings = 0;
    playerMoney = playerMoney - playerBet;
    document.getElementById("result").innerHTML = "YOU LOST";
    document.getElementById("money").innerHTML = `Money: $${playerMoney}`;
  }
}

// I shouldn't repeat my code. I need to find a solution
// Add event listener for the spin button
document.getElementById("spinButton").addEventListener("click", function () {
  let betInput = document.getElementById("betInput");
  let playerBet = betInput.valueAsNumber;
  if (playerBet > playerMoney) {
    alert(
      "You do not have enough money to place that bet. Please enter a smaller amount."
    );
    return;
  }
  spin();
  determineWinnings();
  // Check if the player has run out of money
  if (playerMoney <= 0) {
    alert("You have run out of money!");
  }
});
init();
