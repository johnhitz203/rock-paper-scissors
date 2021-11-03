// Computer Play Function randomly returns 'Rock', 'Paper', or 'Scissors'
// Create array with 'Rock', 'Paper', 'Scissors'
// Use random number between 0 and 2 to access the array by index
// Return the value

function computerPlay() {
  const possibleResponses = ['Rock', 'Paper', 'Scissors'];
  let guess = Math.floor(Math.random() * 3)
  return possibleResponses[guess];
}

// Play Round function //
// takes two parameters (playerSelection, computerSelection)
// return an object with winner and msg
/////////////////////////////////////////////////////
// playerSelection | computerSelection | Winner    //
// ----------------|-------------------|---------- //
//       Same      |      Same         | tie       //
// ----------------------------------------------- //
//       Rock      |      Paper        | computer  //
// ----------------|-------------------|---------- //
//       Paper     |      Scissors     | computer  //
// ----------------|-------------------|---------- //
//       Scissors  |      Rock         | computer  //
// ----------------------------------------------- //
//       Paper     |      Rock         | player    //
// ----------------------------------------------- //
//       Rock      |      Scissors     | player    //
// ----------------------------------------------- //
//       Scissors  |      Paper        | player    //
////////////////////////////////////////////////////
//
// return string that declares the winner - "You Lose! Paper beats Rock."
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return {winner: 'none', msg: 'Tie'};
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return {winner: 'computer', msg: 'Paper covers rock. Computer wins the round!'};
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return {winner: 'computer', msg: 'Scissors cuts paper. Computer wins the round!'};
  } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return {winner: 'computer', msg: 'Rock breaks scissors. Computer wins the round'};
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return {winner: 'player', msg: 'Paper covers rock. Player wins the round!'};
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return {winner: 'player', msg: 'Rock breaks scissors. Player wins the round!'};
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return {winner: 'player', msg: 'Scissors cuts paper. Player wins the round!'}
  } else {
    return {winner: 'none', msg: 'Please select from one of Rock, Paper, or Scissors'}
  }
}

// game fucntion //
// create variable that holds a score object for player and computer
// loop 5 times
//// log the players scores
//// prompt player for selection
//// convert selection to capitalize case
//// playRound
//// log the msg
//// increment winner score be 1 or 0 for none winner
// log the final score and winner
// add option to play again
function game() {
  let score = {player: 0, computer: 0}
  for(i=0;i<5;i++) {
    console.log(`Score is Player: ${score.player} | Computer: ${score.computer}`);
    let playerSelection = window.prompt("Make a guess (Rock, Paper, Scissors)")

    playerSelection = playerSelection.trim()
                        .toLowerCase().charAt(0)
                        .toUpperCase() + playerSelection.slice(1);

    computerSelection = computerPlay();

    let outcome = playRound(playerSelection, computerSelection);
    console.log(outcome.msg);
    if(outcome.msg === 'Please select from one of Rock, Paper, or Scissors') {
      i--
    }
    score = tallyScore(outcome.winner, score, i)
  }

  fandangles();
  reportOutcome(score);
  console.log("If you would like to play again type Yes in the prompt above!".toUpperCase())
  fandangles()
  let playAgain = window.prompt("Would you like to play again?")
  playAgain = playAgain.trim().toLowerCase().charAt(0).toUpperCase() +
                playAgain.slice(1);
  console.log(playAgain);
  if (playAgain === 'Yes') {
    game();
  } else {
    console.log('Quiter!')
  }
}

// fandangles function takes 0 parameters
// log fandangles
function fandangles() {
  for(i=0; i<3; i++) {
    console.log("*!*!*!*!*!*!**!*!*!*!*!*!**!*!*!*!*!*!**!*!*!*!*!*!*")
  }
}

// reportOutcome function takes one parameter (score)
// logs the game outcome
function reportOutcome(score) {
  // console.log(score.player);
  if(score.player === score.computer) {
    console.log(`Score is Player: ${score.player} | Computer: ${score.computer}. It's a Tie!`);
  } else if (score.player < score.computer) {
    console.log(`Score is Player: ${score.player} | Computer: ${score.computer}. Computer wins the game!`);
  } else if (score.player > score.computer) {
    console.log(`Score is Player: ${score.player} | Computer: ${score.computer}. Player wins the game!`);
  }
}

// tallyScore Function
// takes two parameters (winner, score)
// increments score for Winner
// returns updated score object
function tallyScore(winner, score, i) {
  if(winner === 'player') {
    return {player: score.player + 1, computer: score.computer}
  } else if (winner === 'computer') {
    return {player: score.player, computer: score.computer + 1}
  } else if (winner === 'none'){
    return {player: score.player, computer: score.computer}
  }
}
