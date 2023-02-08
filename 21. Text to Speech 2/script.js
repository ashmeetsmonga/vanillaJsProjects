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
	const textArray = document.querySelector('[name="text"]').value.split(".");
	let i = 0;
	msg.text = textArray[i];
	speechSynthesis.speak(msg);
	let startTime = 0;
	msg.onstart = () => (startTime = Date.now());
	msg.onend = async () => {
		if (i === textArray.length - 1) return;
		i += 1;
		msg.text = textArray[i];
		let delay = Date.now() - startTime;
		const sentenceTime = Number(document.querySelector('[name="sentenceTime"]').value);
		await new Promise((resolve, reject) => setTimeout(() => resolve(1), delay * sentenceTime));
		speechSynthesis.speak(msg);
	};
}

function setOptions() {
	msg[this.name] = this.value;
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", startSpeech);
options.forEach((option) => option.addEventListener("input", setOptions));
stopButton.addEventListener("click", () => speechSynthesis.cancel());
