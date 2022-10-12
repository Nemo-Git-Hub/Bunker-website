import './scss/main.scss'

// Modal window
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const modalOverlay = document.querySelector(".modal__overlay");
const triggers = document.querySelectorAll(".trigger-modal");
const closeButton = document.querySelector(".modal__close-button");

function toggleModal() {
	modal.classList.toggle("modal");
	modalBody.classList.toggle("show-modal");
	document.body.classList.toggle("lock");
}

function windowOnClick(event) {
	if (event.target === modalOverlay) {
		toggleModal();
	}
}

triggers.forEach((trigger) => {
	trigger.addEventListener("click", toggleModal);
})
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// Smooth Scrolling - плавная прокрутка

const menuLinks = document.querySelectorAll('.header-menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	
	function onMenuLinkClick(event) {
		const menuLink = event.target
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		
		
		if (menuLink.dataset.goto && gotoBlock) {
			event.preventDefault();
			
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			
			if (iconMenu.classList.contains('active')) {
				document.body.classList.remove("lock");
				iconMenu.classList.remove("active");
				menuBody.classList.remove("active");
			}
			
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
		}
	}
}

// Menu burger

const iconMenu = document.querySelector('.header-nav__menu-icon');
const menuBody = document.querySelector('.header-nav__body');
iconMenu?.addEventListener("click", () => {
	document.body.classList.toggle("lock");
	iconMenu.classList.toggle("active");
	menuBody.classList.toggle("active");
})
