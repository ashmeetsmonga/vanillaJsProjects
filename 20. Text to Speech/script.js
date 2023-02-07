const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const msg = new SpeechSynthesisUtterance();
let voices = [];

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
	voices = this.getVoices();
	const voiceOptions = voices
		.filter((voice) => voice.lang.substring(0, 2) === "en")
		.map((voice) => `<option value=${voice.name}>${voice.name} (${voice.lang})</option>`)
		.join("");
	voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
	speechSynthesis.cancel();
	msg.voice = voices.find((voice) => voice.name === this.value);
}

function startSpeech() {
	speechSynthesis.cancel();
	speechSynthesis.speak(msg);
}

function setOptions() {
	console.log(this.name, this.value);
	msg[this.name] = this.value;
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", startSpeech);
options.forEach((option) => option.addEventListener("input", setOptions));
