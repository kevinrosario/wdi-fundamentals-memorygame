var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var score = 0;

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var gameScore = function(){
	document.getElementById('game-score').textContent = "Score: " + score;
};

var restart = function(){
	document.getElementById('game-board').innerHTML = "";
	createBoard();
	cardsInPlay = [];
};

var restartBoard = function(){
	var restartButton = document.getElementById('restartBtn');
	restartButton.addEventListener('click', restart);

};

var checkForMatch = function(){
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match")
		score++;
		gameScore();
		restart();
	} else {
		alert("Sorry, try again.");
		restart();
	}
};

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);

	if(cardsInPlay.length == 2){
		checkForMatch();
	}
};

createBoard();
restartBoard();
gameScore();