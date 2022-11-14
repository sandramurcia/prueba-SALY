const button = document.querySelector('.btn-abrir')
const close = document.querySelector('#close')
const modalContainer = document.querySelector('.pop-up')
const modalContainerWrap = document.querySelector('.pop-up-wrap')

button.addEventListener('click', (e) => {
    modalContainer.classList.toggle('show')
    modalContainerWrap.classList.toggle('show')
})

close.addEventListener('click', (e) => {
    modalContainer.classList.toggle('show')
    modalContainerWrap.classList.toggle('show')
})