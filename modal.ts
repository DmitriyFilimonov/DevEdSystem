const buttons:NodeListOf<HTMLButtonElement> = (document.querySelectorAll('.delete-button'));

const modalBg:HTMLElement = document.querySelector('.modal-bg');

function SnowModal(){
    modalBg.classList.toggle('shown');
}
buttons.forEach(button =>(button as HTMLButtonElement).onclick = SnowModal);

function CloseModal(){
    modalBg.classList.contains('shown') ? modalBg.classList.remove('shown') : { };
}

modalBg.onclick = CloseModal;

let divWithPropagation:HTMLElement = document.querySelector('.modal');
function PropagationStopper(e:MouseEvent){
    e.stopPropagation();
}

divWithPropagation.onclick = PropagationStopper;