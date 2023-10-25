let speech = new SpeechSynthesisUtterance();

document.querySelector(".btn").addEventListener('click', () =>{
    speech.text = document.querySelector("#textarea").value;
    window.speechSynthesis.speak(speech);
});