const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtnEl = document.getElementById("generate-btn");
const generatedPasswordEl = document.getElementById("generated-password");

generateBtnEl.addEventListener("click", () => {
	const length = lengthEl.value;
	const isLower = lowercaseEl.checked;
	const isUpper = uppercaseEl.checked;
	const isNumber = numberEl.checked;
	const isSymbol = symbolEl.checked;

	const funcs = [];

	if (isLower) funcs.push(getRandomLowerCaseLetter);
	if (isUpper) funcs.push(getRandomUpperCaseLetter);
	if (isNumber) funcs.push(getRandomNumber);
	if (isSymbol) funcs.push(getRandomSymbol);

	generatePassword(length, funcs);
});

function generatePassword(length, funcs) {
	let generatedPassword = "";
	let i = 0;
	while (i < length) {
		generatedPassword += funcs[i % 4]();
		i += 1;
	}
	generatedPasswordEl.value = generatedPassword;
}

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

const randomFunc = {
	lower: getRandomLowerCaseLetter,
	upper: getRandomUpperCaseLetter,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};
