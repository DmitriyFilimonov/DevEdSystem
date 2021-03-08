var buttons = (document.querySelectorAll('.delete-button'));
var modalBg = document.querySelector('.modal-bg');
function SnowModal() {
    modalBg.classList.toggle('shown');
}
buttons.forEach(function (button) { return button.onclick = SnowModal; });
function CloseModal() {
    modalBg.classList.contains('shown') ? modalBg.classList.remove('shown') : {};
}
modalBg.onclick = CloseModal;
var divWithPropagation = document.querySelector('.modal');
function PropagationStopper(e) {
    e.stopPropagation();
}
divWithPropagation.onclick = PropagationStopper;
var closeModalButton = document.querySelector('.close-modal-button');
closeModalButton.onclick = CloseModal;
