let countDownInterval;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const timerButtons = document.querySelectorAll(".timer__button");
const customTimeForm = document.querySelector("#custom");

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);
	countDownInterval = setInterval(() => {
		secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft < 0) {
			clearInterval(countDownInterval);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const displayTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
		remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds
	}`;
	document.title = displayTime;
	timerDisplay.textContent = displayTime;
}

function addTime(e) {
	if (countDownInterval) clearInterval(countDownInterval);
	const secondsToAdd = this.dataset.time;
	timer(secondsToAdd);
}

timerButtons.forEach((timerButton) => timerButton.addEventListener("click", addTime));

customTimeForm.addEventListener("submit", function (e) {
	e.preventDefault();
	// const { minutes } = Object.fromEntries(new FormData(e.target));
	const minutes = this.minutes.value;
	console.log(minutes);
	const secondsToAdd = minutes * 60;
	if (countDownInterval) clearInterval(countDownInterval);
	timer(secondsToAdd);
});

function displayEndTime(milliseconds) {
	const end = new Date(milliseconds);
	let hours = end.getHours();
	const zone = hours >= 12 ? "PM" : "AM";
	if (hours !== 12) hours = hours % 12;
	const minutes = end.getMinutes();
	endTimeDisplay.textContent = `Be back at ${hours}:${minutes < 10 ? "0" : ""}${minutes} ${zone}`;
}
