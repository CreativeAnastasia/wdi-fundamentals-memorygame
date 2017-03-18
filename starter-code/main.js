// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// if (cardOne === cardTwo) {
// 	alert('You found a match!');	
// } else {
//   alert('Sorry, try again.');
// }

// cards in the game
var cards = ['queen', 'queen', 'king', 'king'];

// cards in play
var cardsInPlay = [];



// adding cards to the board
var board = document.getElementById('game-board');
// creating the board
function createBoard() {
  // creating card elements for the board
  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');
    
   
  }

}

}

function isMatch(cards) {
  // creating array
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();