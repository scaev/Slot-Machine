let reels = ["", "", ""], // array to hold the symbols for each reel
  symbols = ["🍌", "🍕", "🍾", "👻"], // array to hold the possible symbol
  playerMoney = 1000, // starting money for the player
  playerBet = 0, // current bet for the player
  winnings = 0; // current winnings for the player
negative = new Audio("sounds/negative.mp3");
coin = new Audio("sounds/coin.mp3");

// Spin the reels and determine the result
function spin() {
  for (let i = 0; i < reels.length; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    reels[i] = symbols[randomIndex];
  }
  $("#reel1").html(reels[0]);
  $("#reel2").html(reels[1]);
  $("#reel3").html(reels[2]);
}

// Check if the player has won and update the winnings and player money accordingly
function determineWinnings() {
  let betInput = document.getElementById("betInput");
  let playerBet = betInput.valueAsNumber;
  if (reels[0] == reels[1] && reels[1] == reels[2]) {
    winnings = playerBet * 10;
    playerMoney = playerMoney + winnings;
    // document.getElementById("result").innerHTML = "YOU WON";
    // document.getElementById("result").style.background = "#75f56e";
    $(result).html("YOU WON");
    $(result).css({ background: "#75f56e" });
    coin.play();
  } else {
    winnings = 0;
    playerMoney = playerMoney - playerBet;
    // document.getElementById("result").innerHTML = "YOU LOST";
    // document.getElementById("result").style.background = "#70231F";
    $("#result").html("YOU LOST");
    $("#result").css({ background: "#70231F" });
    negative.play();
  }
  // document.getElementById("money").innerHTML = `Money: $${playerMoney}`;
  // document.getElementById("winnings").innerHTML = `Winnings: $${winnings}`;
  $("#money").html(`Money: $${playerMoney}`);
  $("#winnings").html(`Winnings: $${winnings}`);
}

// Add event listener for the mute button
document.getElementById("muteSound").addEventListener("click", function () {
  if ((document.getElementById("muteSound").innerHTML = "🔊")) {
    // document.getElementById("muteSound").innerHTML = "🔇";
    $(muteSound).html("🔇");
    negative.muted = true;
    coin.muted = true;
  }
  document.getElementById("muteSound").addEventListener("click", function () {
    if ((document.getElementById("muteSound").innerHTML = "🔇")) {
      // document.getElementById("muteSound").innerHTML = "🔊";
      $(muteSound).html("🔊");
      negative.muted = false;
      coin.muted = false;
    }
  });
});

// Add event listener for the spin button
$(spinButton).click(function () {
  let betInput = document.getElementById("betInput");
  let playerBet = betInput.valueAsNumber;
  // Check if the player has run out of money
  if (playerMoney <= 0) {
    alert("You have run out of money!");
    return;
  }
  if (isNaN(playerBet)) {
    alert("Please enter your bet.");
    return;
  }
  if (playerBet > playerMoney) {
    alert(
      "You do not have enough money to place that bet. Please enter a smaller amount."
    );
    return;
  }
  spin();

  determineWinnings();
  // startingMoney.style.display = "none";
  $(startingMoney).hide();
});
