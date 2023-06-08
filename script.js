// DOM
// Document Object Model

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

let minutes

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// Event-driven
// programação imperativa
// callback

function resetControl(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

// Função recursiva
function countdown() {
    setTimeout(function (){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
    
        secondsDisplay.textContent = "00"
        
        if (minutes <= 0) {
            resetControl()
            return
        }


        if (seconds <= 0) {
            seconds = 2

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

        countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    countdown()
})

buttonPause.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')

    buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function(){
    resetControl()
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')    
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')    
})

buttonSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutos?')

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
})

