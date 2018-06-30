
var wordsList = ["purple", "pink", "yellow", "green", "orange", "maroon", "black","red", "white", "blue"];
var gameword = "";
var gamewordletters = [];
var blanks = 0;
var worddisplay = [];
var wrongGuesses = [];
var guessed = "";
var wins = 0;
var losses = 0;
var guesses = 5;

function startGame() {
  guesses = 5;
  worddisplay = [];
  wrongGuesses = [];

  gameword = wordsList[Math.floor(Math.random() * wordsList.length)];
  gamewordletters = gameword.split("");
  blanks = gamewordletters.length;


  for (var i = 0; i < blanks; i++) {
    worddisplay.push("_");
  }

 
  document.getElementById("guesses-left").innerHTML = guesses;
  document.getElementById("word-blanks").innerHTML = worddisplay.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function checkLetters(letter) {

  var letterInWord = false;


  for (var i = 0; i < blanks; i++) {
    if (gameword[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < blanks; j++) {
      if (gameword[j] === letter) {
        worddisplay[j] = letter;
      }
    }
  }

  else {
    wrongGuesses.push(letter);
    guesses--;
  }

}


function roundComplete() {
  console.log("WinCount: " + wins + " | LossCount: " + losses + " | guesses: " + guesses);

  document.getElementById("guesses-left").innerHTML = guesses;
  document.getElementById("word-blanks").innerHTML = worddisplay.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


  if (gamewordletters.toString() === worddisplay.toString()) {
    wins++;
    alert("You win!");
    document.getElementById("win-counter").innerHTML = wins;
    startGame();
  }


  else if (guesses === 0) {
    losses++;
    alert("You lose");
    document.getElementById("loss-counter").innerHTML = losses;
    startGame();
  }
}

startGame();
document.onkeyup = function(event) {
  guessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(guessed);
  roundComplete();
};