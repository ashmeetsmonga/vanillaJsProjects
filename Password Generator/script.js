function getRandomLowerCaseLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCaseLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}

console.log(
	getRandomLowerCaseLetter() +
		" " +
		getRandomUpperCaseLetter() +
		" " +
		getRandomNumber() +
		" " +
		getRandomSymbol()
);
