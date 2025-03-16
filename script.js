document.addEventListener("DOMContentLoaded", () => {
	const dropdowns = document.querySelectorAll(".dropdown");

	dropdowns.forEach((dropdown) => {
		const select = dropdown.querySelector(".select");
		const caret = dropdown.querySelector(".caret");
		const menu = dropdown.querySelector(".main-nav-list");
		const options = dropdown.querySelectorAll(".main-nav-link");
		const selected = dropdown.querySelector(".selected");

		select.addEventListener("click", () => {
			console.log("Select clicked");
			select.classList.toggle("select-clicked");
			caret.classList.toggle("caret-rotate");
			menu.classList.toggle("menu-open");
		});

		options.forEach((option) => {
			option.addEventListener("click", (event) => {
				event.preventDefault();
				console.log("Option clicked: " + option.innerText);
				options.forEach((opt) => {
					opt.classList.remove("selected-option");
				});
				option.classList.add("selected-option");
			});
		});
	});
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

const signUp = document.querySelector(".btn.btn--form");
signUp.addEventListener("click", function () {
	alert("You have registered on eatit!");
	console.log("You have registered on eatit!");
});
