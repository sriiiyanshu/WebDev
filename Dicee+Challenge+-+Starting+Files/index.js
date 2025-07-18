if (performance.getEntriesByType("navigation")[0].type === "reload") {
  rollDice();
}

function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  d1 = "./images/dice" + randomNumber1 + ".png";
  d2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", d1);
  document.querySelector(".img2").setAttribute("src", d2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
