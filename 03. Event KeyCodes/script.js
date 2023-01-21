const bodyEl = document.body;
const promptEl = document.getElementById("prompt");
const keyCodesContainerEl = document.getElementById("key-codes-container");
const eventKeyEl = document.getElementById("event-key");
const eventKeyCodeEl = document.getElementById("event-key-code");
const eventCodeEl = document.getElementById("event-code");

bodyEl.addEventListener("keypress", (e) => {
	eventKeyEl.innerText = e.key;
	eventKeyCodeEl.innerText = e.keyCode;
	eventCodeEl.innerText = e.code;

	promptEl.classList.add("hidden");
	keyCodesContainerEl.classList.remove("hidden");
});
