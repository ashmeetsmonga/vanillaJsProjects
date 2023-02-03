const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;
const logo = document.querySelector(".logo");

function fixNav() {
	if (window.scrollY >= topOfNav) {
		nav.style.setProperty("position", "fixed");
		logo.style.setProperty("max-width", "100%");
	} else {
		nav.style.setProperty("position", "relative");
		logo.style.setProperty("max-width", "0%");
	}
}

window.addEventListener("scroll", fixNav);
