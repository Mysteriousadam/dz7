const firstNumb = document.querySelector('.first__numb')
const secondNumb = document.querySelector('.second__numb')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const multBtn = document.querySelector('.mult')
const divideBtn = document.querySelector('.divide')
const result = document.querySelector('.result')

function plus () {
    result.innerHTML = +firstNumb.value + +secondNumb.value
}
function minus () {
    result.innerHTML = +firstNumb.value - +secondNumb.value
}
function mult () {
    result.innerHTML = +firstNumb.value * +secondNumb.value
}
function divide () {
    result.innerHTML = +firstNumb.value / +secondNumb.value
}

plusBtn.addEventListener('click', plus)
minusBtn.addEventListener('click', minus)
multBtn.addEventListener('click', mult)
divideBtn.addEventListener('click', divide)