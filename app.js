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

document.getElementById("reel1").innerHTML = symbols[0];
document.getElementById("reel2").innerHTML = symbols[2];
document.getElementById("reel3").innerHTML = symbols[1];
