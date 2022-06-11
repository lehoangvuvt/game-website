
var point = document.getElementById('point');
var pts = 0;
 var jumpSound = new Audio();
    jumpSound.src = "sound/jump01.wav";
    var bgMusic = new Audio();
    bgMusic.src = "sound/bg.flac";
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 400, 400);
    var dx = 100;
    var dy = 100;

    var snake = [
        {x: dx-10, y: dy },
        {x: dx,y:dy}
];



    let createSnake = () => {
        for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'black';
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);

}
}
let appleX = 10 * ((Math.floor(Math.random() * 10) + 5))+100;
console.log(appleX);
let appleY = 10 * ((Math.floor(Math.random() * 5) + 1)) + 100;
console.log(appleY);
    var apple = {
        x: appleX, y: appleY
}
var appleLocales = [];
    appleLocales[0] = {
        xL: 0,
    yL: 0
};

    let createApple = () => {

        ctx.fillStyle = 'orange';
    ctx.fillRect(apple.x, apple.y, 10, 10);
};




let dxx = 10;
let dyy = 0;

createSnake();
function startSnake() {
    createApple();
    bgMusic.play();
    if (dx > 400) {
        dx = 0
    } else if (dx < 0) {
        dx = 400;
    } else if (dy > 400) {
        dy = 0;
    } else if (dy < 0) {
        dy = 400;
    }
    else {
        dx = dx + dxx;
        dy = dy + dyy;
    }
    snake.push({
        x: dx,
        y: dy
    })

    for (z = 0; z < snake.length - 1; z++) {
        if (dx === snake[z].x && dy === snake[z].y) {
            alert("YOU SUCK. CLICK OK TO TRY AGAIN");
            window.location.href = "snake.html";
        }
    }
    if (dx === apple.x && dy === apple.y) {
        jumpSound.play();
        appleLocales.push({
            xL: apple.x,
            yL: apple.y
        });
        snake.push({
            x: dx,
            y: dy
        })
        pts = pts + 5;
        ctx.clearRect(apple.x, apple.y, 10, 10);
        point.innerText = pts;
        recreateApple();
    }
    for (i = 0; i < snake.length; i++) {
        ctx.clearRect(snake[0].x, snake[0].y, 10, 10);
    }
    snake.shift();
    createSnake();
  
}
var isUp = false;
var isLeft = false;
var isRight = true;
var isDown = true;
    document.addEventListener('keydown', function (key) {
        if (key.which === 40) {
            if (!isUp) {
        isDown = true;
    isRight = false;
    isLeft = false;
    isUp = false;
    dyy = 10;
    dxx = 0;
    startSnake();
            } else {
        isDown = false;
    }
        } else if (key.which === 39) {
            if (!isLeft) {
        isRight = true;
    isDown = false;
    isLeft = false;
    isUp = false;
    dyy = 0;
    dxx = 10;
    startSnake();
            } else {
        isRight = false;
    }
        } else if (key.which === 37) {
            if (!isRight) {
        isLeft = true;
    isDown = false;
    isRight = false;
    isUp = false;
    dyy = 0;
    dxx = -10;
    startSnake();
            } else {
        isLeft = false;
    }
        } else if (key.which === 38) {
            if (!isDown) {
        isUp = true;
    isDown = false;
    isLeft = false;
    isRight = false;
    dyy = -10;
    dxx = 0;
    startSnake();
            } else {
        isUp = false;
    }
}
});
var fps = 15
setInterval(startSnake, 1000 / fps);
let recreateApple = () => {
   
  
       
        appleX = 10 * ((Math.floor(Math.random() * 10) + 5)) + 100;
        appleY = 10 * ((Math.floor(Math.random() * 5) + 1)) + 100;
       
           
   
    if (pts >= 40) {
        bgMusic.playbackRate = 1.3;
        

    } 
    if (pts >= 60) {
        bgMusic.playbackRate = 1.5;


    } 
    if (pts >= 100) {
        bgMusic.playbackRate = 1.8;


    } 
    
        apple.x = appleX;
        apple.y = appleY;
       
    

}
bgMusic.addEventListener('ended', function () {
    bgMusic.play();
});


