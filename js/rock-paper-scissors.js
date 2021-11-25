// Start the game
// Add an eventListener to  start button that calls game()
const start = document.querySelector('#start');
start.addEventListener('click', () => {
  game();
});
// switch(true) {
//   case selection === 'rock':
//     console.log("it's a rock");
//   case selection === 'paper':
//     console.log("it's paper");
//   case selection === 'scissors':
//     console.log("it's scissors");
// }
// rock.addEventListener('click', (e) => {
//   console.log(e.path[0].id);
//   if(e.path[0].id === 'rock') {
//     let outcome = playRound('Rock', computerPlay());
//     console.log('WTF is going on in here?')
//     console.log(outcome.msg);
//   }
// });

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
  const game_board = document.querySelector('#game_board');
  const buttons = game_board.querySelectorAll('button');
  const display_score = document.querySelector('#display_score');
  let score = {player: 0, computer: 0}
  display_score.textContent = `Player: ${score.player} Computer: ${score.computer}`

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const div = document.querySelector('#result');
      const selection = (button.id).replace(/^\w/, (c) => c.toUpperCase());
      let outcome = playRound(selection, computerPlay());
      div.textContent = outcome.msg;
      score = tallyScore(outcome.winner, score);
      display_score.textContent = `Player: ${score.player} Computer: ${score.computer}`
      if(score.player === 5 || score.computer === 5) {
        const winner = declareWinner(score);
        const game = document.createElement('div');
        game.textContent = winner;
        const board = document.querySelector('#game_board');
        board.appendChild(game);
      }
    });
  });
}

function declareWinner(score) {
  switch (true) {
    case score.player > score.computer:
      return `Player wins ${score.player} to ${score.computer}`
      break
    case score.computer > score.player:
      return `Computer wins ${score.computer} to ${score.player}`
      break
  }
}

// playAgain function accepts 0 parameters
// ask if player would like to play play again
// clean up response
// reset game'

function playAgain() {
  let playAgain = window.prompt("Would you like to play again?")
  if(playAgain === null) {
    console.log("Quiter!")
  } else {
    playAgain = playAgain.trim().toLowerCase().charAt(0).toUpperCase() +
                playAgain.slice(1);

    if (playAgain === 'Yes') {
      game();
    } else {
      console.log('Quiter!')
    }
  }

  console.log(playAgain);
}

// addFandangles function takes 0 parameters
// log Fandangles to mark end of game
function addFandangles() {
  for(i=0; i<3; i++) {
    console.log("*!*!*!*!*!*!**!*!*!*!*!*!**!*!*!*!*!*!**!*!*!*!*!*!*")
  }
}

// reportOutcome function takes one parameter (score)
// logs the game outcome
function reportOutcome(score) {
  // console.log(score.player);
  if(score.player === score.computer) {
    console.log(`Score is Player: ${score.player} | Computer: ${score.computer}. Tie Game!`);
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
function tallyScore(winner, score) {
  if(winner === 'player') {
    return {player: score.player + 1, computer: score.computer}
  } else if (winner === 'computer') {
    return {player: score.player, computer: score.computer + 1}
  } else if (winner === 'none'){
    return {player: score.player, computer: score.computer}
  }
}
