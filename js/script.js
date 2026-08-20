function toggleMenu() {
	const navLinks = document.getElementById('navLinks');
	const menuButton = document.querySelector('.menu-btn');

	if (!navLinks || !menuButton) {
		return;
	}

	const isOpen = navLinks.classList.toggle('show');
	menuButton.setAttribute('aria-expanded', String(isOpen));
	menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}
