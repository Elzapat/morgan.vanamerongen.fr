function update_arrow_color() {
	let sections = document.getElementsByTagName("section");

	for (let section of sections) {
		if (section.getBoundingClientRect().top <= window.innerHeight) {
			let color = window.getComputedStyle(section).color;
			document.getElementById("up-arrow").style.fill = color;
		}
	}
}

update_arrow_color();

window.onscroll = update_arrow_color;
