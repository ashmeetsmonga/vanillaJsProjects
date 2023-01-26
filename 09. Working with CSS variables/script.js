const blurRadiusEl = document.getElementById("blur-radius");
const colorEl = document.getElementById("color");
const boxEl = document.getElementById("box");

const inputs = document.querySelectorAll(".controls div input");

function handleChange() {
	const suffix = this.dataset.suffix || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));
