const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function handleHover() {
	const linkCoords = this.getBoundingClientRect();
	console.log(linkCoords);
	const coords = {
		width: linkCoords.width + 10,
		height: linkCoords.height,
		top: linkCoords.top + window.scrollY,
		left: linkCoords.left - 5 + window.scrollX,
	};
	console.log(coords);
	highlight.style.setProperty("width", `${coords.width}px`);
	highlight.style.setProperty("height", `${coords.height}px`);
	highlight.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
}

triggers.forEach((trigger) => trigger.addEventListener("mouseenter", handleHover));
