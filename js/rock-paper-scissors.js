// Start the game
// Add an eventListener to  start button that calls game()
const start = document.querySelector('#start');
start.addEventListener('click', () => {
  const body = document.querySelector('body');
  game();
  body.removeChild(start);
});


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
// Select buttons in game_board
// Create variable to hold score object
// Display Score
// Add eventListener to buttons in game_board
////
function game() {
  const game_board = document.querySelector('#game_board');
  const buttons = game_board.querySelectorAll('button');
  const display_score = document.querySelector('#display_score');
  let score = {player: 0, computer: 0}
  display_score.textContent = `Player: ${score.player} Computer: ${score.computer}`

  buttons.forEach((button) => {
    button.addEventListener('click', takeTurn(button, score));
  });
}

function takeTurn(button, score) {
  const div = document.querySelector('#result');
  const selection = (button.id).replace(/^\w/, (c) => c.toUpperCase());
  let outcome = playRound(selection, computerPlay());
  div.textContent = outcome.msg;
  score = tallyScore(outcome.winner, score);
  display_score.textContent = `Player: ${score.player} Computer: ${score.computer}`
  if(score.player === 5 || score.computer === 5) {
    // preventPlay() // Refactor querySelector for button into a function ???
    // buttons.forEach((button) => {
    //   button.removeEventListener('click', () => {});
    // });
    declareWinner(score);
  }
}

// function preventPlay() {
//   console.log("No More!")
// }

function declareWinner(score) {
  let winner;
  switch (true) {
    case score.player > score.computer:
      winner = `Player wins ${score.player} to ${score.computer}`
      break
    case score.computer > score.player:
      winner = `Computer wins ${score.computer} to ${score.player}`
      break
  }
  const game = document.createElement('div');
  game.setAttribute('id', 'winner');
  game.textContent = winner;
  const board = document.querySelector('#game_board');
  board.appendChild(game);
  playAgain();
}

// playAgain function accepts 0 parameters
// presents player with a button to play again
// add on click eventListener
//// remove the winner div
//// reset score
//// call game
function playAgain() {
  const game_board = document.querySelector('#game_board');
  const result = document.querySelector('#result');
  const playAgain = document.createElement('button');

  playAgain.textContent = 'Play Again';
  game_board.appendChild(playAgain);
  playAgain.addEventListener('click', () => {
    result.textContent = "";
    const winner_div = document.querySelector('#winner');
    game_board.removeChild(winner_div);
    game_board.removeChild(playAgain);
    game();
  });
}

// tallyScore Function
// takes two parameters (winner, score)
// increments score for Winner
// returns updated score object
function tallyScore(winner, score) {
  if(winner === 'player') {
    return {player: score.player + 1, computer: score.computer}
  } else if (winner === 'computer') {
    return {player: score.player, computer: score.computer + 1}
  } else if (winner === 'none'){
    return {player: score.player, computer: score.computer}
  }
}
