import './scss/main.scss'

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