console.log("script.js cargado correctamente");

const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
}

function stop() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.textContent = 'Play';
}

function setVolume(value) {
    audioPlayer.volume = value;
}

function seek(event) {
    const progressContainer = document.querySelector('.progress-container');
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const totalWidth = rect.width;
    const percentage = offsetX / totalWidth;
    audioPlayer.currentTime = percentage * audioPlayer.duration;
}

function loadSong(song) {
    audioPlayer.src = song;
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

// Update progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${percentage}%`;

});