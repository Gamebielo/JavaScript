
// let serve para criar variáveis com menos abrangencia que a local
let video = document.getElementsByClassName("video-screen")[0];

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function inc() {
    video.playbackRate += 0.10;
}

function dec() {
    video.playbackRate -= 0.10;
}

function retroceder() {
    video.currentTime -= 10;
}

function avancar() {
    video.currentTime += 10;
}
