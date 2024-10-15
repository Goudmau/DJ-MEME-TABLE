let currentAudio = null;

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Remettre à zéro le son
    }
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        stopCurrentAudio(); // Arrêter le son actuel
        const soundFile = button.getAttribute('data-sound');
        currentAudio = new Audio(soundFile);
        currentAudio.play(); // Jouer le nouveau son
    });
});
