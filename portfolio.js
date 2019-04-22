let projects = document.getElementById('projectExamples');

projects.addEventListener('click', function(event) {
	if (event.target.className === "projectLink info") {
		let overlay = event.target.nextElementSibling.lastElementChild;
		overlay.classList.add('clicked');
	} else if (event.target.className == "close") {
		let overlay = event.target.parentNode;
		overlay.classList.remove('clicked');
	}
});