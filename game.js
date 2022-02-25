var words = ["ant", "baboon", "badger", "bat", "bear", "beaver", "camel", "cat", "clam", "cobra", "cougar", "coyote", "crow", "deer", "dog", "donkey", "duck", "eagle", "ferret", "fox", "frog", "goat", "goose", "hawk", "lion", "lizard", "lama", "mole", "monkey", "moose", "mouse", "mule", "newt", "otter", "owl", "panda", "parrot", "pigeon", "python", "rabbit", "ram", "rat", "raven", "rhino", "salmon", "seal", "shark", "sheep", "skunk", "sloth", "snake", "spider", "stork", "swan", "tiger", "toad", "trout", "turkey", "turtle", "weasel", "whale", "wolf", "wombat", "zebra"];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var chances = 15;
var guesses = [];

var randomWord = words[Math.floor(Math.random() * words.length)];
var text = "" 
var textAll = ""
console.log(randomWord)
for (var i = 0; i < randomWord.length; i++) {
    text += "-";
}
document.querySelector("#word").innerHTML = "Current Word: " + text;
function getAnswer() {
    var a = document.querySelector("input").value.toLowerCase();
    document.querySelector("#word").innerHTML = "Current Word: " + text;
    checkAnswer(a);
}
function askAnswer(){
    document.querySelector(".btn").addEventListener("click", getAnswer);
}
function checkAnswer(x) {
    if (randomWord.includes(x)) {
        for(var j = 0; j < randomWord.length; j++){
            if(x === randomWord[j]){
                textAll += x;
            } 
            else if (letters.includes(text[j])) {
                textAll += text[j];
            }
            else {
                textAll += "-"
            }
        }
        text = textAll;
        textAll = ""
        document.querySelector("#word").innerHTML = "Current Word: " + text;
        if (text === randomWord) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
        }
        else {
            askAnswer();
        }
    }
    else {
        chances--;
        document.querySelector("#numberOfGuess").innerHTML = "Number of Guesses Remaining: " + chances;
        guesses.push(x);
        document.querySelector("#lettersGuessed").innerHTML = "Letters Already Guessed: " +  guesses.join(" ");
        if (chances == 0) {
            alert("Your chances ran out! You Lost!")
            restart();
        }
        else {
            askAnswer();
        }
    }
    document.querySelector("#input").value = "";
}

function restart() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    chances = 15
    document.querySelector("#numberOfGuess").innerHTML = "Number of Guesses Remaining: " + chances;
    guesses = [];
    document.querySelector("#lettersGuessed").innerHTML = "Letters Already Guessed: " + guesses.join(" ");
    text = ""
    document.querySelector("#word").innerHTML = "Current Word: " + text;
    askAnswer()
}
askAnswer()

