let infoButtons = document.querySelectorAll('.projectLink.info');

function changeIcon(currentClass, icon) {
	let newClass = (currentClass === "fa fa-info-circle") ?
			"fa fa-close" :
			"fa fa-info-circle";
	icon.className = newClass;
}

function changeOverlayView(currentView, overlay) {
	let newClass = (currentView === "overlay hidden") ?
			"overlay visible" :
			"overlay hidden";
	overlay.className = newClass;
}

function handleButtonClick (event) {
	let overlay = event.target.nextElementSibling.lastElementChild;
	let icon = event.target.firstElementChild;
	changeIcon(icon.className, icon);
	changeOverlayView(overlay.className, overlay);
}

function handleIconClick (event) {
	let overlay = event.target.parentElement.nextElementSibling.lastElementChild;
	let icon = event.target;
	changeIcon(icon.className, icon);
	changeOverlayView(overlay.className, overlay);
}

infoButtons.forEach(button => button.addEventListener('click', event => (event.target.id === "open") ?
		handleButtonClick(event) : handleIconClick(event)
));