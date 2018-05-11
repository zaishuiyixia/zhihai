var btn = document.querySelector('.button-container button'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');

btn.addEventListener('click', function(e) {
	e.stopPropagation();
	overlay.setAttribute('style', 'display: block');
});

// modal.addEventListener('click', function(e) {
// 	e.stopPropagation();
// 	if (e.target.classList.contains('confirm')) {
// 		overlay.setAttribute('style', 'display: none');
// 	}
// })