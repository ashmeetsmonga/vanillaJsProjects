const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
populateList();

function addItem(e) {
	e.preventDefault();
	const text = this.querySelector("[name=item]").value;
	const item = {
		text,
		done: false,
	};
	items.push(item);
	localStorage.setItem("items", JSON.stringify(items));
	populateList();
}

function populateList() {
	itemsList.innerHTML = items
		.map((item, i) => {
			return `<li>
            <input type='checkbox' data-index=${i} id='item-${i}' ${item.done ? "checked" : ""} />
            <label for='item-${i}'>${item.text}</label>
            </li>`;
		})
		.join("");
}

function toggleDone(e) {
	if (!e.target.matches("input")) return;
	console.log(e.target);
	const index = e.target.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
}

itemsList.addEventListener("click", toggleDone);

addItems.addEventListener("submit", addItem);
