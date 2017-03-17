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
    
    cardElement.className = 'card';
	
    // setting the card to be an element of the array
    cardElement.setAttribute('data-card', cards[i]);
		// waiting for click event  so the function isTwoCards will run
    cardElement.addEventListener('click', isTwoCards);

    // apdd a card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
//function to check if the vards are in play
function isTwoCards() {
  // add card to array of cards being viewed
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the cardElement you click on
  cardsInPlay.push(this.getAttribute('data-card'));
	// card images
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king image
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen image
	}
  // checking for match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear array for next play
    cardsInPlay = [];
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