/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
const openBtn = document.querySelector('.collapsible__button');
const text = document.querySelector('.collapsible__content')
const visibleBtnText = document.querySelector('.collapsible__action--visible')
const hiddenBtnText = document.querySelector('.collapsible__action--hidden')
openBtn.addEventListener('click', hendlOpen)
hendlOpen()
let animationBlockOpen = [
    { transform: 'scale(0)' },
    { transform: 'scale(0.5)', offset: 0.3 },
    { transform: 'scale(1)' }
]

let animationTime = {
    duration: 800
}
function hendlOpen() {

    if (text.style.display !== 'none') {

        text.style.display = 'none'
        visibleBtnText.style.display = 'none'
        hiddenBtnText.style.display = 'block'
    }
    else {
        text.style.display = 'block'
        text.animate(animationBlockOpen, animationTime)
        visibleBtnText.style.display = 'block'
        hiddenBtnText.style.display = 'none'
    }
}



