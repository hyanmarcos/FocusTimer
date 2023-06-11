export default function() {
    const buttonPressAudio = new Audio("./audios/button-press.wav")
    const kitchenTimer = new Audio("./audios/kichen-timer.mp3")
    const bgAudio = new Audio("./audios/bg-audio.mp3")

    bgAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}