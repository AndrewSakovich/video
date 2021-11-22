
function init() {

max = 400; loop = 0;
let media = document.getElementById('media');
let play = document.getElementById('play');
let mute = document.getElementById('mute');
let bar = document.getElementById('bar');
// let progress = document.getElementById('progress');
let volume = document.getElementById('volume');

play.addEventListener('click', push);
media.addEventListener('click',push);
mute.addEventListener('click', sound);
bar.addEventListener('click', move);
volume.addEventListener('change', level);

}

function push() {
    if (media.paused && !media.ended) {
    media.play();
    play.innerHTML = 'Пауза';
    loop = setInterval(status, 1000);

    } else {
        media.pause(); 
        play.innerHTML = 'Воспр.';
        clearInterval(loop);
    }
}

function status() {
    if (!media.ended) {
        let size = Math.round(media.currentTime * max / media.duration);
        progress.style.width = `${size}px`;
        // console.log(size);
    }
}

function move(e) {
let mouseX = e.pageX - bar.offsetLeft;
    // console.log(mouseX);
progress.style.width = `${mouseX}px`;
let newTime = mouseX * media.duration / max;
media.currentTime = newTime;

}

// Вкл.
// Пауза

function sound() {
    if (media.muted) {
        media.muted = false; 
        mute.innerHTML = 'Звук';
    } else {
        media.muted = true; 
        mute.innerHTML = 'Вкл.'; 
    }
}

function level() {
    media.volume = volume.value;
    console.log(volume.value);
}


addEventListener('load', init);
