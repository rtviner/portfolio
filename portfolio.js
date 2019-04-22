let projects = document.getElementById('projectExamples');
console.log(projects);
let infoButtons = document.getElementsByClassName('info');
let closeButton = document.getElementsByClassName('close');


projects.addEventListener('click', function(event) {
	let overlay = event.target.nextElementSibling.lastElementChild;
	overlay.classList.add('clicked');

});