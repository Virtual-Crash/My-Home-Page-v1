

var foodMax4 = ["chip", "rice", "cake", "beef", "corn", "pear", "pie", "bun", "bean", "fish" ];
var foodMax6 = ["apple", "pasta", "sushi", "toast", "pizza", "almond", "cheese", "potato", "shrimp", "cherry" ];
var oceanMax4 = ["sea", "eel", "ray", "cod", "seal", "crab", "clam", "reef", "kelp", "orca" ];
var oceanMax6 = ["turtle", "urchin", "lobster", "coral", "waves", "shark", "water", "algae", "manta", "walrus" ];

var words = {words: [{"cat": "food4", "word":"chip"}, {"cat": "food4", "word":"rice"}, {"cat": "food4", "word":"cake"},
        {"cat": "food4", "word":"beef"}, {"cat": "food4", "word":"corn"},{"cat": "food4", "word":"pear"},
        {"cat": "food4", "word":"pie"},{"cat": "food4", "word":"bun"},{"cat": "food4", "word":"bean"},{"cat": "food4", "word":"fish"},

        {"cat": "food6", "word":"apple"},{"cat": "food6", "word":"pasta"},{"cat": "food6", "word":"sushi"},{"cat": "food6", "word":"toast"},
        {"cat": "food6", "word":"pizza"},{"cat": "food6", "word":"almond"},{"cat": "food6", "word":"cheese"}, {"cat": "food6", "word":"potato"},
        {"cat": "food6", "word":"shrimp"},{"cat": "food6", "word":"cherry"},

        {"cat": "ocean4", "word":"sea"},{"cat": "ocean4", "word":"eel"},{"cat": "ocean4", "word":"ray"},{"cat": "ocean4", "word":"cod"},
        {"cat": "ocean4", "word":"seal"},{"cat": "ocean4", "word":"crab"},{"cat": "ocean4", "word":"clam"}, {"cat": "ocean4", "word":"reef"},
        {"cat": "ocean4", "word":"kelp"},{"cat": "ocean4", "word":"orca"},

        {"cat": "ocean6", "word":"turtle"},{"cat": "ocean6", "word":"urchin"},{"cat": "ocean6", "word":"lobster"},{"cat": "ocean6", "word":"coral"},
        {"cat": "ocean6", "word":"waves"},{"cat": "ocean6", "word":"shark"},{"cat": "ocean6", "word":"water"}, {"cat": "ocean6", "word":"algae"},
        {"cat": "ocean6", "word":"manta"},{"cat": "ocean6", "word":"walrus"},
    ]};


console.log("JavaScript has loaded")

var cat = "";
var maxletters = -1;
var secretWord = "";
var guesses = [];
var userGuessDisplay = [];

function startHangman(event) {
    event.preventDefault()
    var currmaxletters  = event.target.maxletters.value;
    var currcat         = event.target.cat.value;

    currmaxletters = parseInt(currmaxletters);

    cat = currcat;
    maxletters = currmaxletters;

    console.log(maxletters, cat);


    if (currmaxletters == 4 && currcat == "ocean" ) {
        //pull random word
        secretWord = oceanMax4[Math.floor(Math.random() * oceanMax4.length)];

        console.log(secretWord)

    }
    if (currmaxletters == 6 && currcat == "ocean" ) {
        //pull random word
         secretWord = oceanMax6[Math.floor(Math.random() * oceanMax4.length)];

        console.log(secretWord)

    }
    if (currmaxletters == 4 && currcat == "food" ) {
        //pull random word
        secretWord = foodMax4[Math.floor(Math.random() * foodMax4.length)];

        console.log(secretWord)

    }
    if (currmaxletters == 6 && currcat == "food" ) {
        //pull random word
        secretWord = foodMax6[Math.floor(Math.random() * foodMax6.length)];

        console.log(secretWord)

    }
    // throw in some errors if there were no options selected

    // This will hide the initial input form
    //var mainform = document.getElementById("mainform");
    //mainform.style.visibility = "hidden";

    // .visible to change, default to hidden if you want it to show up later
}

var guessCount = 0;

function inTheGame(event) {
    event.preventDefault()


    var userSelectedGuess = event.target.userinput.value;

    console.log(userSelectedGuess);

    var hangmanword = document.getElementById("hangmanword");
        hangmanword.innerText = secretWord.length;


    // Create an array based off of how many letters there are in the letter

    userGuessDisplay = secretWord.split("");



    // Then when the user makes a guess i can pull the position and replace it
    //use example coral or _____

    //need to take the length and turn it into _
    // userGuessDisplay[j] = "_";


     //user guesses r which is at postion 3

     //replace the third position with r or __r__

     //returns underscores where there are no letters  and letters where their guesses are
     //c_ral
    //var arr1 = ["t","u","r","t","l","e"]
    // var arr2 = [ "u","r","l","e"]


    function returnDuplicated(arrayWord, arrayGuess){
        var output = []
        console.log({arrayWord, arrayGuess})
        for(var i = 0; i < arrayWord.length; i++){
            var didItWork = false
            for(var j = 0; j < arrayGuess.length; j++){
                if(arrayWord[i] === arrayGuess[j]){
                    output.push(arrayWord[i])
                    didItWork = true
                }
            }
            if(!didItWork){
                output.push("_")
            }
        }
        return output

        // return array of duplicated
    }


    if (userSelectedGuess.length < 2) {
        //This was take the word and make it into an array
        var wordSplit = secretWord.split("");
        guesses.push(userSelectedGuess)
        console.log(returnDuplicated(userGuessDisplay, guesses))


        console.log({wordSplit})


        var neatdisplay = document.getElementById("neatdisplay");
        neatdisplay.innerText = returnDuplicated(userGuessDisplay, guesses);


    } else if (userSelectedGuess.length === secretWord.length) {
        // compare their guess to the secret word
        if (userSelectedGuess === secretWord) {
            console.log("You win the game");

            var neatdisplay = document.getElementById("neatdisplay");
            neatdisplay.innerText = userSelectedGuess + " You win the game!";

        } else {
            console.log("Your word was not correct, the game has ended.")
        }
    }
    if (guessCount > 5) {
        console.log("You are out of guesses")
    } else {
        //This is for handling their guesses
        guessCount++;
    }


}

//function displayNew(event){
  //  event.preventDefault()
  //  document.writeln(secretWord.length)

//}


let userSelectOptions = document.querySelector("#mainform");
userSelectOptions.addEventListener("submit", startHangman);

let userSubmitChoice = document.querySelector("#textbox");
userSubmitChoice.addEventListener("submit", inTheGame);

