function game() {

	for (var i = 1; i <=9; i++) {
		reset(i);
	}

	document.turn ="x";
	if (Math.random() <0.5) {
		document.turn = "o";
	}
	document.winner = null;
	message(document.turn + " starts the move.");

}

function message(msg){
	document.getElementById("messages").innerText = msg;

}

function Move(square) {
	if (document.winner != null) {
		message(document.winner + " already won the game!");
	} else if (square.innerText === "") {
		square.innerText = document.turn;
		changeTurn();
	} else {
		message("Unfair Move, that spot is occupied");
	}
}

function changeTurn() {
	if (checkWinner(document.turn)) {
		message("congradulations" + document.turn + "1 You win.");
		document.winner = document.turn;
	} else if (document.turn === "x"){
		document.turn = "o";
		message("Now it's " + document.turn + "'s turn !");
	} else {
		document.turn = "x";
		message("Now it's " + document.turn + "'s turn !");
}
	}
	
function checkWinner(move) {
	var result = false;
	if (checkRow(1,2,3,move) || 
	   checkRow(4,5,6,move) || 
	   checkRow(7,8,9,move) ||
	   checkRow(1,4,7,move) || 
	   checkRow(2,5,8,move) || 
	   checkRow(3,6,9,move) ||
	   checkRow(1,5,9,move) || 
	   checkRow(3,5,7,move)){

	   result = true;
	   }
	   return result;
}

function checkRow(a,b,c, move) {
	var result = false;
	if(getBox(a) === move && getBox(b) == move && getBox(c) === move) {
		result = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById("r" + number).innerText;
}

function reset(number) {
	document.getElementById("r" + number).innerText = "";
}


