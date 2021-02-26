let a = (document.querySelectorAll('.table-row') as NodeListOf<HTMLElement>);
let buttons = new Array<Element>();
a.forEach(elem => buttons.push(elem.lastElementChild.firstElementChild));

console.log(buttons);

buttons.forEach(button => (button as HTMLButtonElement).onclick = handler);

function handler(){
    let currentButton: HTMLButtonElement = this as unknown as HTMLButtonElement;
    (document.querySelector('.modal-bg') as HTMLElement).classList.toggle('shown');
}

let modalBg = document.querySelector('.modal-bg') as HTMLElement;

modalBg.onclick = () => {
    modalBg.classList.contains('shown')?modalBg.classList.remove('shown'):{};
};