const textAreaEl = document.getElementById("textarea");
const charCountEl = document.getElementById("char-count");
const remCharCountEl = document.getElementById("rem-char-count");

textAreaEl.addEventListener("keyup", () => {
	console.log(textAreaEl.getAttribute("maxlength"));
	const charCount = textAreaEl.value.length;
	charCountEl.innerText = charCount;
	remCharCountEl.innerText = parseInt(textAreaEl.getAttribute("maxlength")) - charCount;
});
