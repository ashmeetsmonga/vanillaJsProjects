const hourHandEl = document.getElementById("hour-hand");
const minuteHandEl = document.getElementById("minute-hand");
const secondHandEl = document.getElementById("second-hand");

const myInterval = setInterval(() => {
	const date = new Date();
	const [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

	const hoursDeg = (hours % 12) * 30 + seconds / 120 - 90;
	hourHandEl.style.transform = `rotate(${hoursDeg}deg)`;
	const minutesDeg = minutes * 6 + seconds / 10 - 90;
	minuteHandEl.style.transform = `rotate(${minutesDeg}deg)`;
	const secondsDeg = seconds * 6 - 90;
	secondHandEl.style.transform = `rotate(${secondsDeg}deg)`;
}, 1000);
