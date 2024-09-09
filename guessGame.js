const randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;

function checkGuess(){
    const userGuess = parseInt(document.getElementById("guessInput").value);
    if(userGuess == randomNumber){
        document.getElementById("message").innerHTML = "Congrats! That is correct";
        document.body.style.backgroundColor = "green";
    }
    else if (userGuess < randomNumber){
        document.getElementById("message").innerHTML = "Too low baby! Try again,";

    }
    else {
        document.getElementById("message").innerHTML = "Too high baby! Try again,";
    }

    attempts++;
};