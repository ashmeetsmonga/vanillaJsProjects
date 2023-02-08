const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const msg = new SpeechSynthesisUtterance();
let voices = [];
let startTime;
let delay;

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

async function startSpeech() {
	speechSynthesis.cancel();
	const texts = msg.text.split(".");
	console.log(texts);
	let i = 0;
	speakText(texts[i]);
	// for (let i = 0; i < text.length; i++) {
	// 	msg.text = text[i];
	// 	speechSynthesis.speak(msg);
	// 	console.log(text[i]);
	// }
	msg.onstart = () => {
		startTime = Date.now();
		console.log("Started");
	};
	msg.onend = async () => {
		delay = Date.now() - startTime;
		await new Promise((resolve, reject) => setTimeout(() => resolve(""), delay));
		if (i < texts.length - 1) speakText(texts[++i]);
	};
}

function speakText(text) {
	msg.text = text;
	speechSynthesis.speak(msg);
}

function setOptions() {
	msg[this.name] = this.value;
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", startSpeech);
options.forEach((option) => option.addEventListener("input", setOptions));
stopButton.addEventListener("click", () => speechSynthesis.cancel());
