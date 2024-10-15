document.getElementsByClassName('dj-disk-button')[0].addEventListener('click', () => {
    const disk = document.getElementsByClassName('dj-disk-button')[0];
    disk.style.transition = 'transform 1s ease'; // Animation de rotation fluide
    disk.style.transform = 'rotate(360deg)'; // Rotation à 360 degrés
});
