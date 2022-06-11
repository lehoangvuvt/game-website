var musics = ["sound/bg.mp3", "sound/bg2.mp3", "sound/bg3.mp3"];
var bg = new Audio();
var songCount = 0;
bg.src = musics[songCount];
var selectSound = new Audio();
selectSound.src = "sound/select.wav";
var enterSound = new Audio();
enterSound.src = "sound/enter.wav";
var current = 1;
document.addEventListener('keydown', function (e) {
    if (e.which == 40) {
        bg.playbackRate = 1.3;
        bg.play();
        selectSound.play();
        if (current == 4) {
            current = 1;
        } else {
            current++;
        }
        if (current == 1) {
            $('#mario').removeClass('current');
            $('#mario').text('mario');
            $('#snake').addClass('current');
            $('#snake').prepend('> ');
        }
        if (current == 2) {
            $('#snake').removeClass('current');
            $('#snake').text('SNAKE');
            $('#pingpong').addClass('current');
            $('#pingpong').prepend('> ');
        }
        if (current == 3) {
            $('#pingpong').removeClass('current');
            $('#pingpong').text('PING PONG');
            $('#flappy').addClass('current');
            $('#flappy').prepend('> ');
        }
        if (current == 4) {
            $('#flappy').removeClass('current');
            $('#flappy').text('flappy');
            $('#mario').addClass('current');
            $('#mario').prepend('> ');
        }
    }
    if (e.which == 38) {
        bg.playbackRate = 1.3;
        bg.play();
        selectSound.play();
        if (current == 1) {
            current = 4;
        } else {
            current--;
        }
        if (current == 1) {
            $('#pingpong').removeClass('current');
            $('#pingpong').text('PING PONG');
            $('#snake').addClass('current');
            $('#snake').prepend('> ');
        }
        if (current == 2) {
            $('#flappy').removeClass('current');
            $('#flappy').text('flappy bird');
            $('#pingpong').addClass('current');
            $('#pingpong').prepend('> ');
        }
        if (current == 3) {
            $('#mario').removeClass('current');
            $('#mario').text('mario');
            $('#flappy').addClass('current');
            $('#flappy').prepend('> ');
        }
        if (current == 4) {
            $('#snake').removeClass('current');
            $('#snake').text('snake');
            $('#mario').addClass('current');
            $('#mario').prepend('> ');
        }

    }
    if (e.which == 39 || e.which == 13 || e.which == 32) {
        enterSound.play();
        setTimeout(function () {
            if (current == 1) {
                window.location.href = "pingpong/snake.html";
            }
            if (current == 2) {
                window.location.href = "pingpong/pingpong.html";
            }
            if (current == 3) {
                window.location.href = "flappy/flappy.html";
            }
            if (current == 4) {
                window.location.href = "mario/mariolv11.html";
            }
        }, 100);

    }
});
var body = document.getElementById('body');


bg.playbackRate = 1.3;
window.onload = bg.play();



bg.addEventListener('ended', function () {
    if (songCount == 2) {
        songCount = 0;
    } else {
        songCount++;
    }

    bg.src = musics[songCount];
    bg.playbackRate = 1.3;
    bg.play();

});
