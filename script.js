const articles = document.querySelectorAll("article");
const menu = document.getElementById("articles");

let menuItems = [];

articles.forEach((article, i) => {
	const p = document.createElement("p");
	p.classList.add("article");

	p.innerText = article.id;

	p.addEventListener("click", () => toggleArticle(article.id, i), false);
	p.addEventListener("mouseenter", () => menuItemHover(i), false);
	p.addEventListener("mouseout", () => menuItemHoverStop(), false);

	menu.appendChild(p);

	menuItems.push(p);
});
menuItems[0].classList.add("menuItemSelected");

function menuItemHover(index) {
	menuItems.forEach((item) => {
		item.classList.remove("nearbyHover");
	});
	console.log(menuItems[index + 1]);
	if (index < menuItems.length - 1 && index > 0) {
		menuItems[index - 1].classList.add("nearbyHover");
		menuItems[index + 1].classList.add("nearbyHover");
	}
	if (index === menuItems.length - 1) {
		menuItems[index - 1].classList.add("nearbyHover");
	}
	if (index === 0) {
		menuItems[index + 1].classList.add("nearbyHover");
	}
}
function menuItemHoverStop() {
	menuItems.forEach((item) => {
		item.classList.remove("nearbyHover");
	});
}

function toggleArticle(id, index) {
	articles.forEach((article) => {
		article.style.display = "none";
	});
	document.getElementById(id).style.display = "block";
	menuItems.forEach((item) => {
		item.classList.remove("menuItemSelected");
	});
	menuItems[index].classList.add("menuItemSelected");
}
