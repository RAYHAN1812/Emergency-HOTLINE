let coinSpan = document.querySelectorAll(".flex.items-center.font-bold")[1].querySelector("span");
let coins = parseInt(coinSpan.textContent);

document.querySelectorAll(".call").forEach(function(button) {
  button.addEventListener("click", function() {
    if (coins < 20) {
      alert("You need at least 20 coins to make a call!");
      return;
    }
    coins -= 20;
    coinSpan.textContent = coins;

    const card = this.closest(".card");
    const title = card.querySelector("h1").textContent;
    const number = card.querySelector("h3").textContent;

    // Show alert with service name and number
    alert("Calling: " + title + " - " + number);

    const now = new Date();
    const time = now.toLocaleTimeString();

    const history = document.getElementById("History");
    const entry = document.createElement("div");
    entry.classList.add("history-entry");
    entry.innerHTML = `
      <h1 class="font-semibold text-lg">${title}</h1>
      <h3 class="text-gray-500">${number}</h3>
      <p class="text-sm text-blue-500">⏲️ ${time}</p>
      <hr class="my-1">
    `;
    history.appendChild(entry);
  });
});
// Clear call history
document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("History").innerHTML = "";
});

//  Heart 

const heartBox = document.querySelector(".flex.items-center.font-bold"); 
const heartSpan = heartBox.querySelector("span");
let hearts = parseInt(heartSpan.textContent);


document.querySelectorAll(".fa-regular.fa-heart").forEach(function(heart) {
  heart.addEventListener("click", function() {
    hearts += 1;
    heartSpan.textContent = hearts;

    
  });
});
//  copy 
var copySpan = document.querySelector(".flex.items-center.font-bold.text-white span");

var copyButtons = document.querySelectorAll(".copy");
for (var i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function() {
    var text = this.closest(".card").querySelector("h3").textContent;

    navigator.clipboard.writeText(text).then(function() {
      alert("Copied: " + text);
      if (copySpan) {
        copySpan.textContent = parseInt(copySpan.textContent) + 1;
      }
    }).catch(function() {
      alert("Failed to copy!");
    });
  });
}
