// Choosing a random word
// create an array of words
var words = [
    "holler", 
    "outlandish", 
    "fantastic", 
    "croissant"
];

var word = words[Math.floor(Math.random() * words.length)];
// console.log(word);

// set answer array
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
    }
    // console.log(answerArray);

// Create variable to keep track of letters that remain to be guessed
var remainingLetters = word.length;

// The Game Loop
while (remainingLetters > 0) {
    // show the player their progress
    var remainingLetters = document.getElementById("words");
    // look for a problem here due to video's use of el.innerHTML
    words.remainingLetters = answerArray.join(" ");
    var guess = prompt("Guess a letter, or click Cancel to stop playing."); 
    if(guess === null) {
        // exit game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
      // update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }  
    }
}
// console.log(answerArray.join(" "));
// alert("Good Job! The answer was " + word + ".");
// console.log(guess);