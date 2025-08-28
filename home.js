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
