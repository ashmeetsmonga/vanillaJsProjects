const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseEl = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const increaseEl = document.getElementById("increase");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 20;
let color = "black";
let x;
let y;
let isPressed = false;

decreaseEl.addEventListener("click", () => {
	if (size > 5) size -= 5;
	setSize();
});

increaseEl.addEventListener("click", () => {
	if (size < 50) size += 5;
	setSize();
});

colorEl.addEventListener("click", () => {
	console.log(colorEl.value);
});

clearEl.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);
		x = x2;
		y = y2;
	}
});

canvas.addEventListener("mouseup", () => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

function setSize() {
	sizeEl.innerText = size;
}

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	console.log("circle drawn");
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}