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
// if playerSelection is 'rock' and computerSelection is scissors player wins
// if playerSelection is 'rock' and computerSelection is paper player loses
// if playerSelection is 'rock' and computerSelection is 'rock' it's a tie
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
    return 'Tie';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'Paper covers rock. Computer wins!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'Scissors cuts paper. Computer wins!';
  } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'Rock breaks scissors. Computer wins';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Paper covers rock. Player wins!';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'Rock breaks scissors. Player wins!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'Scissors cuts paper. Player wins!'
  } else return 'Please select from one of Rock, Paper, or Scissors'
}

// game fucntion //
// create variable array with score for computer and player
// loop 5 times
//// prompt player for selection
//// playRound
//// report after each round who won
//// increment winner score be 1

function game()
// let PlayerSelection = window.prompt("Make a guess (Rock, Paper, Scissors)");
