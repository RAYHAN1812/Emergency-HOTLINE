let coinSpan = document.querySelectorAll(".flex.items-center.font-bold")[1].querySelector("span");
let coins = parseInt(coinSpan.textContent);

document.querySelectorAll(".call").forEach(function(button) {
  button.addEventListener("click", function() {
    if (coins < 20) {
      alert("You need at least 20 coins to make a call!");
      return;
    }