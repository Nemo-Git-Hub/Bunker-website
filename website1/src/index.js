import './scss/main.scss'

// Modal window
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const triggers = document.querySelectorAll(".trigger-modal");
const closeButton = document.querySelector(".modal__close-button");
const body = document.querySelector("body");

function toggleModal() {
	modal.classList.toggle("show-modal");
	body.classList.toggle("lock");
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

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			
			if (iconMenu.classList.contains('active')){
				document.body.classList.remove("lock");
				iconMenu.classList.remove("active");
				menuBody.classList.remove("active");
			}
			
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Menu burger

const iconMenu = document.querySelector('.header-nav__menu-icon');
const menuBody = document.querySelector('.header-nav__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");

	})
}