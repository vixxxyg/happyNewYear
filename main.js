const button = document.querySelector(".btn");
const greeting = document.querySelector(".greeting")
const image = document.querySelector(".santa")

button.addEventListener('click', playMusic);

function playMusic() {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = "./audio/jingle-bells.mp3";
    audio.play();
    greeting.classList.remove("hidden");
    button.classList.add("hidden");
    image.classList.remove("hidden");
}