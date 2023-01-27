const endpoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const inputEl = document.querySelector(".search-form > input");
const listEl = document.querySelector(".suggestions");

const cities = [];
fetch(endpoint)
	.then((data) => data.json())
	.then((res) => cities.push(...res));

function matchWord(word) {
	return cities.filter(
		(place) => place.city.toLowerCase().includes(word) || place.state.toLowerCase().includes(word)
	);
}

function displayCities(cities) {
	const html = cities
		.map(
			(place) =>
				`<li><span class="name">${place.city}, ${
					place.state
				}</span> <span class="population">${parseInt(
					place.population
				).toLocaleString()}</span></li>`
		)
		.join("");
	listEl.innerHTML = html;
}

inputEl.addEventListener("input", (e) => {
	console.log();
	const cities = matchWord(e.target.value.toLowerCase());
	displayCities(cities);
});
