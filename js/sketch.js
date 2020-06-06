let playerPaddle;
let aiPaddle;
let ball;
let playerScore;
let aiScore;

function setup() {
    createCanvas(624, 351)
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 48);
    ball = new Ball();
    playerScore = new Score(width / 2 - 40);
    aiScore = new Score(width / 2 + 40);
};

function draw() {
    background(0);
    playerPaddle.display();
    aiPaddle.display();

    playerPaddle.update();
    aiPaddle.update();

    processAI(aiPaddle);
    // processAI(playerPaddle);

    ball.update(playerScore, aiScore);
    ball.display();

    ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    stroke(255);
    line(width / 2, 0, width / 2, height);

    playerScore.display();
    aiScore.display();

};

function processAI(ai) {
    let middleOfPaddle = ai.y + ai.height / 2;

    if (middleOfPaddle > ball.y) {
        ai.isUp = true;
        ai.isDown = false;
    } else {
        ai.isDown = true;
        ai.isUp = false;
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        playerPaddle.isUp = true;
    } else if (keyCode === DOWN_ARROW) {
        playerPaddle.isDown = true;
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        playerPaddle.isUp = false;
    } else if (keyCode === DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}