var bg = new Image();
bg.src = 'seabg.jpg';
var ptsSound = new Audio();
ptsSound.src = "sound/pts.wav";
var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');
let bars = [

];
for (dy = 0; dy < 2; dy++) {
    for (dx = 0; dx < 10; dx++) {
        bars.push(
            { x: dx * 50, y: dy * 50 }
        )
    }
}
function drawBg() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function drawBars() {

    for (i = 0; i < bars.length; i++) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(bars[i].x, bars[i].y, 50, 50);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeRect(bars[i].x, bars[i].y, 50, 50);
    }
}

var bgMusic = new Audio();
bgMusic.src = "sound/bg.mp3";

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 500, 500);
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 5;
var dy = -5;
var ballRadius = 20;
function drawBall() {

    var imgSrc = new Image();
    imgSrc.src = "ball.png";
    ctx.drawImage(imgSrc, x, y, ballRadius, ballRadius);

}
var paddleX = 210;
function drawPaddle() {
    ctx.fillStyle = '#1ab7ea';
    ctx.fillRect(paddleX, canvas.height - 10, 100, 10);
}
drawPaddle();
drawBars();
var pts = 0;
function draw() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBars();
    ctx.clearRect(x, y, 20, 20);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBars();
    x = x + dx;
    y = y + dy;
    drawBall();
    if (x >= canvas.width - ballRadius + 1) {
        dx = -dx;
    }
    if (x <= 0) {
        dx = -dx;
    }
    if (y <= 0) {
        dy = -dy;
    }
    if (y + 20 > canvas.height) {

        bgMusic.pause();
        alert("NOOB. CLICK OK TO TRY AGAIN");
        window.location.href = "pingpong.html";


    }
    if (y + 30 >= canvas.height && x + 20 >= paddleX && x + 20 <= paddleX + 100) {
        dy = -dy;

    }
    for (b = 0; b < bars.length; b++) {
        if (y <= bars[b].y + 50 && bars[b].x == x && x + 50 == bars[b].x + 50) {
            pts += 10;
            $('#point').text('POINTS : ' + pts + '');
            ptsSound.play();
            dy = -dy;
            ctx.clearRect(bars[b].x, bars[b].y, 50, 50);
            bars.splice(b, 1);

        }
    }
    if (pts == 200) {
        bgMusic.pause();
        alert("VERY GOOD. NOW CLICK OK TO PLAY AGAIN");
        window.location.href = "pingpong.html";
    }
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
document.addEventListener('keydown', function (e) {
    if (e.which == 39 || e.which == 68) {
        moveR();
    }
    if (e.which == 37 || e.which == 65) {
        moveL();
    }
});
let dxr = 20;
var zz = 0;
let moveR = () => {
    setTimeout(function () {
        dxl = -20;
        bgMusic.play();

        ctx.clearRect(paddleX, canvas.height - 10, 20, 10);
        paddleX = paddleX + dxr;
        drawPaddle();

        if (paddleX + 100 >= canvas.width) {
            dxr = 0;

        }
    }, 1000 / 60);
}
let dxl = -20;
let moveL = () => {
    setTimeout(function () {
        dxr = 20;
        bgMusic.play();
        ctx.clearRect(paddleX + 80, canvas.height - 10, 20, 10);
        paddleX = paddleX + dxl;
        drawPaddle();
        if (paddleX <= 0) {
            dxl = 0;

        }
    }, 1000 / 60);
}
