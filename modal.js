var a = document.querySelectorAll('.table-row');
var buttons = new Array();
a.forEach(function (elem) { return buttons.push(elem.lastElementChild.firstElementChild); });
console.log(buttons);
buttons.forEach(function (button) { return button.onclick = handler; });
function handler() {
    var currentButton = this;
    document.querySelector('.modal-bg').classList.toggle('shown');
}
var modalBg = document.querySelector('.modal-bg');
modalBg.onclick = function () {
    modalBg.classList.contains('shown') ? modalBg.classList.remove('shown') : {};
};
