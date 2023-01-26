const panelArray = document.querySelectorAll(".panel");

function handleOpen() {
	this.classList.toggle("open");
}

function handleOpenActive(e) {
	console.log("Hello");
	if (e.propertyName.includes("flex")) this.classList.toggle("open-active");
}

panelArray.forEach((panel) => panel.addEventListener("click", handleOpen));
panelArray.forEach((panel) => panel.addEventListener("transitionend", handleOpenActive));
