const button = document.querySelector(".felizNavidad__button");
const greeting = document.querySelector(".felizNavidad")
button.addEventListener('click', playMusic);

function playMusic() {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = "./audio/jingle-bells.mp3";
    audio.play();
    greeting.classList.remove("hidden");
    button.classList.add("hidden");
}