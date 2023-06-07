// DOM
// Document Object Model

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

// Event-driven
// programação imperativa
// callback

play.addEventListener('click', function(){
    play.classList.add('hide')

    pause.classList.remove('hide')
})

pause.addEventListener('click', function(){
    play.classList.remove('hide')

    pause.classList.add('hide')
})