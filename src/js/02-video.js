import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

document.addEventListener('DOMContentLoaded', restorePlaybackTime);

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate(event) {
const currentTime = event.seconds;
localStorage.setItem('videoplayer-current-time', currentTime);
}

function restorePlaybackTime() {
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
player.setCurrentTime(parseFloat(currentTime));
}
}