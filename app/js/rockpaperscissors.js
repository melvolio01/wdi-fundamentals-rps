function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  return prompt("Please choose either 'rock', 'paper' or 'scissors'");
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

function getPlayerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  return move || getInput();
}

function getComputerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  return move || randomPlay();
}

//Examples used below to test unit 4 homework//


function getWinner(playerMove, computerMove){

  var winner;
  var playerMove;
  var computerMove;

  if (playerMove === computerMove) {
    return ("tie");}

  else if ((playerMove === 'rock') && (computerMove === 'scissors')){
    return ("player");}

  else if ((playerMove === 'scissors') && (computerMove === 'paper'))  
    {return ("player");}

  else if ((playerMove === 'paper') && (computerMove === 'rock'))  
    {return ("player");}
    
  else if ((playerMove === 'scissors') && (computerMove === 'rock'))
    {return ("computer");}

  else if ((playerMove === 'paper') && (computerMove === 'scissors'))
    {return ("computer");}

  else if ((playerMove === 'rock') && (computerMove === 'paper'))
    {return ("computer");}


  {return getWinner}
}



  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  var winner;


 while (playerWins < 5 && computerWins < 5) {
       var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins +=1;
        } else if (winner === "computer") {
            computerWins +=1;
        } else {
      console.log('It\'s a tie! ' + "The current score is player " + playerWins + ", computer " + computerWins);
        }
                
        console.log("You chose '" + playerMove + "' while the computer chose '" + computerMove + "'.");
        console.log("Winner is: " + winner + ".");
        console.log("The score is currently Player: " + playerWins + " to " + "Computer: " + computerWins);
    }
     return [playerWins, computerWins];
 }

playToFive();