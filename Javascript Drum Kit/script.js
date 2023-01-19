window.addEventListener("keydown", (e) => {
	const box = document.getElementById(`data-${e.key}`);
	if (!box) return;
	box.classList.add("animate");
	box.classList.add("border-yellow-500");
	box.addEventListener("transitionend", () => {
		box.classList.remove("animate");
		box.classList.remove("border-yellow-500");
	});
	let audio;
	if (e.key === "a" || e.key === "A") {
		audio = new Audio("./assets/sounds/boom.wav");
		audio.play();
	}

	if (e.key === "s" || e.key === "S") {
		audio = new Audio("./assets/sounds/clap.wav");
		audio.play();
	}

	if (e.key === "d" || e.key === "D") {
		audio = new Audio("./assets/sounds/hihat.wav");
		audio.play();
	}

	if (e.key === "f" || e.key === "F") {
		audio = new Audio("./assets/sounds/kick.wav");
		audio.play();
	}

	if (e.key === "g" || e.key === "G") {
		audio = new Audio("./assets/sounds/openhat.wav");
		audio.play();
	}

	if (e.key === "h" || e.key === "H") {
		audio = new Audio("./assets/sounds/ride.wav");
		audio.play();
	}

	if (e.key === "j" || e.key === "J") {
		audio = new Audio("./assets/sounds/snare.wav");
		audio.play();
	}

	if (e.key === "k" || e.key === "K") {
		audio = new Audio("./assets/sounds/tink.wav");
		audio.play();
	}

	if (e.key === "l" || e.key === "L") {
		audio = new Audio("./assets/sounds/tom.wav");
		audio.play();
	}
});
