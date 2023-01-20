const progressBarEl = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
	let height = parseInt(document.body.scrollHeight) - parseInt(window.innerHeight);
	let scrollPosition = document.documentElement.scrollTop;
	let width = (scrollPosition / height) * 100;
	progressBarEl.style.width = `${width}%`;
});
