var rows = document.querySelectorAll('.table-row');
var buttons = new Array();
rows.forEach(function (row) { return buttons.push(row.lastElementChild.lastElementChild); });
buttons.forEach(function (button) {
    return button.onclick = handler;
});
function handler() {
    document.querySelector('.modal-bg').classList.toggle('shown');
}
var modalBg = document.querySelector('.modal-bg');
modalBg.onclick = function () {
    modalBg.classList.contains('shown') ? modalBg.classList.remove('shown') : {};
};
var divWithPropagation = document.querySelector('.modal');
function PropagationStopper(e) {
    e.stopPropagation();
}
divWithPropagation.onclick = PropagationStopper;
