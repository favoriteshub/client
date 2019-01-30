export function noScroll(condition) {
	if (condition) {
		document.querySelector("body").classList.add("no-scroll");
	} else {
		document.querySelector("body").classList.remove("no-scroll");
	}
}
