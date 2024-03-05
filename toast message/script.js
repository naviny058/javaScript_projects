const btn = document.querySelector('button')
const toastArea = document.querySelector('.toast-area')
const userInput = document.querySelector('#user-input')
const horizontal = document.querySelector('#horizontal-pos')
const vertical = document.querySelector('#vertical-pos')

let i = 0

function crateToastMessage() {
    let val = userInput.value
    const div = document.createElement('div')
    div.classList.add('toast-message')
    div.innerHTML = ` <div class="toast-message">
    <h4>${val}  ${i}</h4>
    </div>`
    toastArea.style.position = 'absolute'
    if (horizontal.value === 'left') {
        toastArea.style.left = '2rem';
        toastArea.style.right = '';
    } else {
        toastArea.style.right = '2rem';
        toastArea.style.left = '';
    }
    if (vertical.value === 'bottom') {
        toastArea.style.bottom = '2rem';
        toastArea.style.top = '';
    } else {
        toastArea.style.top = '2rem';
        toastArea.style.bottom = '';
    }
    console.log('hor', horizontal.value);
    console.log('ver', vertical.value);
    console.log(toastArea);
    toastArea.prepend(div)
}
function removeToastMessage() {
    let timer
    timer = setTimeout(() => {
        if (toastArea.childNodes.length < 1) {
            clearInterval(timer)
        }
        toastArea.removeChild(toastArea.lastChild)
    }, 2000);
}
function toastMessage() {
    crateToastMessage()
    i++
    removeToastMessage()
}
btn.addEventListener('click', toastMessage)