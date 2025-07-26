function login() {
    const username = document.getElementById('usuario').value.trim();
    const password = document.getElementById('senha').value.trim();

    if (username === "" || password === "") {
        alert("Usuário e senha incorretos");
        return; // PARA AQUI e não executa nada mais
    }
    window.location.href = "../mainpage/dashboard.html"; // Troca de página!
}

console.log("Renderer.js carregado.");

const video = document.getElementById("meuVideo");
const icon = document.getElementById("volumeIcon")

function toggleMute() {
    video.muted = !video.muted;
    if (video.mute) {
        icon.innerHTML = `
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z"/>
        <path d="M3 10v4h4l5 5V5l-5 5H3z"/>
        <line x1="1" y1="1" x2="23" y2="23" stroke="white" stroke-width="2"/>
        `;
    } else {
        icon.innerHTML = `<path d="M3 10v4h4l5 5V5l-5 5H3z"/>`;
    }
}

function mudarVolume(valor) {
    video.volume = valor;
    if (video.volume === 0) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}