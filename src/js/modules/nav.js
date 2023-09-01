function nav() {
	// Mobile nav button
	const btnMenu = document.querySelector('.btn-menu');
	const menu = document.querySelector('.menu');
	const btnMenuClose = document.querySelector('.btn-menu-close');

	btnMenu.onclick = function () {
		menu.classList.add('open-menu');
		btnMenu.classList.add('d-none')
		btnMenuClose.classList.add('d-block')
	};
	btnMenuClose.onclick = function () {
		btnMenuClose.classList.remove('d-block')
		menu.classList.remove('open-menu');
		btnMenu.classList.remove('d-none')
	};

}

export default nav;
