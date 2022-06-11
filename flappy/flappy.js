 var ptSound = new Audio();
    ptSound.src = 'sound/pts.wav';
    var bgMusic = new Audio();
    bgMusic.src = 'sound/bg.mp3';
    var bg = new Image();
    bg.src = 'img/sea.gif';
    var groundImg = new Image();
    groundImg.src = 'img/ground.jpg';
    var pipe1Img = new Image();
    pipe1Img.src = 'img/p1.png';
    var pipe2Img = new Image();
    pipe2Img.src = 'img/p2.png';
    var birdImg = new Image();
    birdImg.src = 'img/bird.png';
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    var pipe = [];
    pipe[0] = {
        x: canvas.width,
    y: 0
};

    var bird = {
        x: 150,
    y: 150,
}
    var ground = {
        x: 0,
    y: canvas.height - 50,
    w: canvas.width,
    h:50
}
    function drawGround() {

        ctx.drawImage(groundImg, ground.x, ground.y, ground.w, ground.h);
    }
    var birdW = 70;
    var birdH = 70;
    function drawBird() {

        ctx.drawImage(birdImg, bird.x, bird.y, birdW, birdH);
    }
    var bgWidth = 700;
    var bgX = 0;
    let startGame = () => {
 
        var pts = 0;
    ctx.drawImage(bg,bgX,0,bgWidth,600);
   
        for (i = 0; i < pipe.length; i++) {


        ctx.drawImage(pipe1Img, pipe[i].x, pipe[i].y, 100, 200);
    ctx.drawImage(pipe2Img, pipe[i].x, pipe[i].y + 350, 100, 300);
    pipe[i].x--;

            if (bird.x > pipe[i].x + 100) {

        pts++;
    $('#point').text(pts);
}
            if (bird.x == pipe[i].x + 100) {
        ptSound.play();
    }

            if (pipe[i].x == canvas.width - 200) {
        pipe.push({
            x: canvas.width,
            y: Math.floor(Math.random() * (0 + 100)) - 100
        }
        );
    }
   
            if (bird.x + 55 >= pipe[i].x && bird.x <= pipe[i].x+100 && (bird.y <= pipe[i].y + 200
                || bird.y + 55 >= pipe[i].y + 350)) {
                bgMusic.pause();
                alert("NOOB. CLICK OK TO TRY AGAIN");
                window.location.href = "flappy.html";
}



}

bird.y = bird.y + 3;
drawBird();
drawGround();
        if (bird.y >= ground.y - 55) {
        bgMusic.pause();
            alert("NOOB. CLICK OK TO TRY AGAIN");
            window.location.href = "flappy.html";
    
}

requestAnimationFrame(startGame);
}

    function moveUp() {
        document.addEventListener("click", function (e) {
            bgMusic.play();
            bird.y = bird.y - 35;
            setTimeout(function () { bgX = -2 }, 1000 / 30);
            setTimeout(function () { bgX = 0 }, 1000 / 20);
            setTimeout(function () { birdImg.src = 'img/bird2.png'; }, 1000 / 20);
            setTimeout(function () { birdImg.src = 'img/bird.png'; }, 1000 / 5);


        });
    }
    bgMusic.addEventListener('ended', function () {
        bgMusic.play();
    });
    requestAnimationFrame(moveUp);
    window.onload = requestAnimationFrame(startGame);
