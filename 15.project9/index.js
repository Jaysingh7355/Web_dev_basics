document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("pig-pong-table");
    let ball = document.getElementById("ball");
    let paddle = document.getElementById("paddle");

    let ballX = 50;
    let ballY = 50;
    let dx = 2;
    let dy = 2;

    ball.style.top = `${ballX}px`;
    ball.style.left = `${ballY}px`;

    setInterval(function exec() {
        ballX += dx;
        ballY += dy;

        // Check if the ball hits the left or right boundaries
        if (ballX <= 0 || ballX >= table.offsetWidth - ball.offsetWidth) {
            dx *= -1;
        }

        // Check if the ball hits the top or bottom boundaries
        if (ballY <= 0 || ballY >= table.offsetHeight - ball.offsetHeight) {
            dy *= -1;
        }

        // Check if the ball hits the paddle
        if (ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
        ) {
            dx *= -1;
        }

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
    }, 1);

    let paddleY = 0;
    let dpy = 5;

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.keyCode == 38 && paddleY > 0) {
            paddleY -= dpy;
        } else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            paddleY += dpy;
        }
        paddle.style.top = `${paddleY}px`;
    });

    document.addEventListener("mousemove", (event) => {
        let mouseY = event.clientY;
        let tableTop = table.offsetTop;
        let mouseYRelativeToTable = mouseY - tableTop;
        let newPaddleY = mouseYRelativeToTable - paddle.offsetHeight / 2;

        if (newPaddleY >= 0 && newPaddleY <= table.offsetHeight - paddle.offsetHeight) {
            paddleY = newPaddleY;
            paddle.style.top = `${paddleY}px`;
        }
    });
});
