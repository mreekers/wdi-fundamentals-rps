////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return var move = "some_value":
            move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return var move = "some_value":
            move = move || getInput();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var x 
var y 
if (x == 1) {
    playerMove = Rock
} else if (x == 2) {
    playerMove = Scissors
} else if (x == 3) {
    playerMove = Paper
}
if (y == 1) {
    computerMove = Rock
} else if (y == 2) {
    computerMove = Scissors
} else if (y == 3) {
    computerMove = Paper
}
if (playerMove == Rock && computerMove == Scissors) {
    winner = player
} else if (playerMove == Rock && computerMove = Paper) {
    winner = computer
} else if (playerMove = Rock && computerMove = Rock) {
    winner = tie 
}
if (playerMove = Scissors && computerMove = Rock) {
    winner = computer
} else if (playerMove = Scissors && computerMove = Paper) {
    winner = player
} else if (playerMove = Scissors && computerMove = Scissors) {
    winner = tie
}
if (playerMove = Paper && computerMove = Rock) {
    winner = player
} else if (playerMove = Paper && computerMove = Scissors) {
    winner = computer
} else if (playerMove = Paper && computerMove = Paper) {
    winner = tie
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if playerWins = 1 {
        return playerWins
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if playerWins = 2 {
        return playerWins
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if playerWins = 3 {
        return playerWins
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if playerWins = 4 {
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
    if playerWins = 5 {
        return playToFive()
    }
    if computerWins = 1 {
        return playToFive()
    }
    console.log("Computer chose " + computerMove + " while Player chose " + playerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if computerWins = 2 {
        return computerWins
    }
    console.log("Computer chose " + computerMove + " while Player chose " + playerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if computerWins = 3 {
        return computerWins
    }
    console.log("Computer chose " + computerMove + " while Player chose " + playerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if computerWins = 4 {
        return computerWins
    }
    console.log("Computer chose " + computerMove + " while Player chose " + playerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    if computerWins = 5 {
        return playToFive()
    return [playerWins, computerWins];
}

