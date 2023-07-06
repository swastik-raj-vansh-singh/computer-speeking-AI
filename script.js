const playbuttton = document.getElementById('play-button');
const pausebuttton = document.getElementById('pause-button');
const stopbuttton = document.getElementById('stop-button');
const textinput = document.getElementById('text');
const speedinput = document.getElementById('speed');

playbuttton.addEventListener('click',() =>{
    playtext(textinput.value)
})
pausebuttton.addEventListener('click', pausetext)
stopbuttton.addEventListener('click',stoptext)

function playtext(text){
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const utterance =  new SpeechSynthesisUtterance(text)
    utterance.rate = speedinput.value || 1
    utterance.addEventListener('end', () => {
        textinput.disabled = false
    })
    textinput.disabled = true
    speechSynthesis.speak(utterance)
}

function pausetext(){
    if(speechSynthesis.speaking) speechSynthesis.pause()
}

function stoptext(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}
