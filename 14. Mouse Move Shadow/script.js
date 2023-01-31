const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const shadowWidth = 200;

hero.addEventListener("mousemove", shadow);

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;
	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}
	const xShadowWidth = Math.round((x / width) * shadowWidth - shadowWidth / 2);
	const yShadowWidth = Math.round((y / height) * shadowWidth - shadowWidth / 2);

	text.style.textShadow = `${xShadowWidth * -1}px ${yShadowWidth * -1}px 10px rgba(0, 0, 0, 0.5)`;
	console.log(xShadowWidth, yShadowWidth);
}
